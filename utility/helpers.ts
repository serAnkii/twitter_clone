"use server"
import { Database } from "@/lib/database.types";
import { createClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export const likes = async ({ tweetid, uid, uname }: { tweetid: string, uid: string, uname: string }) => {



    const { data, error } = await supabase.from('likes').select().eq("tweet_id", tweetid).eq("user_id", uid)


    if (data?.length == 0) {
        await supabase.from("likes").insert({
            id: randomUUID(),
            tweet_id: tweetid,
            user_id: uid,
            u_name: uname
        })
    }


    if (data?.length != 0) {
        await supabase.from("likes").delete().eq("tweet_id", tweetid).eq("u_name", uname)

    }

    revalidatePath("/")
}


export const isliked = async ({ tweetid, uid }: { tweetid: string, uid: string }) => {



    const { data, error } = await supabase.from('likes').select().eq("tweet_id", tweetid).eq("user_id", uid)


    return data?.length
}






export const reply = async ({ tweetid, uid, reply, uname }: { tweetid: string, uid: string, reply: string, uname: string }) => {



    await supabase.from("replies").insert({
        id: randomUUID(),
        tweet_id: tweetid,
        user_id: uid,
        text: reply,
        username: uname,
    })


    revalidatePath("/")
}


export const addOrRemoveBookmark = async ({ tweetid, uid }: { tweetid: string, uid: string }) => {

    const { data, error } = await supabase.from("bookmarks").select().eq("tweet_id", tweetid).eq("user_id", uid)
    if (data?.length == 0) {
        const { data, error } = await supabase.from("bookmarks").insert({
            id: randomUUID(),
            tweet_id: tweetid,
            user_id: uid,
        })
        console.log(data, error)
    }
    else {
        await supabase.from("bookmarks").delete().eq("tweet_id", tweetid).eq("user_id", uid);
    }

    revalidatePath("/")

}


export const isbookmarked = async ({ tweetid, uid }: { tweetid: string, uid: string }) => {



    const { data, error } = await supabase.from('bookmarks').select().eq("tweet_id", tweetid).eq("user_id", uid)


    return data?.length
}



export const getreplies = async (tweetid: string) => {



    const { data, error } = await supabase.from("replies").select().eq("tweet_id", tweetid)
    if (error) {
        console.log(error.message)
        return
    }
    return data;

}




export const gettweets = async () => {
    // const supabase = createClient(
    //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    // );

    // const { data, error } = await supabase.from("tweets").select();

    // if (error) {
    //     console.log(error.message)
    // }


    // return data;
    // Assuming your Tweet interface is defined somewhere like this


    const tweets = await prisma.$queryRaw`SELECT * from tweets`;

    // Assuming tweets is an array, you can use 'as' to cast it to the expected type
    return tweets;
}


export const getsingletweet = async (id: string) => {

    const { data, error } = await supabase.from("tweets").select().eq("id", id);

    if (error) {
        console.log(error.message)
    }

    return data
}

export async function getuserdata() {

    const supabase = createServerComponentClient({ cookies })
    const uobj = await supabase.auth.getSession()
    const uname = uobj.data.session?.user.user_metadata.username
    const uid = uobj.data.session?.user.id

    return { uname, uid }
}



export async function sumbittweet(Formdata: FormData) {
    "use server"
    const tweet = Formdata.get("tweet");
    if (!tweet) {
        return;
    }

    const supabase = createServerComponentClient<Database>({ cookies });
    const { uname, uid } = await getuserdata();

    const { data, error } = await supabase.from("tweets").insert({
        id: randomUUID(),
        text: tweet.toString(),
        created_by: uname,
        profile_id: uid,
    });

    if (error) {
        console.error("Error submitting tweet:", error);
        return;
    }
    else {

        revalidatePath("/")

    }
}


export const getallbookmarks = async () => {
    const id = (await supabase.auth.getSession()).data.session?.user.id
    const { data } = await supabase.from("bookmarks").select().eq("user_id", id!)
    console.log(data);
}
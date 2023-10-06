"use server"
import { Database } from "@/lib/database.types";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

export const likes = async ({ tweetid, uid, uname }: { tweetid: string, uid: string, uname: string }) => {

    const supabase = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

     
    const {data ,error} = await supabase.from('likes').select().eq("tweet_id",tweetid).eq("user_id",uid)
    

    if(data?.length==0)
    {
    await supabase.from("likes").insert({
        id: randomUUID(),
        tweet_id: tweetid,
        user_id: uid,
        u_name: uname
    })
}   


if(data?.length!=0){
    await supabase.from("likes").delete().eq("tweet_id",tweetid).eq("u_name",uname)
    
}

revalidatePath("/")
}


export const reply = async ({tweetid,uid,reply}:{tweetid:string , uid:string, reply:string })=>{
    const supabase = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    


        await supabase.from("replies").insert({
            id: randomUUID(),
            tweet_id: tweetid,
            user_id: uid,
            text:reply
        })
    

    // revalidatePath("/")
}



"use server"
import { Database } from "@/lib/database.types";
import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

export const likes = async ({ tweetid, uid, uname }: { tweetid: string, uid: string, uname: string }) => {
    const supabase = createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    await supabase.from("likes").insert({
        id: randomUUID(),
        tweet_id: tweetid,
        user_id: uid,
        u_name: uname
    })

}


import React from "react";
import { cookies, headers } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { randomUUID } from "crypto";
import {toast} from "sonner"
import { error } from "console";

let err = undefined; 

const Composetweet = () => {
  async function submit(Formdata: FormData) {
    "use server";

    const tweet = Formdata.get("tweet");
    console.log(tweet);

    if (!tweet) {
      return;
    }

    const supabase = createServerComponentClient<Database>({ cookies });
    
    const {data,error} = await supabase
      .from("tweets")
      .insert({ id:randomUUID(), text: tweet.toString() } as any);
    
        err = error;
    
    }


    

  return (
    <form action={submit} className="flex flex-col w-full h-full">
      <input
        type="text"
        name="tweet"
        className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
        placeholder="What's happening?"
      />
      <div className="w-full justify-between items-center flex">
        <div></div>
        <div className="w-full max-w-[100px]">
          <button
            type="submit"
            className="rounded-full bg-twitterColor px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold bg-twitter"
          >
            Tweet
          </button>
        </div>
      </div>
    </form>
  );
};

export default Composetweet;

export {err};
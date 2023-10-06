import React from "react";
import { cookies, headers } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { randomUUID } from "crypto";
import { toast } from "sonner";
import { error } from "console";
import { revalidatePath } from "next/cache";
import Form from "../Client-components/Form";

const Composetweet = () => {
  async function submit(Formdata: FormData) {
    "use server";

    const tweet = Formdata.get("tweet");


    if (!tweet) {
      return;
    }
    
    const supabase = createServerComponentClient<Database>({ cookies });
    const username = (await supabase.auth.getSession()).data.session?.user
      .user_metadata.username;
    const pfpid = (await supabase.auth.getSession()).data.session?.user.id;
    const { data, error } = await supabase.from("tweets").insert({
      id: randomUUID(),
      text: tweet.toString(),
      created_by: username,
      profile_id: pfpid,
    } as any);

    if (error) {
      console.error("Error submitting tweet:", error);
      return;
    }
    else{
      revalidatePath("/")
    
    }
  }

  return (
    <form action={submit} className="flex flex-col w-full h-full">
      <Form />
    </form>
  );
};

export default Composetweet;

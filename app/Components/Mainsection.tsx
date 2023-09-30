
import "@/app/globals.css"

import Composetweet from "./Server-components/Composetweet";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import Tweets from "@/app/Components/Client-components/Tweets"
import { Signout } from "../login/page";

const Mainsection = async () => {
  
  
  const supabase = createServerComponentClient<Database>({cookies})

  const { data, error } = await supabase
  .from('tweets')
  .select();


  return (
    <main className="h-full w-[50%] overflow-scroll max-md:w-[100%] border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <div className=" p-6 backdrop-blur bg-black/10 sticky top-0 flex justify-between items-center">
        <h1 className="text-xl font-bold">Home</h1>
        <Signout/>
      </div>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
        <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
        
        <Composetweet />
      </div>
      <div className="w-full h-fit flex flex-col space-y-11 items-center">
        <Tweets/>
      </div>
    </main>
  );
};

export default Mainsection;
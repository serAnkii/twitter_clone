
import "@/app/globals.css"

import Composetweet from "./Server-components/Composetweet";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/lib/database.types";
import Tweets from "@/app/Components/Client-components/Tweets"
import { Signout } from "../login/page";

const Mainsection = async () => {
  
 

  return (
    <main className="h-full w-[50%] overflow-scroll max-md:w-[100%] border-l-[0.5px] border-r-[0.5px] border-gray-600 overflow-x-hidden">
      <div className=" p-6 backdrop-blur bg-black/10 sticky top-0 flex justify-between items-center z-100 ">
        <h1 className="text-xl font-bold">Home</h1>
        <Signout/>
      </div>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative z-[0]">
        <Composetweet />

      </div>
      <div className="w-full h-fit flex flex-col space-y-11 items-center">
        <Tweets/>
      </div>
    </main>
  );
};

export default Mainsection;
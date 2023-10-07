"use server"
import "@/app/globals.css"

import Composetweet from "./Server-components/Composetweet";
import Tweets from "@/app/Components/Server-components/Tweets"
import LogoutButton from "./Server-components/LogoutButton";

const Mainsection = async () => {
  
 

  return (
    <main className="h-full overflow-y-scroll  border border-solid border-border">
      <div className="sticky top-0 flex p-3 pl-4 border-b-[1px] border-border justify-between items-center bg-transparent backdrop-blur-sm z-50">
        <h1 className="font-semibold text-2xl text-icon">Home</h1>
        <LogoutButton/>
      </div>
      <Composetweet/>
      <Tweets/>
    </main>
  );
};

export default Mainsection;
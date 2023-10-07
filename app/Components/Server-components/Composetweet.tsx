"use client"
import { sumbittweet } from "@/utility/helpers";
import { toast } from "sonner";
import {useState} from "react"
const Composetweet = () => {
  


  
  return (
    <form action={sumbittweet} className="w-full p-2 pt-1 border-b-[3px] border-border">
      <input
        type="text"
        required
        name="tweet"
        className="w-full h-full text-2xl text-icon placeholder:text-holder bg-transparent outline-none border-none"
        placeholder="What is happening?!"

      />
      <div className="w-full justify-between items-center flex">
        <div></div>
        <div className="w-full max-w-[100px]">
          <button
            type="submit"
            className="rounded-full bg-twitterColor px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold bg-twitter">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Composetweet;

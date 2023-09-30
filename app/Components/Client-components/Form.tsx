"use client";

import { toast } from "sonner";

const Form = () => {
  return (
    <div>
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
            onClick={()=>{toast.success("Posted Sucessfully.Please Reload")}}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;

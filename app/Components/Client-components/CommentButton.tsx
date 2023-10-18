"use client";
import "@/app/globals.css";
import { GiCancel } from "react-icons/gi";
import { useState ,useTransition } from "react";
import { BiComment } from "react-icons/bi";
import { reply } from "@/utility/helpers";
import { toast } from "sonner";

export const Commentbutton = ({ tweet , uid,uname}: { tweet: any,uid:string,uname:string }) => {
  const [replymsg,changemessage] =  useState("")
  
  const tweetid:string = tweet.id
  
  const [isOpen, setDialogOpen] = useState(false);
  const [isreplying,starttransition] = useTransition()
  const handelclick = (e: any) => {
    if (e.target.classList.contains("close-btn")) {
      setDialogOpen(false);
    }
  };

  const helper = ()=>{
    starttransition(()=>{
      reply({
        tweetid,
        uid,
        reply:replymsg,
        uname
      })
    })

    setDialogOpen(false)
    toast.success("reply added :>")
  }
  return (
    <>
      <button onClick={() => setDialogOpen(true)}>
        <BiComment />
      </button>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center z-50 overlay close-btn"
          onClick={handelclick}
        >
          <div className="bg-[#000] p-4 shadow-lg shadow-black w-[42%] h-[50%]   relative top-[5%] rounded-xl">
            <span
              className="absolute text-white rounded-sm cursor-pointer z-50 text-3xl left-[0%] top-[0%]"
            >
              <GiCancel className="close-btn" onclick={handelclick}/>
            </span>

            <div className="h-[fit-content] w-[39.5vw]  p-4 flex flex-col gap-y-6 ">
              <h1 className="font-serif font-bold text-xl">
                 @ {tweet.created_by} <span className="text-xs text-[#71767b] ">
                Tweeted at : {String(tweet.created_at)} </span>
              </h1>
              <p className="text-2xl capitalize first-letter:text-2xl font-serif font-bold border-[#2f3336] border border-solid p-2 pl-4 rounded-xl ">
                {tweet.text}
              </p>
              <h2 className="text-xs text-[#71767b] ">
                replying to <span className="text-twitter text-lg"> @{tweet.created_by}</span> </h2>
            </div>

            <form className=" w-[100%] h-[50%] relative pl-4">
              <textarea
                onChange={(e)=>{
                  changemessage(e.target.value)
                }}
                name="reply"
                id="reply"
                className="bg-transparent text-[#71767b] border-none outline-none w-[100%]"
                placeholder="Post your reply"
              />
              <button className="bg-twitter rounded-2xl absolute bottom-1 right-1 p-2 w-[15%] font-bold "  disabled={isreplying} onClick={helper}>Reply</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

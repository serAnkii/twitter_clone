"use client";
import "@/app/globals.css";
import { addOrRemoveBookmark, isbookmarked, isliked } from "@/utility/helpers";
import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

export const Bookmarkbutton = ({ tweet, uid }: { tweet: any; uid: string }) => {
  const tweetid: string = tweet.id;
  const [istrue, setistrue] = useState<number>(0);
  const helper = async () => {
     addOrRemoveBookmark({ tweetid, uid });
  };
  useEffect(()=>{
    const data = async ()=>{
       const bookmarked = await isbookmarked({tweetid,uid});
       setistrue(bookmarked!)
    }

    data();
  },[helper])
  return (
    <>
      <button onClick={helper}>
        {istrue ? <Bookmark className="text-twitter" /> : <Bookmark />}
      </button>
    </>
  );
};

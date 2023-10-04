"use client";

import { useTransition } from "react";
import {  likes } from "@/utility/helpers";
import { BiBookmark, BiLike } from "react-icons/bi";
import {useState , useEffect} from "react"
// import Buttontype from "../Server-components/Buttontype";


type Likebuttonprops = {
  tweetid: string;
  uname: string;
  uid: string;
};


const Likebutton =  ({ tweetid, uname, uid }: Likebuttonprops) => {
  const [ispending, startTransition] = useTransition();
  const [userLiked, setUserLiked] = useState(false);

  return (
    <div>
      <button
        className="bg-transparent "
        onClick={() => {
          startTransition(() => {
            likes({
              tweetid,
              uid,
              uname,
            });
          });
          
        }}
      >
        <BiLike/>
      </button>
    </div>
  );
};

export default Likebutton;

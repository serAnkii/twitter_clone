"use client";

import { useTransition } from "react";
import { likes } from "@/utility/helpers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { BiBookmark, BiLike } from "react-icons/bi";
import {useState,useEffect} from "react"
import { isliked } from "../Server-components/Likecount";

type Likebuttonprops = {
  tweetid: string;
  uname: string;
  uid: string;
};


const Likebutton = ({ tweetid, uname, uid }: Likebuttonprops) => {
  const [ispending, startTransition] = useTransition();
  // const [userLiked, setUserLiked] = useState(false);

  // useEffect(() => {
  //   // Check if the user has liked the tweet
  //   const checkLiked = () => {
  //     isliked({ t: tweetid, uid })
  //       .then((liked) => setUserLiked(liked))
  //       .catch((error) => console.error("Error checking liked status:", error));
  //   };

  //   checkLiked();
  // }, [tweetid, uid]);

// const isliked = await isLiked(tweetid,is)
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
        <BiLike className="text-2xl hover:fill-pink-600  "/> {}
      </button>
    </div>
  );
};

export default Likebutton;

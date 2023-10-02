"use client";

import { useTransition } from "react";
import { likes } from "@/utility/helpers";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { BiBookmark, BiLike } from "react-icons/bi";

type Likebuttonprops = {
  tweetid: string;
  uname: string;
  uid: string;
};


const Likebutton = ({ tweetid, uname, uid }: Likebuttonprops) => {
  const [ispending, startTransition] = useTransition();

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

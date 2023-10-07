"use client";

import { useTransition } from "react";
import { isliked, likes } from "@/utility/helpers";
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"
import {useState , useEffect} from "react"
import { toast } from "sonner";
type Likebuttonprops = {
  tweetid: string;
  uname: string;
  uid: string;
};


const Likebutton =({ tweetid, uname, uid }: Likebuttonprops) => {
 
  const [ispending, startTransition] = useTransition();
  
  const [isLiked, setIsLiked] = useState(false);



return (
    <div>
      <button
        className="bg-transparent "
        onClick={() => {
          // router.refresh() 
          startTransition(() => {
            likes({
              tweetid,
              uid,
              uname,
            });
            toast.loading("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
          });
         
        }}
      >
        {<AiOutlineHeart/>}
      </button>
    </div>
  );
};

export default Likebutton;

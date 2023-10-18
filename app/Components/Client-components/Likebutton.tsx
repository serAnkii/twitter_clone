"use client";

import { isliked, likes } from "@/utility/helpers";
import { useEffect, useState, useTransition } from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"

type Likebuttonprops = {
  tweetid: string;
  uname: string;
  uid: string;
};


const Likebutton =({ tweetid, uname, uid }: Likebuttonprops) => {
 
  const [liked,setisliked] = useState(0)
  const helper = async ()=>{
    const data =await likes({tweetid,uname,uid})
    
  }

  useEffect(()=>{
    const data = async ()=>{
       const temp = await isliked({tweetid,uid});
       setisliked(temp!);
    }

    data();
  },[helper])


return (
    <div>
      <button
        className="bg-transparent" onClick={helper}>
        
        {liked?<AiFillHeart className="text-pink-600"/>:<AiOutlineHeart/>}
      </button>
    </div>
  );
};

export default Likebutton;

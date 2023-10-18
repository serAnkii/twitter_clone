"use server";
import Likebutton from "../Client-components/Likebutton";
import Likecount from "./Likecount";
import Tweetdata from "../Client-components/Tweetdata";
import { Commentbutton } from "../Client-components/CommentButton";
import { gettweets, getuserdata, isliked } from "@/utility/helpers";
import { Bookmark } from "lucide-react";
import { Bookmarkbutton } from "../Client-components/Bookmarkbutton";

interface Tweet {
  id: string;
  text: string;
  profile_id?: string; 
  created_at?: Date | null;   
  updated_at: Date | null;
  created_by?: string; 
  }



const Tweets = async () => {
  let data = await gettweets();
  const tweets = data as Tweet[];
  tweets?.reverse(); // Assign the reversed array back to data
  
  const { uname, uid } = await getuserdata();
  return (
    <>
      {tweets&& tweets?.map((e, index) => (
        <div className="hover:bg-[#080808]  h-fit w-full bg-black p-4 border border-solid border-gray-800 shadow-md " key={e.id}>
          <Tweetdata
            created_at={e.created_at!.toString()}
            created_by={e.created_by!}
            text={e.text}
            tweetid={e.id}
          />

          <div className="flex justify-between mt-4">
            <div className="flex gap-3 items-center">
              
              <Likebutton tweetid={e.id} uname={uname} uid={uid!} />
              <Likecount t={e.id} />
            </div>
            <div className="flex items-center space-x-4">
              <Commentbutton tweet={tweets![index]} uid={uid!} uname={uname} />
              <Bookmarkbutton tweet={tweets![index]} uid={uid!}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tweets;

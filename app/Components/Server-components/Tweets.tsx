"use server";
import Likebutton from "../Client-components/Likebutton";
import Likecount from "./Likecount";
import Tweetdata from "../Client-components/Tweetdata";
import { Commentbutton } from "../Client-components/CommentButton";
import { gettweets, getuserdata, isliked } from "@/utility/helpers";
import { Bookmark } from "lucide-react";
const Tweets = async () => {
  let data = await gettweets();
  data?.reverse(); // Assign the reversed array back to data
  const { uname, uid } = await getuserdata();
  return (
    <>
      {data?.map((e, index) => (
        <div className="hover:bg-[#080808]  h-fit w-full bg-black p-4 border border-solid border-gray-800 shadow-md " key={e.id}>
          <Tweetdata
            created_at={e.created_at}
            created_by={e.created_by}
            text={e.text}
            tweetid={e.id}
          />

          <div className="flex justify-between mt-4">
            <div className="flex gap-3 items-center">
              
              <Likebutton tweetid={e.id} uname={uname} uid={uid!} />
              <Likecount t={e.id} />
            </div>
            <div className="flex items-center space-x-4">
              <Commentbutton tweet={data![index]} uid={uid!} uname={uname} />
              <button disabled>
                <Bookmark />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tweets;

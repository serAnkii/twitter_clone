import {
  getreplies,
  getsingletweet,
  getuserdata,
  reply,
} from "@/utility/helpers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Likebutton from "@/app/Components/Client-components/Likebutton";
import Likecount from "@/app/Components/Server-components/Likecount";
import { Commentbutton } from "@/app/Components/Client-components/CommentButton";
import { Bookmark } from "lucide-react";

const page = async ({params,}: {params: { id: string }}) => {
  const { uname, uid } = await getuserdata();
  const tweet = await getsingletweet(params.id);

  const data = await getreplies(params.id);

  return (
    <div className="h-full overflow-y-scroll  border border-solid border-border">
      <div
        className=" h-fit w-full bg-black p-4 border border-solid border-gray-800 shadow-md "
        key={tweet![0].id}
      >
        <div className="p-4 flex flex-col gap-y-6 rounded-md transition duration-300 ease-in-out transform hover:scale-15 z-0">
          <h1 className="font-serif font-bold text-xl text-white">
            <span className="text-twitter"> @ {tweet![0].created_by}</span>
          </h1>
          <p className="text-2xl capitalize first-letter:text-2xl font-serif font-bold text-white">
            {tweet![0].text}
          </p>
          <h1 className="text-xs text-gray-500">
            Created at:{" "}
            {(tweet![0].created_at as string).slice(0, 16).replace("T", "/ ")}
          </h1>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex gap-3 items-center">
            <Likebutton tweetid={tweet![0].id} uname={uname} uid={uid!} />
            <Likecount t={tweet![0].id} />
          </div>
          <div className="flex items-center space-x-4">
            <Commentbutton tweet={tweet![0]} uid={uid!} uname={uname} />
            <button disabled>
              <Bookmark />
            </button>
          </div>
        </div>
      </div>

      {data?.map((e) => (
        
        <div className="p-4 pl-10 w-full border border-solid border-border min-h-[10%] flex flex-col">
          <div>
          <h1 className="font-serif font-semibold text-xl text-twitter">@{e.username}</h1>
          <p className="text-border "> replied at : {e.time?.slice(0,16).replace("T"," / ")}</p>
          </div>
          <div className="pl-1">
            <p>{e.text}</p>
          </div>
        </div>
        
       
      ))}
    </div>
  );
};

export default page;

"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Tweetdataprops = {
  created_by: string;
  text: string;
  created_at: string;
  tweetid: string;
};

const Tweetdata = ({
  created_by,
  text,
  created_at,
  tweetid,
}: Tweetdataprops) => {
  const router = useRouter();

  return (
    <div
    onClick={() => {
      toast.loading("loading thread")
      router.push(`tweet/${tweetid}`);
    }}
    className="cursor-pointer  p-4 flex flex-col gap-y-6 rounded-md transition duration-300 ease-in-out transform hover:scale-15 z-0"
  >
    <h1 className="font-serif font-bold text-xl text-white">
      <span className="text-twitter"> @ {created_by}</span> 
    </h1>
    <p className="text-2xl capitalize first-letter:text-2xl font-serif font-bold text-white">
      {text}
    </p>
    <h1 className="text-xs text-gray-500">Created at: {(created_at)}</h1>
  </div>
  
  );
};

export default Tweetdata;

"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "../Components/Server-components/LogoutButton";

const page = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data:details, error } = await supabase.auth.getSession();

  const email = details.session?.user.email;

  const username = details.session?.user.user_metadata.username;



  return (
    
    <div className="h-full w-[100%] overflow-scroll max-md:w-[100%] border-l-[0.5px] border-r-[0.5px] border-gray-600 overflow-x-hidden flex flex-col ">
       <div className="sticky top-0 flex p-3 pl-4 border-b-[1px] border-border justify-between items-center bg-transparent backdrop-blur-sm z-50">
        <h1 className="font-semibold text-2xl text-icon">Your Profile</h1>
        <LogoutButton/>
      </div>
      <div className="flex flex-col gap-6 border-solid border-[#2f3336] border-2 p-4">
        <h1 className="font-serif font-bold text-2xl">
          HELLO <span className="text-pink-600">{username}</span>
        </h1>

        <p className="text-2xs text-center text-[#71767b] font-serif">
          We hope you are doing extremly Well and Thankyou for joining us.
        </p>

        <h2 className="font-serif font-bold text-3xs w-fit max-md:text-xs">
          Your registered E-mail : <span className="text-twitter">  {email}</span>
        </h2>
      </div>
      {/* <div className="flex flex-col gap-6 border-solid border-[#2f3336] border-2 p-4" >
        <h1 className="font-serif font-bold text-2xl">Your Activity</h1>
        <div>
            <FilteredTweets/>
        </div>
      </div> */}
    </div>
  );
};

export default page;

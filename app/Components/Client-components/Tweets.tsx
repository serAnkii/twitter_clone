"use server";
import { createClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Likebutton from "./Likebutton";
import { cookies } from "next/headers";
import Likecount from "../Server-components/Likecount";

const supabase = createServerComponentClient({cookies})

async function getdata() {
  const uobj = await supabase.auth.getSession()
  const uname =  uobj.data.session?.user.user_metadata.username
  const uid = uobj.data.session?.user.id

  return{uname,uid}
}

const Tweets = async () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  
  const {uname,uid} = await getdata(); 
  


  const { data } = await supabase.from("tweets").select();

  data?.reverse();

  


  return (
    <div>
      {data?.map((e) => (
        <>
          <div className=" border-2 border-solid border-[#2f3336] h-[fit-content] w-[39.5vw] hover:bg-[#080808] p-4 flex flex-col gap-y-6 ">
            <h1 className="font-serif font-bold text-xl">
              <span className="text-twitter"> @ {e.created_by}</span> Tweeted
            </h1>
            <p className="text-2xl capitalize first-letter:text-2xl font-serif font-bold  ">
              {e.text}
            </p>
            <h1 className="text-xs text-[#71767b] ">
              Created at : {e.created_at}
            </h1>
            <div className="flex justify-around">
              <div className="flex gap-3"><Likebutton tweetid={e.id } uname={uname} uid={uid!} /> <h1 className="text-xl"><Likecount t={e.id}/></h1> </div>
              <button>bookmark</button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Tweets;

// const FilteredTweets = async () => {

//   const supabase = createClient(  process.env.NEXT_PUBLIC_SUPABASE_URL!,  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

//   const {data} = await supabase.from('tweets').select()

//   data?.reverse();

//   const uname = helper()

// return (
//   <div>{
//       data?.map((e)=>(
//           <>
//           <div className=' border-2 border-solid border-[#2f3336] h-[40vh] w-[39.5vw] hover:bg-[#080808] p-4 flex flex-col gap-y-6 '>
//               <h1><span></span></h1>
//               <p className='text-2xl capitalize first-letter:text-2xl font-serif font-bold '>{e.text}</p>
//               <h1 className='text-xs text-[#71767b] '>Created at : {e.created_at}</h1>
//           </div>
//           </>
//       )

//       )
//       }</div>
// )
// }

// export { FilteredTweets }

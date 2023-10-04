// import { Database } from "@/lib/database.types";
// import { createClient } from "@supabase/supabase-js";

// import {AiFillHeart,AiOutlineHeart} from "react-icons/ai"


// const Buttontype = async ({tweet_id,uid}:{tweet_id:string,uid:string}) => {
    
        // const supabase = createClient<Database>(
        //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
        //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        // );
         
        // const {data ,error} = await supabase.from('likes').select().eq("tweet_id",tweet_id).eq("user_id",uid)
        
        // const check = (data?.length == 0)?false:true
    
    

     
//   return (
//     <>{
//         check?<AiFillHeart className="text-pink-600"/>:<AiOutlineHeart className="text-pink-600"/>
//     }
//     </>
//   )
// }

// export default Buttontype
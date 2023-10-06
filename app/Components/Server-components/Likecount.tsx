"use server"
import { createClient } from "@supabase/supabase-js";

type likecountprop = {
    t:string
}

const Likecount = async ({t}:likecountprop) => {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const {data,error} = await supabase.from('likes').select('*',{
        count:'exact'
    }).eq('tweet_id', t);

    const count = data?.length

  return (
    <>
        <h1 className="text-[1rem]"> {count}</h1>
    </>
  )
}

export default Likecount


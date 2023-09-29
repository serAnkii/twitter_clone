"use client"
import { createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/database.types'



const Tweets = async () => {

    const supabase = createClient(  process.env.NEXT_PUBLIC_SUPABASE_URL!,  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    const {data} = await supabase.from('tweets').select()
    

    data?.reverse();
      
  return (
    <div>{
        data?.map((e)=>(
            <>
            <div className=' border-2 border-solid border-[#2f3336] h-[40vh] w-[39.5vw] hover:bg-[#080808] p-4 flex flex-col gap-y-6 '>
               
                <p className='text-2xl capitalize first-letter:text-2xl font-serif font-bold '>{e.text}</p>
                <h1 className='text-xs text-[#71767b] '>Created at : {e.created_at}</h1>
            </div>
            </>
        )
            
        )
        }</div>
  )
}

export default Tweets
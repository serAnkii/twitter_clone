import Sidebar from "@/app/Components/Sidebar";
import Mainsection from "@/app/Components/Mainsection";
import Rightsection from "./Components/Rightsection";
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic'

const page = async () => {
  // const supabase = createServerComponentClient<Database>({ cookies })
  
  // const {data,error} =  await supabase.auth.getUser();

  // console.log({data,error});

  // if(error?.status==401)
  // {
  //   redirect("/login")
  // }
  

  return (
    <>
      
      <div className="h-full w-[100vw] bg-black flex justify-around relative items-center">
        <div className="w-[80vw] h-screen relative flex">
          <Sidebar />
          <Mainsection />
          <Rightsection />
        </div>
      </div>
    </>
  );
};

export default page;

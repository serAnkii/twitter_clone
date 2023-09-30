import Sidebar from "@/app/Components/Sidebar";
import Mainsection from "@/app/Components/Mainsection";
import Rightsection from "./Components/Rightsection";
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/lib/database.types'
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic'
const page = async () => {
  const supabase = createServerComponentClient<Database>({ cookies })
  
  const {data,error} =  await supabase.auth.getUser();

  // console.log({data,error});

  if(data.user?.id==null)
  {
    redirect("./login")
  }
  
  
  

  return (
    <>
      
          <Mainsection />
       
    </>
  );
};

export default page;

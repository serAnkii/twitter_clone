"use client"
import { useState } from "react"
import { toast } from "sonner"
const page = () => {
    useState(()=>{
        toast('Messages section is comming soon', {
            action: {
              label: 'Cancel',
              onClick: () => console.log('Cancel!'),
            },
          });
    })
return (
    <div className="h-full w-[50%] overflow-scroll max-md:w-[100%] border-l-[0.5px] border-r-[0.5px] border-gray-600 overflow-x-hidden">
        
    </div>
  )
}

export default page
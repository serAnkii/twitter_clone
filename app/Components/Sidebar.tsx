import React from 'react'
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { cookies, headers } from "next/headers";
import Link from "next/link";

import "@/app/globals.css"


const NAV = [
    {
      title: "",
      icon: BsTwitter,
    },
    {
      title: "Home",
      icon: BiHomeCircle,
    },
    {
      title: "Explore",
      icon: HiOutlineHashtag,
    },
    {
      title: "Notifications",
      icon: BsBell,
    },
    {
      title: "Messages",
      icon: BsEnvelope,
    },
    {
      title: "Bookmarks",
      icon: BsBookmark,
    },
    {
      title: "Profile",
      icon: BiUser,
    },
  ];
  
const Sidebar = () => {
  return (
    <div className= "h-full w-[20.5%] flex flex-col justify-between items-start pb-1 relative">
          <div className="gap-4 flex flex-col">
            {NAV.map((ele) => (
              <Link
                key={ele.title}
                href={`/${ele.title.toLowerCase()}`}
                id={ele.title}
                className=" p-2 rounded-3xl justify-start w-fit flex text-2xl space-x-4 py-2 px-6  hover:bg-white/10 transition duration-190 "
              >
                <div>
                  <ele.icon />
                </div>
                <div className='hidden xl:block'>{ele.title}</div>
              </Link>
            ))}

        <button className=" w-[80%] rounded-full m-4 bg-twitter p-3 text-xl text-center hover:bg-opacity-70 transition duration-200">
          Post
        </button>
          </div>
          <div className='w-full'><button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2 w-full">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className="text-left text-sm hidden xl:block">
            <div className="font-semibold">
              ankit
              </div>
            <div className="">username</div>
          </div>
        </div>
        <div className='max-xl:hidden'>
          <BsThreeDots />
        </div>
      </button></div>
        </div>
  )
}

export default Sidebar
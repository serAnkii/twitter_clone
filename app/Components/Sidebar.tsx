import React from "react";
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

import "@/app/globals.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const NAV = [
  {
    title: "X",
    icon: BsTwitter,
    href:"/"
  },
  {
    title: "Home",
    icon: BiHomeCircle,
    href:"/"
  },
  // {
  //   title: "Explore",
  //   icon: HiOutlineHashtag,
  // },
  // {
  //   title: "Notifications",
  //   icon: BsBell,
  // },
  {
    title: "Messages",
    icon: BsEnvelope,
    href:"./messages"
  },
  // {
  //   title: "Bookmarks",
  //   icon: BsBookmark,
  // },
  {
    title: "Profile",
    icon: BiUser,
    href:"./profile"
  },
];

const Sidebar = async () => {
  // const supabase = createServerComponentClient({ cookies });

  // const { data, error } = await supabase.auth.getUser();

  return (
    <div className="h-full w-[20.5%] flex flex-col justify-between items-start pb-1 relative">
      <div className="gap-4 flex flex-col justify-between">
        {NAV.map((ele) => (
          <Link
            key={ele.title}
            href={`/${ele.href}`}
            id={ele.title}
            className=" p-2 rounded-3xl justify-start w-fit flex text-2xl space-x-4 py-2 px-6  hover:bg-white/10 transition duration-190 "
          >
            <div >
              <ele.icon fill="#1a8cd8" className="text-3xl"/>
            </div>
            <div className="hidden xl:block">{ele.title}</div>
          </Link>
        ))}

      </div>
      <div className="w-full">
        <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
          <div className="flex items-center space-x-2 w-full ">
            <div className="">
              <div className="flex items-center justify-center gap-4">
                <h1 className="text-xl font-bold ">Signed-in as:</h1>
                <h1 className="text-2xl font-serif capitalize text-twitter font-bold ">
                  {/* {data.user?.user_metadata.username} */}
                </h1>
              </div>
              
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

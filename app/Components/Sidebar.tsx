"use server";
import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  BsBookmark,
  BsTwitter,
  BsEnvelope,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import Link from "next/link";

import "@/app/globals.css";
import { getuserdata } from "@/utility/helpers";

const NAV = [
  {
    title: "",
    icon: BsTwitter,
    href: "/",
  },
  {
    title: "Home",
    icon: BiHomeCircle,
    href: "/",
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
    href: "./messages",
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
    href:"./bookmarks"
  },
  {
    title: "Profile",
    icon: BiUser,
    href: "./profile",
  },
];

const Sidebar = async () => {
  const { uname } = await getuserdata();

  return (
    <div className="mainSidebar">
      <div className=" w-[70%] ml-auto gap-8 pt-3 flex flex-col h-[90%] max-md:w-100% max-md:ml-0 max-lg:h-[80%] max-sm:w-[100%] max-sm:items-center">
        {NAV.map((ele) => (
          <Link
            key={ele.title}
            href={`/${ele.href}`}
            id={ele.title}
            className="flex gap-3 max-xl:w-fit max-xl:ml-auto max-sm:ml-0 " 
          >
            <div className="w-[15%] flex justify-center items-center">
              <i className="text-4xl">
                <ele.icon fill="#e7e9ea" />
              </i>
            </div>

            <div className="  hidden xl:block w-[70%]">
              <h1 className="text-xl font-semibold">{ele.title}</h1>
              </div>
          </Link>
        ))}
      </div>

      <div className="w-[70%] ml-auto h-[10%] p-1 max-sm:w-[100%]">
        <div className="flex gap-4">
          <div className="w-[15%] flex justify-center items-center">
            <i className="text-4xl text-twitter max-sm:hidden">
              <CgProfile />
            </i>
          </div>

          <div className="w-[70%]">
            <h1 className="text-xl max-md:hidden ">Signed-in as</h1>
            <h1 className="text-xl text-twitter capitalize">{uname}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

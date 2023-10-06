"use server"
import React from "react";
import { BsSearch } from "react-icons/bs";

const Rightsection = () => {
  return (
    <div className="h-screen w-[31.5%] flex flex-col overflow-x-hidden space-y-4 pt-1 pr-5 overflow-scroll max-md:hidden">
    
      <div className="relative w-full h-[6%] rounded-3xl bg-[#202327] ml-5 z-[0]">
        <label
          htmlFor="search"
          className="absolute top-0 h-full flex items-center justify-center left-0 p-3  "
        >
          <BsSearch className="w-5 h-5 text-gray-500 " />
        </label>
        <input
          type="text"
          id="search"
          className=" outline-none bg-transparent w-full h-full rounded-xl py-4 px-6 border-none ml-5 z-[-1]"
          placeholder="Search Twitter"
        />
      </div>

      <div className="flex flex-col rounded-2xl bg-[#16181c]  ml-5 w-full">
        <h3 className="font-bold text-2xl my-4 p-4 ">What's Happening</h3>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-[#1d1f23] cursor-pointer p-4 last:rounded-b-xl transition duration-200"
            >
              <div className="font-bold text-xl">#trending {i + 1}</div>
              <div className="text-xs"> 32.6k</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col rounded-xl bg-[#16181c]  ml-5 w-full">
        <h3 className="font-bold text-2xl my-4 p-4 rounded-xl">Who to Follow</h3>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-[#1d1f23] cursor-pointer p-4 last:rounded-b-xl transition duration-200 flex items-center justify-around "
            >
                <div className="w-10 h-10 ">img</div>
                <div className="flex flex-col space-y-2  ">
                    <div>Elon musk</div>
                    <div>@elon</div>
                </div>
                <div>
                    <button className="rounded-full px-6 py-2 bg-white text-xl font-bold text-black"> follow</button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightsection;

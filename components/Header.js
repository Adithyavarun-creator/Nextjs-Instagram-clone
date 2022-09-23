import React from "react";
import Image from "next/image";
import {
  HeartIcon,
  HomeIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left  */}

        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div
          className="relative w-10 lg:hidden flex-shrink-0
        cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            layout="fill"
          />
        </div>
        {/* Middle  */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 sm:text-sm
            border-gray-300 focus:ring-black focus:border-black rounded-md"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-55" />
            <div
              className="absolute -top-1 -right-2 text-xs w-5 h-5 
            bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white"
            >
              5
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            className="h-10 rounded-full cursor-pointer"
            src="https://static8.depositphotos.com/1057741/1041/i/950/depositphotos_10415184-stock-photo-golden-retriever-dog-sitting-on.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

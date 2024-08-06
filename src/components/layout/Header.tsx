import Logo from "@assets/icons/logo.svg?react";
import Bill from "@assets/icons/Bill.svg?react";
import { FiSearch } from "react-icons/fi";

import avatar from "@assets/images/person.png";

const Header = () => {
  return (
    <nav className="bg-white h-20 flex items-center md:px-4 ">
      <div className="w-16 md:w-[19rem] flex justify-center md:justify-start ">
        <Logo />
        <h1 className="font-sans font-bold ms-2 text-2xl hidden text-center md:block">
          Motiv.
        </h1>
      </div>
      <div className="flex justify-between items-center w-full ml-4">
        <div className="relative bg-gray-100 rounded-lg h-12 w-40 sm:w-[358px] flex items-center">
          <FiSearch
            size={20}
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
          />
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full bg-transparent outline-none focus:ring-0 placeholder:text-[#7C7C8D] placeholder:capitalize placeholder:text-xs sm:placeholder:text-[1rem]"
            placeholder="Search or type"
          />
        </div>
        <div className="ml-auto gap-4 md:gap-8 flex items-center">
          <div className="relative">
            <Bill />
            <span className="block size-2 absolute z-10 top-1 right-[1px]  bg-[#FF5E6F] rounded-full border border-white"></span>
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full sm:size-12 size-8 mr-2"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;

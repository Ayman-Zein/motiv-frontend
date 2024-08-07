import { useEffect, useState } from "react";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import Logo from "@assets/icons/logo.svg?react";
import Bill from "@assets/icons/Bill.svg?react";
import avatar from "@assets/images/person.png";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const lng = Cookies.get("i18next") || "en";

  const [language, setLanguage] = useState<string>(lng || "en");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  useEffect(() => {
    window.document.dir = i18next.dir();
    document.documentElement.setAttribute("lang", lng === "en" ? "en" : "ar");
  }, [language, lng]);

  const handleLngChange = () => {
    if (lng === "en") {
      i18next.changeLanguage("ar");
      setLanguage("ar");
    } else {
      i18next.changeLanguage("en");
      setLanguage("en");
    }
  };

  return (
    <header className="bg-white h-20 flex items-center md:px-4 ">
      <Link
        to="/"
        className="w-16 md:w-[19rem] flex justify-center md:justify-start "
      >
        <Logo />
        <h1 className="font-sans font-bold ms-2 text-2xl hidden text-center md:block">
          Motiv.
        </h1>
      </Link>
      <div className="flex justify-between items-center w-full ml-4 sm:ml-0">
        <form
          onSubmit={handleSubmit}
          className="relative bg-gray-100 rounded-lg h-12 w-40 sm:w-[358px] flex items-center"
        >
          <FiSearch
            size={20}
            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
          />
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-full bg-transparent outline-none focus:ring-0 placeholder:text-[#7C7C8D] placeholder:capitalize placeholder:text-xs sm:placeholder:text-[1rem]"
            placeholder={t("SearchOrType")}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <div className="ml-auto rtl:mr-auto rtl:ml-0 gap-4 md:gap-8 flex items-center">
          <span className="cursor-pointer text-base" onClick={handleLngChange}>
            {lng === "en" ? "العربية" : "en"}
          </span>
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
    </header>
  );
};

export default Header;

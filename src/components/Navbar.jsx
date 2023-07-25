import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, brasil, usa } from "../assets";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setcurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setcurrentLanguage(newLanguage);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Jonas &nbsp;
            <span className="sm:block hidden"> | Software Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${
              active === "about" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive("about")}
          >
            <a href={`#about`}>{t("about")}</a>
          </li>
          <li
            className={`${
              active === "work" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href={`#work`}>{t("work")}</a>
          </li>
          <li
            className={`${
              active === "contact" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href={`#contact`}>{t("contact")}</a>
          </li>
          <li className="flex gap-2 items-center">
            <img
              src={brasil}
              alt="logo"
              className="w-8 h-7 object-contain cursor-pointer"
              onClick={handleChangeLanguage}
            />
            <img
              src={usa}
              alt="logo"
              className="w-9 h-6 cursor-pointer"
              onClick={handleChangeLanguage}
            />
          </li>
        </ul>

        <div
          onBlur={() => setToggle(!toggle)}
          className="sm:hidden flex flex-1 justify-end items-center gap-5"
        >
          <li className="flex gap-2 items-center">
            <img
              src={brasil}
              alt="logo"
              className="w-8 h-7 object-contain cursor-pointer"
              onClick={handleChangeLanguage}
            />
            <img
              src={usa}
              alt="logo"
              className="w-9 h-6 cursor-pointer"
              onClick={handleChangeLanguage}
            />
          </li>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "about" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("about");
                }}
              >
                <a href={`#about`}>{t("about")}</a>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "work" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("work");
                }}
              >
                <a href={`#work`}>{t("work")}</a>
              </li>
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === "contact" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("contact");
                }}
              >
                <a href={`#contact`}>{t("contact")}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

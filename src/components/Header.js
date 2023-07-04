import { useContext, useEffect, useState } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { useTranslation } from 'react-i18next';


const Header = ({changeLanguage, language}) => {
  const { theme, setTheme } = useContext(PersonalContext);
  const { t } = useTranslation();
  
  

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    console.log(theme);
    
  }, []);
  return (
    <div className=" pt-24 flex justify-end bg-wild-sand dark:bg-blackdi dark:text-white">
      <div className="mx-5">
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-amaranth before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-white before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-amaranth  checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-amaranth checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-amaranth checked:focus:bg-amaranth checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-amaranth dark:checked:after:bg-amaranth"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={changeTheme}
        />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer font-inter font-semibold text-grayki"
          for="flexSwitchCheckDefault"
        >
          {theme.toUpperCase()} MODE
        </label>
      </div>
      |
      <div className="font-inter font-semibold text-grayki mx-5">
        <button onClick={ () => changeLanguage(language==="en" ? "tr" : "en")}>
          {" "}
          <span className=" text-amaranth">{t("language")}</span>
        </button>
      
        
      </div>
    </div>
  );
};
export default Header;

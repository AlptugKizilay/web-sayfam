import { useContext, useEffect, useState } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Footer = () => {
  const { persData } = useContext(PersonalContext);
  const link = persData.links[0];

  return (
    <div className="flex  my-48 dark:text-white">
      <div className="w-[28%] ml-[30%]">
        <p className=" font-inter text-[42px] text-end font-semibold ">Let’s work together on your next product.</p>
      </div>
      <div className=" flex flex-col ml-16 font-inter text-[24px] text-start  ">
        <a href={link.git} className="text-git">Github</a>
        <a href={link.blog}>Personal Blog</a>
        <a href={link.linkedin} className=" text-linke" >Linkedin</a>
        <a href={link.email} className=" text-pinkki " >Email</a>
      </div>
    </div>
  );
};
export default Footer;

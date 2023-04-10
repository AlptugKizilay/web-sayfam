import { useContext, useEffect, useState } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Footer = () => {
  const { persData } = useContext(PersonalContext);
  const link = persData.links[0];

  return (
    <div>
      <p>Let’s work together on your next product.</p>
      <div>
        <nav>
          <a href={link.git}>Github</a>
          <a href={link.blog}>Personal Blog</a>
          <a href={link.linkedin}>Linkedin</a>
          <a href={link.email}>Email</a>
        </nav>
      </div>
    </div>
  );
};
export default Footer;

import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";
import { useTranslation } from "react-i18next";

const Intorduction = ({ changeLanguage, language }) => {
  const { persData } = useContext(PersonalContext);
  const link = persData.links[0];
  const { t } = useTranslation();

  return (
    <div className="bg-wild-sand dark:bg-blackdi dark:text-white flex flex-col justify-center px-0 lg:px-60 pb-10 lg:pb-10 font-inter">
      <div>
        <Header changeLanguage={changeLanguage} language={language} />
      </div>
      <div className="flex mt-8 lg:mt-16 ">
        <div className="flex-col ml-4 lg:ml-44 mr-2 lg:mr-20">
          <h3 className="font-normal text-3xl tracking-widest text-start mb-1 lg:mb-3">
            {t("greeting")} 👋
          </h3>
          <p className="not-italic font-semibold text-start text-1xl lg:text-4.5xl mb-6 lg:mb-12 tracking-widestt ">
            {t("I")} {persData.name}. {t("intro")}
            <br /> {t("Let's meet!")}{" "}
          </p>
          <nav className="flex space-x-4 mb-6">
            <a href={link.linkedin}>
              <FontAwesomeIcon className="w-7 h-7 lg:w-10 lg:h-10" icon={faLinkedin} />
            </a>
            <a href={link.git}>
              <FontAwesomeIcon className="w-7 h-7 lg:w-10 lg:h-10" icon={faGithub} />
            </a>
          </nav>

          <p className="not-italic font-normal lg:font-medium text-start text-base lg:text-1.5xl tracking-tight  lg:tracking-wider">
            {t("Currently")}{" "}
            <span className="text-pinkki">{t("Freelancing")}</span> {t("for")}{" "}
            <span className="text-pinkki">{t("UX")}</span> {t("Project")}
            <br></br>
            {t("invite")}:{" "}
            <a
              href={persData.links[0].email}
              className="text-pinkki underline hover:underline-offset-4"
            >
              {persData.mail}
            </a>
          </p>
        </div>
        <div className=" w-24 lg:w-96 h-24 lg:h-96 mr-4 lg:mr-44 mt-12 lg:mt-1 flex">
          <div className="  bg-amaranth w-24 lg:w-96 h-24 lg:h-96 p-12 lg:p-48 max-w-max rounded-3xl flex"></div>
          <img
            alt="photo"
            className="w-24 lg:w-96 h-24 lg:h-96  max-w-max rounded-3xl absolute m-1 z-2 lg:m-5 lg:z-10 "
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
      </div>
    </div>
  );
};
export default Intorduction;

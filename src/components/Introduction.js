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
    <div className="bg-wild-sand dark:bg-blackdi dark:text-white flex flex-col justify-center px-60 pb-10 font-inter">
      <div>
        <Header changeLanguage={changeLanguage} language={language} />
      </div>
      <div className="flex mt-16 ">
        <div className="flex-col ml-44 mr-20">
          <h3 className="font-normal text-3xl tracking-widest text-start mb-3">
            {t("greeting")} 👋
          </h3>
          <p className="not-italic font-semibold text-start text-4.5xl mb-12 tracking-widestt ">
            {t("I")} {persData.name}. {t("intro")}
            <br /> {t("Let's meet!")}{" "}
          </p>
          <nav className="flex space-x-4 mb-6">
            <a href={link.linkedin}>
              <FontAwesomeIcon className="w-10 h-10" icon={faLinkedin} />
            </a>
            <a href={link.git}>
              <FontAwesomeIcon className="w-10 h-10" icon={faGithub} />
            </a>
          </nav>

          <p className="not-italic font-medium  text-start text-1.5xl tracking-wider">
          {t("Currently")} <span className="text-pinkki">{t("Freelancing")}</span> {t("for")}{" "}
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
        <div className=" w-96 h-96 mr-44 flex">
          <div className="  bg-amaranth w-96 h-96 p-48 max-w-max rounded-3xl flex"></div>
          <img
            alt="photo"
            className="w-96 h-96  max-w-max rounded-3xl absolute m-5 z-10 "
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          />
        </div>
      </div>
    </div>
  );
};
export default Intorduction;

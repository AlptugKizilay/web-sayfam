import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { persData } = useContext(PersonalContext);
  const { t } = useTranslation();
  return (
    <div className="bg-wild-sand font-inter dark:bg-blackdi dark:text-white  ">
      <h2 className=" text-3xl lg:text-4xl tracking-wide font-semibold pt-4 lg:pt-16 ">{t("Profile")}</h2>
      <div className="flex flex-col lg:flex-row justify-center mt-12  ">
        <div className="w-225 h-80 pb-2  lg:w-550 lg:h-96 lg:-ml-24  relative ">
          <div className="w-225 h-80  lg:w-530 lg:h-80 bg-grayki p-40 absolute m-2 rounded-3xl"></div>
          <div className="w-215 h-80 lg:w-530 lg:h-80 card bg-white dark:bg-carddi flex flex-col text-start absolute  z-10 rounded-3xl" >
            <h4 className=" text-amaranth text-2xl font-playfair mt-9 ml-10">
              {t("info")}
            </h4>
            <div className="flex space-x-4 ml-10 m-6">
              <div className="flex flex-col space-y-4  w-36 font-semibold">
                <p>{t("bday")}</p>
                <p>{t("city")}</p>
                <p>{t("education")}</p>
                <br />
                <br />
                <p>{t("role")}</p>
              </div>
              <div className="flex flex-col space-y-4 w-56  font-normal">
                <p> {persData.birthDate} </p>
                <p> {persData.city} </p>
                <p> {persData.education} </p>
                <p> {persData.role} </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about w-80 lg:w-430 text-start flex flex-col lg:space-y-4 ml-8 pb-8">
          <h4 className="text-2xl font-playfair font-[500] mt-10 ">{t("about")}</h4>
          <div className=" font-inter font-medium">
          <p className="not-italic font-normal lg:font-medium text-start text-base lg:text-1.5xl tracking-tight  lg:tracking-wider">
          I am a Junior Fullstack Software Developer who initially started my career in the education sector as a mathematics teacher. 
          As someone who enjoys self-improvement, I developed an interest in the field of software development.
          
          </p>
          <br />
          <p className="not-italic font-normal lg:font-medium text-start text-base lg:text-1.5xl tracking-tight  lg:tracking-wider">
          I am highly motivated in my work and committed to continuous growth in the field of software development.{" "}
          </p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

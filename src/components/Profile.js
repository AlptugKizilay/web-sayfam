import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { persData } = useContext(PersonalContext);
  const { t } = useTranslation();
  return (
    <div className="bg-wild-sand font-inter dark:bg-blackdi dark:text-white  ">
      <h2 className=" text-4xl tracking-wide font-semibold pt-16 ">{t("Profile")}</h2>
      <div className="flex justify-center mt-12  ">
        <div className="w-550 h-96 -ml-24  relative ">
          <div className="w-530 h-80 bg-grayki p-40 absolute m-2 rounded-3xl"></div>
          <div className="card bg-white dark:bg-carddi w-530 h-80 flex flex-col text-start absolute  z-10 rounded-3xl" >
            <h4 className=" text-amaranth text-2xl font-playfair mt-9 ml-10">
              {t("info")}
            </h4>
            <div className="flex space-x-4 ml-10 mt-6">
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
        <div className="about w-430 text-start flex flex-col space-y-4 ml-8">
          <h4 className="text-2xl font-playfair font-[500] mt-10 ">{t("about")}</h4>
          <div className=" font-inter font-medium  ">
          <p>
          I am a Junior Fullstack Software Developer who initially started my career in the education sector as a mathematics teacher. 
          As someone who enjoys self-improvement, I developed an interest in the field of software development.
          
          </p>
          <br />
          <p>
          I am highly motivated in my work and committed to continuous growth in the field of software development{" "}
          </p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { persData } = useContext(PersonalContext);
  const { t } = useTranslation();
  return (
    <div className="font-inter h-110 dark:bg-graydi dark:text-white">
      <h2 className=" text-3xl lg:text-4xl tracking-wide font-semibold mt-4 lg:mt-16 " >{t("Skills")}</h2>
      <div className=" flex justify-center flex-wrap  mt-4 lg:mt-16 ">
        {persData.skills.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center px-4 w-32 h-32 lg:w-64 lg:h-64" >
              <img alt={item.skill} src={item.img} className=" w-16 h-16 lg:w-32 lg:h-32 rounded-md"></img>
              <h5 className=" text-base lg:text-2xl font-medium text-grayki dark:text-grr mt-2 "> {item.skill} </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;

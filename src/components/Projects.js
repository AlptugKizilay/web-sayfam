import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { useTranslation } from "react-i18next";
import imgPc from "../assets/pc.png"

const Projects = () => {
  const { persData } = useContext(PersonalContext);
  const { t } = useTranslation();
  return (
    <div className="mb-20 dark:bg-graydi dark:text-white ">
      <h2 className="text-3xl lg:text-4xl tracking-wide font-semibold pt-4 lg:pt-16 ">{t("Projects")}</h2>
      <div className="flex justify-center flex-wrap px-8 mt-2 lg:mt-8">
        {persData.projects.map((item, index,) => {
          return (
            <div
              key={index}
              className={`w-530 ${(index===0) ? "bg-pattens-blue0 dark:bg-patten0": "bg-pattens-blue1 dark:bg-patten1"} rounded-xl m-8`}
            >
              <h2 className="font-playfair text-[25px] lg:text-[29px] font-semibold text-start ml-10 mt-11 mb-5">
                {" "}
                {item.name}{" "}
              </h2>
              <p className=" font-inter text-[16px] font-medium text-start mx-10 mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap ml-10 w-[300px]">
                {item.content.map((element, i) => {
                  return (
                    <div key={i}>
                      <div className="mb-6 mx-3 w-20 h-8  hover:text-white font-semibold bg-white dark:bg-carddi  rounded-3xl flex justify-center items-center ml-0 dark:hover:bg-amaranth hover:bg-amaranth">
                        <p className="font-playfair text-[16px] ">{element}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex ml-10 mr-16 justify-between font-inter font-semibold text-[20px]  ">
                <a href={item.git} className=" hover:text-pinkki">
                {t("ViewonGithub")}
                </a>
                <a href={item.url} className=" hover:text-pinkki">
                {t("Gotoapp")}
                </a>
              </div>

              <div className="relative lg:w-[500px] h-[287px] mt-16 lg:mt-20 -mb-12 ">
                <img
                  src={require(`../assets/photo-${index+1}.png`)}
                  className=" w-[314px] lg:w-[370px] h-[276px] absolute mx-3 lg:mx-16 mt-1 "
                ></img>
                <img
                  src={require(`../assets/pc.png`)}
                  alt="pc"
                  className="w-[500px] h-[287px] absolute z-10"
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;

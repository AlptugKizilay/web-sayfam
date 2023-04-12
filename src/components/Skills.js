import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Skills = () => {
  const { persData } = useContext(PersonalContext);
  return (
    <div className="font-inter h-110 dark:bg-graydi dark:text-white">
      <h2 className=" text-4xl tracking-wide font-semibold mt-16 " >Skills</h2>
      <div className=" flex justify-center space-x-6 mt-16 ">
        {persData.skills.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-center" >
              <img alt={item.skill} src={item.img} className=" w-32 h-32 rounded-md"></img>
              <h5 className=" text-2xl font-medium text-grayki dark:text-grr mt-2 "> {item.skill} </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;

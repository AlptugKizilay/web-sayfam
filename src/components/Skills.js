import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Skills = () => {
  const { persData } = useContext(PersonalContext);
  return (
    <div>
        <h2>Skills</h2>
      {persData.skills.map((item,index) => {
        return (
          <div key={index}>
            <img alt={item.skill} src={item.img}  ></img>
            <h5> {item.skill} </h5>
          </div>
        );
      })}
    </div>
  );
};
export default Skills;

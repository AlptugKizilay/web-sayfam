import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Intorduction = () => {
  const { persData } = useContext(PersonalContext);

  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div>
        <h3>Hi! {/* emoji */}</h3>
        <p>
          I'm {persData.name}. I'm a full-stack developer. I can craft solid and
          scalable fronted product. Let's meet!{" "}
        </p>

        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />

        <p >
          Currently Freelancing for UX, UI & Web Desing Project.
        </p>
        <p>Invite me to join your team: {persData.email} </p>
      </div>
      <div>
        {/* <img
          alt="photo"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
        /> */}
      </div>
    </div>
  );
};
export default Intorduction;

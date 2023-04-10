import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";

const Intorduction = () => {
  const { persData } = useContext(PersonalContext);
  const link = persData.links[0];

  return (
    <div className="bg-wild-sand">
      <div>
        <Header />
      </div>
      <div>
        <div>
          <h3>Hi! {/* emoji */}</h3>
          <p>
            I'm {persData.name}. I'm a full-stack developer. I can craft solid
            and scalable fronted product. Let's meet!{" "}
          </p>
          <nav>
            <a href={link.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={link.git}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </nav>
         

          <p>Currently Freelancing for UX, UI & Web Desing Project.</p>
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
    </div>
  );
};
export default Intorduction;

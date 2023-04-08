import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Footer = () => {
    const { persData } = useContext(PersonalContext);
    const links = persData.links[0];
    return (
        <div>
            <p>Let’s work together on your next product.</p>
            <div>
                <nav>
                    <a href={links.git}>Github</a>
                    <a href={links.blog}>Personal Blog</a>
                    <a href={links.linkedin}>Linkedin</a>
                    <a href={links.email}>Email</a>
                </nav>
            </div>

        </div>
    )
}
export default Footer;
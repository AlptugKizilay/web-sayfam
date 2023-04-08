import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Profile = () => {
    const { persData } = useContext(PersonalContext);
    return (
        <div>
            <div>
                <h4>Basic Information</h4>
                <p></p>
            </div>
        </div>
    )
}
export default Profile;
import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Profile = () => {
  const { persData } = useContext(PersonalContext);
  return (
    <div>
        <h2>Profile</h2>
      <div className="card">
        <h4>Basic Information</h4>
        <div>
          <p>Doğum tarihi</p>
          <p>İkamet Şehri</p>
          <p>Eğitim Durumu</p>
          <p>Tercih Ettiği Rol</p>
        </div>
        <div>
          <p> {persData.birthDate} </p>
          <p> {persData.city} </p>
          <p> {persData.education} </p>
          <p> {persData.role} </p>
        </div>
      </div>
      <div className="about">
        <h4>About me</h4>
        <p> {persData.about} </p>
      </div>
    </div>
  );
};
export default Profile;

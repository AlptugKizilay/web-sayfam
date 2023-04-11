import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Profile = () => {
  const { persData } = useContext(PersonalContext);
  return (
    <div className="bg-wild-sand font-inter">
      <h2 className=" text-4xl tracking-wide font-semibold pt-16 ">Profile</h2>
      <div className="flex justify-center mt-12  ">
        <div className="w-550 h-96 -ml-24  relative ">
          <div className="w-530 h-80 bg-grayki p-40 absolute m-2 rounded-3xl"></div>
          <div className="card bg-white w-530 h-80 flex flex-col text-start absolute  z-10 rounded-3xl" >
            <h4 className=" text-amaranth text-2xl font-playfair mt-9 ml-10">
              Basic Information
            </h4>
            <div className="flex space-x-4 ml-10 mt-6">
              <div className="flex flex-col space-y-4  w-36 font-semibold">
                <p>Doğum tarihi</p>
                <p>İkamet Şehri</p>
                <p>Eğitim Durumu</p>
                <br />
                <br />
                <p>Tercih Ettiği Rol</p>
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
          <h4 className="text-2xl font-playfair font-[500] mt-10 ">About me</h4>
          <div className=" font-inter font-medium  ">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <br />
          <p>
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!{" "}
          </p>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

import { useContext } from "react";
import { PersonalContext } from "../contexts/PersonalProvider";

const Projects = () => {
  const { persData } = useContext(PersonalContext);
  return (
    <div>
      <h2>Projects</h2>
      {persData.projects.map((item, index) => {
        return (
          <div key={index} className=" border-2">
            <h2> {item.name} </h2>
            <p>{item.description}</p>
            {item.content.map((element, i) => {
              return (
                <div key={i}>
                  <div className="mb-6">
                    <ul
                      className="mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"
                      role="tablist"
                    >
                      <li className="flex-grow basis-0 text-center">
                        <a
                          className="my-2 block rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight
                               text-neutral-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 md:mr-4"
                        >
                          {element}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
            <div>
              <nav>
                <a href={item.git}>Viem on Github</a>
                <a href={item.url}>Go to app </a>
              </nav>
            </div>           
            
            <div className="relative m-7w-[500px] h-[287px]">              
            <img src={item.img1} className="w-[370px] h-[276px] absolute mx-16 mt-1 "></img>
            <img src={item.img2} className="w-[500px] h-[287px] absolute z-10"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Projects;



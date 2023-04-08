import "./App.css";
import axios from "axios";
import Intorduction from "./components/Introduction";
import { useContext, useEffect } from "react";
import { PersonalContext } from "./contexts/PersonalProvider";
import Header from "./components/Header";
import { Data } from "./data";
import Skills from "./components/Skills";

function App() {
  const { persData, setPersData } = useContext(PersonalContext);
  const getData = () => {
    axios
      .get("https://64306329c26d69edc890f23b.mockapi.io/user/9")
      .then((res) => {
        setPersData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
    /* Data(); */
  }, []);
  useEffect(() => {
    console.log(persData);
  }, [persData]);

  return (
    <div className="App">
      <div className="bg-slate-50">
        <Header />
        <Intorduction />
        <Skills />
      </div>
    </div>
  );
}

export default App;

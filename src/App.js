import "./App.css";
import axios from "axios";
import Intorduction from "./components/Introduction";
import { useContext, useEffect, useState } from "react";
import { PersonalContext } from "./contexts/PersonalProvider";
import Header from "./components/Header";
import { Data } from "./data";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";

function App() {
  const { persData, setPersData } = useContext(PersonalContext);
  const [language, setLanguage] = useState(localStorage.getItem("language")==="en" ? "en" : "tr" );
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    if(lng === "en"){
      localStorage.setItem("language", "en");
    }else {     
      localStorage.setItem("language", "tr");
    }
  };

  const getData = () => {
    axios
      .get("https://64306329c26d69edc890f23b.mockapi.io/user/6")
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
    
    i18n.changeLanguage(language);
  }, []);

  return (
    <div className="App">
      <div className="dark:bg-graydi">
        <Intorduction changeLanguage={changeLanguage} language={language} />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;

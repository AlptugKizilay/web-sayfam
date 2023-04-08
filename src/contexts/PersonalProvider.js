
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PersonalContext = createContext();

const PersonalProvider = ({children}) => {
    const [persData, setPersData] = useState({skills:[]});

    return (
        <PersonalContext.Provider value={{ persData, setPersData }}>
          {children}
        </PersonalContext.Provider>
      );
}

export default PersonalProvider;

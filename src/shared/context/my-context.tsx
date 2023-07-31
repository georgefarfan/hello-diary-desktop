import { createContext, useState, useContext } from "react";

const MyContext = createContext({});

const MyContextProvider = (children: any) => {
  const [data, setData] = useState("Initial value");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => useContext(MyContext);

export { MyContextProvider, useMyContext };

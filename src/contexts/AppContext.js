import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  const updateSelectedMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <AppContext.Provider value={{ selectedMenu, updateSelectedMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

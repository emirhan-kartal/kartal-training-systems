import React, { createContext } from "react";

const CurrentPageContext = createContext();

const CurrentPageProvider = ({ children,value }) => {
    return (
        <CurrentPageContext.Provider value={value}>{children}</CurrentPageContext.Provider>
    );
};

export { CurrentPageProvider, CurrentPageContext };

import React, { createContext, useState } from 'react';
import ContextPageOne from './helper/context-page-one';
import ContextPageTwo from './helper/context-page-two';

export const AppContext = createContext(null);

// “useContext” hook is used to create common data that can be accessed throughout the component hierarchy 
// without passing the props down manually to each level.

const Context = () => {
    const [userName, setUserName] = useState("Type anything on textbox...");

    return (
        <AppContext.Provider value={{ userName, setUserName }}>
            <ContextPageOne />
            <ContextPageTwo />
        </AppContext.Provider>
    );
}

export default Context;
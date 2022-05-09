import React, { useState } from 'react';

const UseStateHook = () => {
    // The useState() hook allows us to track State in a function component. 
    // State generally refers to data or properties that needs to be tracking in an application.
    // Here, userData is the property and setUserData is the function used to mutate the property.
    const [userData, setUserData] = useState({ name: 'Chandan', age: 26 }); // useState accepts first parameter as initial value.

    const setUserName = () => {
        setUserData(prevState => ({
            ...prevState,
            name: 'Chandan Kumar'
        }));
    }

    return (
        <div>
            {userData.name}
            &nbsp;
            <button onClick={setUserName}>Set User Name</button>
        </div>
    );
}

export default UseStateHook;
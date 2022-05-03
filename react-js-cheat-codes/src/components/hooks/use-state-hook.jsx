import React, { useState } from 'react';

const UseStateHook = () => {
    // userData is the variable and setUserData is the function used to mutate that variable.
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
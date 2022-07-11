import React, { useState } from "react";

const UseStateHook = () => {
  // The useState() hook allows us to track State in a function component.
  // State generally refers to data or properties that needs to be tracking in an application.
  // As shown below, userData is the property and setUserData is the function used to mutate the property.
  const [userData, setUserData] = useState({ name: "Chandan", age: 26 });

  const setUserName = () => {
    setUserData((prevState) => ({
      ...prevState,
      name: "iamchandanys",
    }));
  };

  return (
    <div>
      {userData.name}
      &nbsp;
      <button onClick={setUserName}>Set User Name</button>
    </div>
  );
};

export default UseStateHook;

// Notes:
// 1. useState() hook can't be used in class component.
// 2. useState() accepts first parameter as initial value.

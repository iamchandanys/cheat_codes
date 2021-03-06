import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [data, setData] = useState();
  const [count, increaseCount] = useState(0);

  // NOTE: useEffect() will be called atleast once irrespective of arguments. That is when the page loads.
  // When no arguments are passed, useEffect() will be called each and every time when any of the STATEs gets UPDATED.
  // When empty array [] is passed, useEffect() gets called only once when the page loads.
  // When arguments are passed, useEffect() will be called each and every time when any of the passed STATEs gets UPDATED.
  // UPDATED in the sense, it's previous values should change. If the new values and previous values are same, then it won't be considered as UPDATED.
  // A function can have multiple useEffects().

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data[0].title);
    });
  }, [data, count]); // arguments we can pass it here.

  const increment = () => {
    increaseCount(count + 1);
  };

  return (
    <div>
      <p>Name: {data}</p>
      <button onClick={increment}>Increment {count}</button>
    </div>
  );
};

export default UseEffectHook;

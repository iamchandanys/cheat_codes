import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.countValue,
      };
    case "TOGGLE":
      return {
        ...state,
        showText: !state.showText,
      };
    default:
      return {
        ...state,
      };
  }
};

const UseReducerHook = () => {
  // useReducer() hook is usually preferable to useState when we have complex state logic that involves multiple states.
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      {state.count}
      &nbsp;
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", countValue: 20 });
          dispatch({ type: "TOGGLE" });
        }}
      >
        Increment
      </button>
      <br />
      {state.showText && <p>Sample Text</p>}
    </div>
  );
};

export default UseReducerHook;

import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            };
        case "TOGGLE":
            return {
                ...state,
                showText: !state.showText
            };
        default:
            return {
                ...state
            };
    }
}

// useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or 
// when the next state depends on the previous one.
const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            {state.count}
            &nbsp;
            <button onClick={() => {
                dispatch({ type: 'INCREMENT' });
                dispatch({ type: 'TOGGLE' });
            }}>Increment</button>
            <br />
            {state.showText && <p>Sample Text</p>}
        </div>
    );
}

export default UseReducerHook;
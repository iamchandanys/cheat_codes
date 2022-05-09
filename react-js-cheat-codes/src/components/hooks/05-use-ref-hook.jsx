import React, { useRef } from 'react';

const UseRefHook = () => {
    // useRef() can be used to access a DOM element directly.
    const inputRef = useRef(null);

    const handleOnClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "Using Ref Hook";
    }

    return (
        <div>
            <input type='text' placeholder='Ex...' ref={inputRef} />
            <button onClick={handleOnClick}>Focous Input</button>
        </div>
    );
}

export default UseRefHook;
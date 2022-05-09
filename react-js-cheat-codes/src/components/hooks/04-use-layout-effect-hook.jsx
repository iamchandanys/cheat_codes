import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseLayoutEffectHook = () => {

    const [header, setHeader] = useState();

    // The useLayoutEffect() is triggered synchronously before the DOM mutations are painted.
    // However, the useEffect() is called after the DOM mutations are painted.
    // Suitable when we want to set any DOM property untill we get the result from API.
    useLayoutEffect(() => {
        setHeader("Use layout effect hook.");
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setHeader("Use layout effect hook demo.");
        }, 2000);
    }, []);

    return (
        <p>{header}</p>
    );
}

export default UseLayoutEffectHook;
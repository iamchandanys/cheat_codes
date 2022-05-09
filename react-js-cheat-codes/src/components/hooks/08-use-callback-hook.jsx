import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import CallbackPageOne from './helper/callback-page-one';

const UseCallBackHook = () => {
    const [dataSource, setDataSource] = useState();
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setDataSource(response.data);
        })
    }, []);

    // The useCallback() and useMemo() Hooks are similar. 
    // The main difference is that useMemo() returns a memoized Value and useCallback() returns a memoized Function.
    const getUserEmail = useCallback(() => {
        if (dataSource && dataSource.length > 0) {
            return dataSource[0].email;
        }
    }, [dataSource]);

    return (
        <div>
            <CallbackPageOne getUserEmail={getUserEmail} />
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <p>Toggled!</p>}
        </div>
    );
}

export default UseCallBackHook;
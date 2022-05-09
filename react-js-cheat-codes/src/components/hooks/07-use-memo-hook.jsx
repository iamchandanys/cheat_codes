import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const UseMemoHook = () => {
    const [dataSource, setDataSource] = useState();
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setDataSource(response.data);
        })
    }, []);

    const getFirstUserEmailId = (data) => {
        if (data && data.length > 0)
            return data[0].email;
        else
            return "No email id found.";
    }

    // useMemo() Hook only runs when one of its dependencies update. This can improve performance..
    const getFirstUserEmailIdMemo = useMemo(() => getFirstUserEmailId(dataSource), [dataSource]);

    return (
        <div>
            {/* If we call getFirstUserEmailId(...) directly here and 
                whenever we click on Toggle button, each and every time the getFirstUserEmailId(...) will be called.
                Hence to overcome from this problem, we can make use of useMemo(). */}
            <p>{getFirstUserEmailIdMemo}</p>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <p>Toggled!</p>}
        </div>
    );
}

export default UseMemoHook;
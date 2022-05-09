import React, { useContext } from 'react';
import { AppContext } from '../06-use-context-hook';

const ContextPageOne = () => {
    const { setUserName } = useContext(AppContext);

    return (
        <input onChange={(event) => {
            setUserName(event.target.value);
        }} />
    );
}

export default ContextPageOne;
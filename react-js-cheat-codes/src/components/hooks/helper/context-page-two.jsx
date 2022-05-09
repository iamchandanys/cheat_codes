import React, { useContext } from 'react';
import { AppContext } from '../06-use-context-hook';

const ContextPageTwo = () => {
    const { userName } = useContext(AppContext);

    return (
        <div>
            {userName}
        </div>
    );
}

export default ContextPageTwo;
import React, { useEffect } from 'react';

const CallbackPageOne = ({ getUserEmail }) => {

    useEffect(() => {
        console.log('CALLED');
    }, [getUserEmail]);

    return (
        <div>
            {getUserEmail()}
        </div>
    );
}

export default CallbackPageOne;
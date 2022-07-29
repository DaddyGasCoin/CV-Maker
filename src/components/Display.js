import React from 'react';

const Display = (props) => {
    const { value } = props;

    return (
        <div>
            <div>{value.personal.name}</div>
            <div>{value.personal.email}</div>
        </div>

    )
}

export default Display;

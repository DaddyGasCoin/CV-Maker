import React from 'react';

const Display = (props) => {
    const { value } = props;

    return (
        <div>
            <div>{value.personal.name}</div>
            <div>{value.personal.email}</div>
            <div>{value.personal.occupation}</div>
            <div>{value.personal.phone}</div>
            <div>{value.personal.DOB}</div>
            <div>{value.personal.location}</div>

        </div>

    )
}

export default Display;

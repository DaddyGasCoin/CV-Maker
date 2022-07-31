import React from 'react';
import uniqid from "uniqid";

const Display = (props) => {
    const { value } = props
    return (
        <div>
            <div>{value.personal.name}</div>
            <div>{value.personal.email}</div>
            <div>{value.personal.occupation}</div>
            <div>{value.personal.phone}</div>
            <div>{value.personal.DOB}</div>
            <div>{value.personal.location}</div>
            <div>{value.work.company}</div>
            <div>{value.work.occupation}</div>
            <div>{value.work.start}</div>
            <div>{value.work.end}</div>
            <div>{value.work.discription}</div>
            <div>
                {value.education.map((detail) => {
                    return (
                        <div>
                            <div key={uniqid()}>{detail.institution}</div>
                            <div key={uniqid()}>{detail.name}</div>
                            <div key={uniqid()}>{detail.start}</div>
                            <div key={uniqid()}>{detail.end}</div>
                        </div>)
                })}
            </div>



        </div>

    )
}

export default Display;

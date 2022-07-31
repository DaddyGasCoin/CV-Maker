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

            {/* display all work details */}
            {value.work.map((detail) => {
                return (
                    <div>
                        <div key={uniqid()}>{detail.company}</div>
                        <div key={uniqid()}>{detail.occupation}</div>
                        <div key={uniqid()}>{detail.start}</div>
                        <div key={uniqid()}>{detail.end}</div>
                        <div key={uniqid()}>{detail.discription}</div>
                    </div>)
            })}

            {/* display all education details */}
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

    )
}

export default Display;

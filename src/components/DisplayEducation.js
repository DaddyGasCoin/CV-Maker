import React from 'react';
import uniqid from "uniqid";

const DisplayEducation = (props) => {
    const { value } = props
    return (
        <div>
            {value.map((detail) => {
                return (
                    <div className='work-section'>
                        <div className='general-left'>
                            <div className="work-company" key={uniqid()}>{detail.institution}</div>
                            <div className="work-job" key={uniqid()}>{detail.name}</div>
                        </div>
                        <div className='work-right'>
                            <div className='dates' key={uniqid()}>{detail.start}</div>
                            -
                            <div className='dates' key={uniqid()}>{detail.end}</div>
                        </div>

                    </div>)
            })}
        </div>

    )
}

export default DisplayEducation;

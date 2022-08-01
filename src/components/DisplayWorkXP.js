import React from 'react';
import uniqid from "uniqid";

const DisplayWorkXP = (props) => {
    const { value } = props

    return (
        <div >
            {value.map((detail) => {
                return (
                    <div className='work-container'>
                        <div className='work-section'>
                            <div className='general-left'>
                                <div className='work-company' key={uniqid()}>{detail.company}</div>
                                <div className='work-job' key={uniqid()}>{detail.occupation}</div>
                            </div>
                            <div className='work-right'>
                                <div className="dates" key={uniqid()}>{detail.start}-</div>
                                <div className="dates" key={uniqid()}>{detail.end}</div>
                            </div>

                        </div>
                        <div class="disc" key={uniqid()}>{detail.discription}</div>
                    </div>)
            })}
        </div>
    )
}

export default DisplayWorkXP
import React from 'react';

const DisplayGeneral = (props) => {
    const { value } = props

    return (
        <div className='general-section'>
            <div className='general-left'>
                <div className='tittle-name'>{value.name}</div>
                <div className='tittle-occupation'>{value.occupation}</div>
            </div>
            <div className='general-right'>
                <div className='contact-info'>{value.phone}</div>
                <div className='contact-info-email'>{value.email}</div>
                <div className='contact-info'>{value.location}</div>
            </div>
        </div>
    )
}

export default DisplayGeneral
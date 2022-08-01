
import React from "react";

const InfoDetail = (props) => {
    const { main: { value }, main: { handler }, name, group } = props
    // match input box with text area if corresponding label is discription
    if (name === 'discription') {
        return (
            <div className="test">
                <label htmlFor={name}>{name}</label>
                <textarea type="text" id={name}
                    value={value[name]} onChange={handler} name={name}
                    data-info={group} data-id={props.main.id} />
            </div>
        )
    } else {
        return (
            <div className="test">
                <label htmlFor={name}>{name}</label>
                <input type="text" id={name}
                    value={value[name]} onChange={handler} name={name}
                    data-info={group} data-id={props.main.id} />
            </div>
        )
    }



}

export default InfoDetail

import React from "react";

const InfoDetail = (props) => {
    const { main: { value }, main: { handler }, name, group } = props

    return (
        <div className="test">
            <label htmlFor={name}>{name}</label>
            <input type="text" id={name}
                value={value[name]} onChange={handler} name={name}
                data-info={group} data-id={props.main.id} />
        </div>
    )

}

export default InfoDetail
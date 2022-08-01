import React from "react";
import InfoDetail from "./InfoDetail";

const Education = (props) => {

    return (
        <div className="detail-group">
            <InfoDetail main={props} name="institution" group="education" />
            <InfoDetail main={props} name="name" group="education" />
            <InfoDetail main={props} name="start" group="education" />
            <InfoDetail main={props} name="end" group="education" />
            <div className="button-container">
                <button className="add" data-group="education" onClick={props.add}>ADD</button>
                <button className="del" data-group="education" data-id={props.id} onClick={props.del}> DELETE</button>
            </div>

        </div >
    )

}

export default Education
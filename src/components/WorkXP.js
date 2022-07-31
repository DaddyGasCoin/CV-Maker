
import React from "react";
import InfoDetail from "./InfoDetail";

const WorkXP = (props) => {

    return (
        <div className="detail-group">
            <InfoDetail main={props} name="company" group="work" />
            <InfoDetail main={props} name="occupation" group="work" />
            <InfoDetail main={props} name="start" group="work" />
            <InfoDetail main={props} name="end" group="work" />
            <InfoDetail main={props} name="discription" group="work" />
            <button data-group="work" onClick={props.add}>ADD</button>
            <button data-group="work" data-id={props.id} onClick={props.del}> DELETE</button>
        </div>
    )

}

export default WorkXP
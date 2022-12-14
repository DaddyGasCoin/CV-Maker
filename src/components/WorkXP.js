
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
            <div className="button-container">
                <button className="add" data-group="work" onClick={props.add}>ADD</button>
                <button className="del" data-group="work" data-id={props.id} onClick={props.del}> DELETE</button>
            </div>

        </div>
    )

}

export default WorkXP
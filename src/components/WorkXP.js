
import React from "react";
import InfoDetail from "./InfoDetail";

const WorkXP = (props) => {

    return (
        <div>
            <InfoDetail main={props} name="company" group="work" />
            <InfoDetail main={props} name="occupation" group="work" />
            <InfoDetail main={props} name="start" group="work" />
            <InfoDetail main={props} name="end" group="work" />
            <InfoDetail main={props} name="discription" group="work" />
        </div>
    )

}

export default WorkXP
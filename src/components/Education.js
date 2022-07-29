import React from "react";
import InfoDetail from "./InfoDetail";

const Education = (props) => {

    return (
        <div>
            <InfoDetail main={props} name="institution" group="education" />
            <InfoDetail main={props} name="name" group="education" />
            <InfoDetail main={props} name="start" group="education" />
            <InfoDetail main={props} name="end" group="education" />
        </div>
    )

}

export default Education
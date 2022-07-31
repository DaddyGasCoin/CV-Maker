
import React from "react";
import InfoDetail from "./InfoDetail";

const General = (props) => {
    return (
        <div className="detail-group">
            <InfoDetail main={props} name="name" group="personal" />
            <InfoDetail main={props} name="email" group="personal" />
            <InfoDetail main={props} name="occupation" group="personal" />
            <InfoDetail main={props} name="phone" group="personal" />
            <InfoDetail main={props} name="location" group="personal" />
        </div>

    )
}
export default General;

import React from "react";

const General = (props) => {

    return (

        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"
                    value={props.value.name} onChange={props.handler} name="name"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="email">EMAIL</label>
                <input type="text" id="email"
                    value={props.value.email} onChange={props.handler} name="email"
                    data-info="personal" />
            </div>
        </div>

    )
}
export default General;

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
            <div>
                <label htmlFor="occupation">occupation</label>
                <input type="text" id="occupation"
                    value={props.value.occupation} onChange={props.handler} name="occupation"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone"
                    value={props.value.phone} onChange={props.handler} name="phone"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input type="text" id="dob"
                    value={props.value.DOB} onChange={props.handler} name="DOB"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="location">location</label>
                <input type="text" id="location"
                    value={props.value.location} onChange={props.handler} name="location"
                    data-info="personal" />
            </div>

        </div>

    )
}
export default General;
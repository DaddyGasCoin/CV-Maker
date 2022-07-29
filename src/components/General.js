
import React from "react";

const General = (props) => {
    const { handler, value } = props
    return (
        <div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"
                    value={value.name} onChange={handler} name="name"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="email">EMAIL</label>
                <input type="text" id="email"
                    value={value.email} onChange={handler} name="email"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="occupation">occupation</label>
                <input type="text" id="occupation"
                    value={value.occupation} onChange={handler} name="occupation"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone"
                    value={value.phone} onChange={handler} name="phone"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input type="text" id="dob"
                    value={value.DOB} onChange={handler} name="DOB"
                    data-info="personal" />
            </div>
            <div>
                <label htmlFor="location">location</label>
                <input type="text" id="location"
                    value={value.location} onChange={handler} name="location"
                    data-info="personal" />
            </div>

        </div>

    )
}
export default General;
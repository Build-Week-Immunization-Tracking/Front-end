import React from "react";

const Immunization = (props) => {
    console.log(props);
    return (
        <div>
            <p>Name: {props.name}</p>
        </div>
    )
}

export default Immunization;
import React from "react";

function Title(props) {
    return (
        <div id="title" style={{ backgroundColor: props.backgroundColor }}>
            <h1>
                <span id="orange">{props.orange} </span> {props.black}
            </h1>
        </div>
    );
}

export default Title;
import React from "react";


function Section(props) {
    return (
        <div>
            <h2>{props.componentType}</h2>
            <div>
                {props.children}
            </div>

            <hr></hr>
        </div>
    );
}

export { Section };

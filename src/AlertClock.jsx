import React from "react";

function AlertClock({ handleClick }) {
    return (
        <button onClick={handleClick}>
        Click me to show the current time!
        </button>
    )
}

export default AlertClock;
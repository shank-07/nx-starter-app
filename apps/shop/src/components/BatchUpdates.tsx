import React from "react";

export function BatchUpdates() {
    const [count, setCount] = React.useState(0);
    const [text, setText] = React.useState("");

    // In
    function handleClick() {
        setCount(count + 1);
        setText("Clicked!");
    }

    console.log("Rendered");
    return <button onClick={handleClick}>{count} - {text}</button>;
}
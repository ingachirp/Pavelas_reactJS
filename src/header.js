import { useState } from "react";

export default function Header (props) {
    const { title, subTitle } = props;
    const [count, setCount] = useState(0);
    const [buttonPressed, setButtonPressed] = useState(0);
    return (
        <div>
            <button
            onClick={() => {
                setCount(count + 1);
                setButtonPressed(buttonPressed + 1);
            }}
            >
                +
            </button>
            <button
            onClick={() => {
                setCount(count - 1 );
                setButtonPressed(buttonPressed + 1);
            }}
            >
                -
            </button>
            <h1>{title}</h1>
            <h4>{count}</h4>
            <b> Total button pressed:{buttonPressed}</b>
        </div>
      
    );
}
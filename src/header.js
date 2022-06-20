import { useState } from "react";
import Total from "./TotalCounts";

export default function Header(props) {
  const { title, onButtonClick } = props;
  const [count, setCount] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(0);

  return (
    <div
      style={{ border: "5px solid red", marginBottom: "30px", padding: "20px" }}
    >
      <h3>{title}</h3>
      <button
        onClick={() => {
          setCount(count - 2);
          setButtonPressed(buttonPressed + 1);
          onButtonClick();
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          setButtonPressed(buttonPressed + 1);
          onButtonClick();
        }}
      >
        +
      </button>
      <h4>{count}</h4>
      <Total buttonPressed={buttonPressed} />
    </div>
  );
}

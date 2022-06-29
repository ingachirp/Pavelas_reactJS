import { useState } from "react";

export default function Description(props) {
    
  const [buttonPressed, setButtonPressed] = useState(false);
console.log(props)
    return (
        <div>
            <h2>{props.title}</h2>
            
           <h3>{buttonPressed === true ? props.text : ''}</h3>
          <button
            onClick={() => {
              setButtonPressed(true);
            }}>
                "Show more"
            </button>
            <button
            onClick={() => {
              setButtonPressed(false);
              
            }}>
                "Show less"
            </button>
            </div>
  );
}
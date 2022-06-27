import { useState } from "react";

export default function Description(props) {
    const bodyText = "Vienas pagrindinių šios kompanijos tikslų yra itin patraukliomis sąlygomis pasiūlyti įspūdingomis specifikacijomis pasižyminčius prietaisus – tai jai greitai padėjo įtvirtinti lyderiaujančias pozicijas pasaulinėje rinkoje.";
    const [buttonPressed, setButtonPressed] = useState(false);

    return (
        <div>
            <h2>{props.title}</h2>
          <h3>{buttonPressed === true ? bodyText : ''}</h3>
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
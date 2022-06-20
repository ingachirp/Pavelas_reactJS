import logo from "./logo.svg";
import "./App.css";
import Headers from "./header";
import { useState } from "react";

function App() {
  const [parentCount, setParentCount] = useState(0);
  function addOneToCount() {
    setParentCount(parentCount + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Total: {parentCount}</h1>
        <Headers title={"First counter"} onButtonClick={addOneToCount} />
        <Headers title={"Second counter"} onButtonClick={addOneToCount} />
      </header>
    </div>
  );
}

export default App;
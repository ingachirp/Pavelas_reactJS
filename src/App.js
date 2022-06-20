import logo from "./logo.svg";
import "./App.css";
import Headers from "./Header";
import { useState } from "react";
import UserForm from "./UserForm";

function App() {
  const [parentCount, setParentCount] = useState(0);
  function addOneToCount() {
    setParentCount(parentCount + 1);
  }
  return (
    <div className="App" style={{ border: "5px solid green" }}>
      <header className="App-header">
        <h1>Total: {parentCount}</h1>
        <Headers title={"First counter"} onButtonClick={addOneToCount} />
      </header>
      <section>
        <UserForm />
      </section>
    </div>
  );
}

export default App;

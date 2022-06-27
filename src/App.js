import logo from "./logo.svg";
import "./App.css";
import Description from "./description";
// import Headers from "./Header";
import { useState } from "react";
// import UserForm from "./UserForm";

function App() {
  const [parentCount, setParentCount] = useState('');
  function addOneToCount() {
    setParentCount(parentCount + 1);
  }
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Xiaomi telefonai: {parentCount}</h1>
        <Description title={"P40"} ></Description>
        <Description title={"Redmi Node 11"} ></Description>
        <Description title={"Redmi 10 Lite"} ></Description>
        {/* <Headers title={"First counter"} onButtonClick={addOneToCount} /> */}
      </header>
      <section>
        {/* <UserForm /> */}
      </section>
    </div>
  );
}

export default App;

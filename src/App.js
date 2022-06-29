import logo from "./logo.svg";
import "./App.css";
import Description from "./description";
// import Headers from "./Header";
import { useState } from "react";
// import UserForm from "./UserForm";
const phones=[{title: 'P40', text: 'naujausias modelis'},{title: 'Redmi Node 11', text: 'pakutinis modelis'},{title: ' Redmi 10 Lite', text:"perkamiausias modelis "} ]
function App() {
  const [parentCount, setParentCount] = useState('');
  function addOneToCount() {
    setParentCount(parentCount + 1);
  }
  return (
    <div className="App" >
      <header className="App-header">
        <h1>Xiaomi telefonai: {parentCount}</h1>
        {phones.map((phone) => {
          return <Description
          key={phone.title} 
          title= {phone.title}
          text={phone.text}></Description>
        })}
        
        {/* <Description title={"P40"} text={"tokio modelio nera"}></Description>
        <Description title={"Redmi Node 11"} text={"pakutinis modelis"}></Description>
        <Description title={"Redmi 10 Lite"} text={"perkamiausias modelis "} ></Description> */}
        {/* <Headers title={"First counter"} onButtonClick={addOneToCount} /> */}
      </header>
      <section>
        {/* <UserForm /> */}
      </section>
    </div>
  );
}

export default App;

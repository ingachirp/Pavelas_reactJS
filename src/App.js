import logo from "./logo.svg";
import "./App.css";
import Headers from "./header";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headers
          title={"My second react app"}
          subTitle={"I really want to become a prof"}
        />
      </header>
    </div>
  );
}
export default App;
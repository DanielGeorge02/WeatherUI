import Details from "../src/JS/Details";
import Weather from "../src/JS/Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Weather />
      </div>
      <div className="right">
        <Details />
      </div>
    </div>
  );
}

export default App;

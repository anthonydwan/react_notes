import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/functional";
import Welcome from "./components/class";
import Hello from "./components/functional";

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman" />
      <p>child props</p>
      <Greet name="Clark" heroName="Superman" />
      <button>here we've added button</button>
      <Greet name="Diana" heroName="Wonder Woman" />
      {/* <Welcome/> */}
      {/* <Hello></Hello> */}
    </div>
  );
}

/*
1. component based architecture of react 
components that are reuseable. There are two component types: 
(A) functions and (B) class components
 */

export default App;

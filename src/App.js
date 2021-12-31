import logo from "./logo.svg";
import "./App.css";
import Greet, { Hello, Click } from "./components/functional";
import Welcome, { Message, Counter, ClassClick } from "./components/class";


// react components have to be in PascalCase
function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman" />
      <p>child props</p>
      <Greet name="Clark" heroName="Superman" />
      <button>here we've added button</button>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Hello></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      <Click></Click>
      <ClassClick></ClassClick>
    </div>
  );
}

/*
1. component based architecture of react 
components that are reuseable. There are two component types: 
(A) functions and (B) class components
 */

export default App;

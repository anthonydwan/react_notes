import logo from "./logo.svg";
import "./App.css";
import Greet, { Hello } from "./components/functional";
import Welcome, { Message, Counter } from "./components/class";

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
      <Counter></Counter>
    </div>
  );
}

/*
1. component based architecture of react 
components that are reuseable. There are two component types: 
(A) functions and (B) class components
 */

export default App;

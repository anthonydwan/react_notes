// import logo from "./logo.svg";
import "./App.css";
// import ListRendering from "./components/ListRendering";
// import UserGreeting from "./components/ConditionalRendering";
// import ParentComponent from "./components/ParentComponent";
// import Greet, { Hello, Click } from "./components/functional";
// import Welcome, { Message, Counter, ClassClick } from "./components/class";
// import EventBind from "./components/eventbind";
import Stylesheet from "./components/Stylesheet";

// react components have to be in PascalCase
function App() {
  return (
    <div className="App">
      {/* <ParentComponent></ParentComponent> */}
      {/* <Greet name="Bruce" heroName="Batman" />
      <p>child props</p>
      <Greet name="Clark" heroName="Superman" />
      <button>here we've added button</button>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Hello></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <Click></Click>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ListRendering></ListRendering> */}
      <Stylesheet primary={true}></Stylesheet>
    </div>
  );
}

/*
1. component based architecture of react 
components that are reuseable. There are two component types: 
(A) functions and (B) class components
 */

export default App;

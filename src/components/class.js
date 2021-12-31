import React, { Component } from "react";
// for class component, you also need the component import

// ES6 components - class component
class Welcome extends Component {
  // can use the mutable state which is managed within the component
  // unlike immutable props which get passed to the component
  render() {
    return (
      <h1>
        Welcome {this.props.name} also known as {this.props.heroName}
      </h1>
    );
  }
}

// utilising state with class component
class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  // method that is called to change the state
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

class Counter extends Component {
  // can use the mutable state which is managed within the component
  // unlike immutable props which get passed to the component
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // changing the state of the constructor
  // directly changing the state will not work:
  // const increment = () => this.state.count ++
  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("Callback value will be correct: ", this.state.count);
    });
    // note that the log below would lag by 1 because it is async
    console.log("this would not be synced", this.state.count);
  }

  // you will see that console.log for both async and sync are printed 5 times
  // but dom only incremented by 1 - this is because react groups function into a single
  // update
  incrementFiveIncorrect() {
    for (let i = 0; i < 5; i++) {
      this.increment();
    }
  }

  // you will need to use the prevState
  incrementFiveRight() {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }
  }

  render() {
    return (
      <div>
        <div>Counter - {this.state.count}</div>
        <button onClick={() => this.incrementFiveRight()}>Increment</button>
      </div>
    );
  }
}

export default Welcome;
export { Message, Counter };

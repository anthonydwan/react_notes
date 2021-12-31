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

export default Welcome;
export { Message };

import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  // approach 3:
  clickHandler() {
    this.setState({
      message: "Goodbye",
    });
  }

  // approach 4: the handler function itself is an arrow function
  clickHandler2 = () => {
    this.setState({
      message: "Goodbye 2",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* approach 1: bind in render, this is not ideal for performance since generate brand new eventhandler for every render */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* approach 2: arrow function, also not ideal for performance */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* approach 3: bind before the render in the class constructor */}
        <button onClick={this.clickHandler}>Click 1</button>
        {/* approch 4: arrow function for handler itself */}
        <button onClick={this.clickHandler2}>Click 2</button>
      </div>
    );
  }
}

export default EventBind;

import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // return (
    //   <div>
    //     {/* if logged in, show name */}
    //     <div>Welcome Anthony</div>
    //     {/* else, show guest */}
    //     <div>Welcome Guest</div>
    //   </div>
    // );

    // //   approach 1: if/else condition
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Anthony</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // //   approach 2: element variables (better than app 1)
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Anthony</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;

    //   --------------------------------------------------------------------------------------
    //   approach 3: ternary condition (better than app 1 and 2)
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Anthony</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // approach 4: short circuit (for display something vs nothing)
    return this.state.isLoggedIn && <div>Welcome Anthony</div>;
  }
}

export default UserGreeting;

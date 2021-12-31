import React, { Component } from "react";
// importing the child component
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  // the parameter childName is passed from the ChildComponent when calling props method
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        {/* greetHandller is a props method that is called within the ChildComponent */}
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;

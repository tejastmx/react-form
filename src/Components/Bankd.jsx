import React, { Component } from "react";
import Personal from "../Components/Personal";

export default class Bankd extends Component {
  constructor(props) {
    super(props);
   
  };
  render() {
    return (
      <div>
        heloo bank
        <Personal add={this.add} />
        <h1>Bank {this.props.Fname}</h1>
      </div>
    );
  }
}

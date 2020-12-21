import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Business from "./Business";
import Personal from "./Personal";

export default class home extends Component {
  render() {
    return (
      <>
        <div className="">
          <span>
            <Link to="/Personal">PERSONAL</Link>
          </span>
          <span>
            <Link to="/Business">BUSINESS</Link>
          </span>
        </div>
      </>
    );
  }
}

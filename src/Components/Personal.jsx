import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Bankd from "../Components/Bankd.jsx";
export default class personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Fname: "",
      Lname: "",
      Email: "",
      Pno: "",
      Error: {
        Fname: "",
        Lname: "",
        Email: "",
        Pno: "",
      },
    };
  }

  firstChangeHandler = (e) => {
    this.setState({ Fname: e.target.value });
    let regex_name = /^[A-Za-z0-9]{5,20}$/;
    if (!regex_name.test(this.state.Fname)) {
      this.setState({ Error: { Fname: "name must contain min 6 char" } });
    } else {
      this.setState({ Error: { Fname: "" } });
    }
  };

  submitHandler = (e) => {
    // alert("submitted");
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeHolder="first name"
            defaultValue={this.state.Fname}
            onChange={this.firstChangeHandler}
          ></input>

          <span>{this.state.Error.Fname}</span>

          <input
            type="text"
            placeHolder="last name"
            value={this.state.Lname}
            onChange={this.LastChangeHandler}
          ></input>
          <span>{this.state.Error.Lname}</span>

          <input
            type="text"
            placeHolder="email "
            value={this.state.Email}
            onChange={this.emailChangeHandler}
          ></input>
          <span>{this.state.Error.Email}</span>

          <input
            type="text"
            placeHolder="phone number"
            value={this.state.Pno}
            onChange={this.phoneChangeHandler}
          ></input>
          <span>{this.state.Error.Pno}</span>

          <button onClick={this.props.add}>
            {" "}
            <Link to="/Bankd">Next</Link>
          </button>
        </form>
      
      </div>
    );
  }
}

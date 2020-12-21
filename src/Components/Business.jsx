import React, { Component } from "react";

export default class Business extends Component {
  constructor() {
    super();
    this.state = {
      // step: 1,
      Fname: "",
      Email: "",
      Pno: "",
      Error: {
        Fname: "",
        Email: "",
        Pno: "",
      },
    };
  }
  // nextStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step + 1,
  //   });
  // };
  // prevStep = () => {
  //   const { step } = this.step;
  //   this.setState({
  //     step: step - 1,
  //   });
  // };

  firstChangeHandler = (e) => {
    this.setState({ Fname: e.target.value });
    let regex_name = /^[A-Za-z0-9]{5,20}$/;
    if (!regex_name.test(this.state.Fname)) {
      this.setState({ Error: { Fname: "name must contain min 6 char" } });
    } else {
      this.setState({ Error: { Fname: "" } });

    }

    // this.setState({Fname:e.target.value}); 
  };

  submitHandler = (e) => {
    alert("submitted");
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeHolder="Business name"
            value={this.state.Fname}
            onChange={this.firstChangeHandler}
          ></input>
          <span>{this.state.Error.Fname}</span>

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

          <button> next</button>
        </form>
      </div>
    );
  }
}

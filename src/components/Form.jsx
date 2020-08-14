import React, { Component } from "react";
import "./Form.css";

export default class form extends Component {
  state = {
    phoneNumber: "",
    otp: "",
    step: 1,
  };

  nextStep = () => {
    
    const { step } = this.state;
    this.setState({
      step: step + 1,
    })
    ;
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  storeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { phoneNumber, otp } = this.state;
    const values = { phoneNumber };

    //Phone Number Page

    switch (step) {
      case 1:
        return (
          <div className="main">
            <div className="header">
              <h1>Your Phone Number</h1>
              <h2>Please enter your mobile number</h2>
            </div>

            <div className="phonenumber">
              <input
                className="input"
                type="text"
                onChange={this.storeInput}
                value={this.state.input}
                name="phoneNumber"
                maxLength="10"
                placeholder="----------"
              />
            </div>

            <div className="next">
              <button className="btn" onClick={this.nextStep}>
                NEXT
              </button>
              <h4>{this.state.phoneNumber}</h4>
            </div>
          </div>
        );

      //OTP page

      case 2:
        return (
          <div className="main">
            <div className="header2">
              <h2>
                We've sent an activation code to your phone.Please enter it
              </h2>
            </div>
            <div className="i">
              <input
                className="input-otp"
                type="text"
                onChange={this.storeInput}
                value={this.state.otp}
                name="otp"
                maxLength="6"
                placeholder="------"
              />
              <button className="btn">NEXT</button>
            </div>
            <h4>{this.state.otp}</h4>
          </div>
        );
    }
  }
}

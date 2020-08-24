import React, { Component } from "react";
import PhoneNo from './PhoneNo'
import Otp from './otpPage'
import Homepage from "../Pages/Homepage";
import { PostContextProvider } from "../context/PostContext";

export default class form extends Component {

  state = {
    phoneNumber: "+91 ",
    otp: "",
    step: 3
  };

  nextPage = () => {
    this.setState({ step: this.state.step + 1 })
  }

  storeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state.phoneNumber)
  };

  render() {
    const { step } = this.state;
    const { phoneNumber, otp, isPhoneNumber } = this.state;
    const values = { phoneNumber };

    //Phone Number Page
    switch (step) {
      case 1:
        return (
          <PhoneNo
            phoneNumber={this.state.phoneNumber}
            nextPage={() => this.nextPage()}
            storeInput={this.storeInput}
          />
        )
      //otp page
      case 2:
        return (
          <Otp
            otp={this.state.otp}
            nextPage={() => this.nextPage()}
            storeInput={this.storeInput}
            phoneNumber={this.state.phoneNumber}
          />
        )
      case 3:
        return (
          <PostContextProvider>
            <Homepage />
          </PostContextProvider>)
      default:
        return <div></div>
    }
  }
}

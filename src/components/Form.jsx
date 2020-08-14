import React, { Component } from "react";
import "./Form.css";
import PhoneNo from './PhoneNo'
import Otp from './otpPage'

export default class form extends Component {
  
  state = {
    phoneNumber: "",
    otp: "",
    isPhoneNumber:true
  };

  toggleForm = () => {
    this.setState({ isPhoneNumber:!this.state.isPhoneNumber })
  }

  storeInput = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { phoneNumber, otp, isPhoneNumber } = this.state;
    const values = { phoneNumber };

      //Phone Number Page
      if (isPhoneNumber) {

        return (
          <PhoneNo
            phoneNumber={this.state.phoneNumber}
            toggleForm={ () => this.toggleForm() }
            storeInput={this.storeInput}
          />
        )
      } else {
        return <Otp
            otp={this.state.otp}
            toggleForm={ () => this.toggleForm() }
            storeInput={this.storeInput}
         />

      }
        // return (
        //   <div className="main">
        //     <div className="header2">
        //       <h2>
        //         We've sent an activation code to your phone.Please enter it
        //       </h2>
        //     </div>
        //     <div className="i">
        //       <input
        //         className="input-otp"
        //         type="text"
        //         onChange={this.storeInput}
        //         value={this.state.otp}
        //         name="otp"
        //         maxLength="6"
        //         placeholder="------"
        //       />
        //       <button className="btn">NEXT</button>
        //     </div>
        //     <h4>{this.state.otp}</h4>
        //   </div>
        // );
  }
}


import React, { Component } from 'react'
import PhoneNo from './PhoneNo'
import './otpPage.css';

export default class otpPage extends PhoneNo {
  
    
    render() {
        return (
            <div className="main">
                <div className="header">
                      <h2>We've sent an activation code to your number {this.props.phoneNumber}.Please enter it</h2>
                </div>
                <div className="otp">
                    <input  className="input-otp" type="text"
                        onChange={this.props.storeInput}
                        value={this.props.otp}
                        name="otp"
                        maxLength="6"
                        placeholder="------"/>
                    <button className="btn">NEXT</button>
                </div>
                     <h2>{this.props.otp}</h2>
            </div>
        )
    }
}


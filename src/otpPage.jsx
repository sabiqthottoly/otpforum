
import React, { Component } from 'react'
import PhoneNo from './PhoneNo'
import './otpPage.css';

export default class otpPage extends PhoneNo {
    state={
        otp:"",
    }
    storeOtp=(event)=>{
        this.setState({
            otp:event.target.value
        })
        console.log(this.state.otp)
    }
    render() {
        return (
            <div className="main">
                <div className="header2">
                
                <h2>We've sent an activation code to your phone.please enter it</h2>
                </div>
                <div className="i">
                    <input  className="input-otp" type="text"
                        onChange={this.storeOtp}
                        value={this.state.otp}
                        name="input"
                        maxLength="6"
                        placeholder="------"/>
                    <button className="btn">NEXT</button>
                </div>
                
            </div>
        )
    }
}


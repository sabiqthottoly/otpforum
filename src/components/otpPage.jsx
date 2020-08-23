
import React, { Component } from 'react'
import PhoneNo from './PhoneNo'
import './otpPage.css';
import {Button,Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class otpPage extends PhoneNo {
  
    
    render() {
        return (
            <div className="mainOtp">
                <div className="headeOtp">
                       <h4>{this.props.phoneNumber}</h4>
                       <h7>We've sent an activation code to your number.</h7>
                       <h7>Please enter it</h7>
                </div>
                <div className="otp">
                    <Input  className="input-otp box" type="text"
                        onChange={this.props.storeInput}
                        value={this.props.otp}
                        name="otp"
                        maxLength="6"
                        placeholder="------"/>
                 </div>       
                 <div className="next-otp">    
                    <Button  className="nextButton" color="primary"  onClick={this.props.nextPage}>NEXT</Button>{' '}
                 </div>      
               
                     
            </div>
        )
    }
}


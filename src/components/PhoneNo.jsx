import React, { Component } from "react";
//import {Link}  from 'react-router-dom';
import './PhoneNo.css';
import {Button,Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const buttonStyle = { }
 
export default class PhoneNo extends Component {
   
    
    
 render() {
    const{values,storeInput}=this.props

        return (
            
            <div className="mainPhoneNumber">
                <div className="headerPhoneNumber">
                    <h4>Your Phone Number</h4>
                    <h7>Please enter your  mobile number</h7>
                </div>

                <div className="phonenumber">
                    <Input
                        className="input"
                        type="text"
                        onChange={this.props.storeInput}
                        value={this.props.phoneNumber}
                        name="phoneNumber"
                        maxLength="14"
                        placeholder=" "
                    />
                </div>
                <div className="next-phoneNumber">

                <Button style={buttonStyle} className="buttonNext" color="primary"  onClick={this.props.nextPage}>NEXT</Button>{' '}
                
                </div>
                
            </div>
            
        );
    }
}
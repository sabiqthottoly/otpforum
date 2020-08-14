import React, { Component } from "react";
//import {Link}  from 'react-router-dom';
import './PhoneNo.css';
import {Button} from 'reactstrap';

export default class PhoneNo extends Component {
   
    
    
 render() {
    const{values,storeInput}=this.props

        return (
            
            <div className="main">
                <div className="header">
                    <h1>Your Phone Number</h1>
                    <h2>Please enter your  mobile number</h2>
                </div>

                <div className="phonenumber">
                    <input
                        className="input"
                        type="text"
                        onChange={this.props.storeInput}
                        value={this.props.phoneNumber}
                        name="phoneNumber"
                        maxLength="14"
                        placeholder="----------"
                    />
                </div>
                <div className="next">

                <Button color="primary"  onClick={this.props.toggleForm}>NEXT</Button>{' '}
                
                </div>
                
            </div>
            
        );
    }
}
import React, { Component } from "react";
import {Link}  from 'react-router-dom';
import './PhoneNo.css';

export default class PhoneNo extends Component {
   
    constructor(props){
        super(props);
        this.state={
           input:null,
           errors:{
               input:""
           }
        }
    }
    

    

    storeInput = (event) => {
        event.preventDefault();
        this.setState({
            input:event.target.value,
        });
        console.log(this.state.input);
    

    };
  
  
 render() {
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
                        onChange={this.storeInput}
                        value={this.state.input}
                        name="input"
                        maxLength="14"
                        placeholder="----------"
                    />
                </div>
                <div className="next">
                 
                    <Link to ="/otp" className="next-button" >NEXT</Link>
                
                </div>
                
            </div>
            
        );
    }
}

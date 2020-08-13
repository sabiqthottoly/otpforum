import React, { Component } from "react";
import {Link}  from 'react-router-dom';
import './PhoneNo.css';

export default class PhoneNo extends Component {
   
    constructor(props){
        super(props);
        this.state={
           input:null,
           step:1,
           otp:null,
           errors:{
               input:""
           }
        }
    }
    
    //goto next step    
    nextStep=()=>{
        const{step}=this.state
        this.setState({
            step:step+1
        });
    }
    //go back to previous step
    pevStep=()=>{
        const{step}=this.state
        this.setState({
            step:step-1
        });
    }
    

    //handel input
    handleChange = event => {
        this.setState({ input: event.target.value });
        let errors = this.state.errors;
        this.setState({errors, [name]: value});
      };
  
  
 render() {
     const{step}=this.state;
     const{input,otp}=this.state;
     const values ={input,otp}

     switch(step){
         case 1:
            return(
                <PhoneNumber
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}/>
            )
      case 2:
          return(
               <OTP
               nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}/>

          )

          } 
        

        return (
            
            <div className="main">
                <div className="header">
                    <h1>Your Phone Number</h1>
                    <h2>please confirm your phone number</h2>
                </div>

                <div className="phonenumber">
                    <input
                        className="input"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.input}
                        name="input"
                        maxLength="14"
                        placeholder="----------"
                    />
                </div>
                <div className="next">
                 
                    <Link to ="/otp" className="next-button" >NEXT</Link>
                
                </div>
                <p>{this.state.input}</p>
            </div>
            
        );
    }
}

import React,{useState} from 'react';

import './App.css';
//import Form from './Form';
import PhoneNo from './PhoneNo';
import otpPage from './otpPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




function App() {
 

  return (
    <Router>
    <div className="App">
    
       <Route path="/"  exact component={PhoneNo}/>
       <Route path="/otp" component={otpPage}/>
    </div>
    </Router>
  );
}

export default App;

import React from 'react'
import { Input } from 'reactstrap';
import './Header.css'

export default function Header() {
    return (
        <div style={{fontFamily: "'Montserrat', sans-serif"}} className="mainHeader">
            <div><h3 style={{fontFamily: "'Montserrat', sans-serif"}}>PSC:CHALLENGER</h3></div>
            <div><h5><Input placeholder="Ask your question " className="askQuesitonSearch" style={{ borderRadius: '50px',marginTop:"-5px" }} type="text" className="searchInput" /> </h5></div>
            <i class="fas fa-comment-alt"></i>
            <i class="fas fa-bell"></i>
            <i class="fas fa-user-friends"></i>
            <h5  style={{fontFamily: "'Montserrat', sans-serif"}}>LOGIN</h5>
   </div>
        
    )
}

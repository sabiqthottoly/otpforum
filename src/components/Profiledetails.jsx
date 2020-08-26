import React from 'react'
import { Avatar } from '@material-ui/core';
import {
    ListGroupItem,
    Row,
    // ListGroup,
    // Container,
    // Col
} from 'reactstrap';
import './Profiledetails.css'
export default function ProfileDetails() {
    return (
        <div className="mainProfileDetails">

            <div className="profileHeader">
              <Row>
                <Avatar className="avatarProfileDetails" alt="Remy Sharp" src="" />
                <h5 style={{marginTop:"6px"}}>Username</h5>
             </Row>   
            </div>
            <div className="profileList">
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none",borderBottom:"solid 1px silver"}} tag="a" href="#">View Profile</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none",borderBottom:"solid 1px silver"}} tag="a" href="#">Friends</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none",borderBottom:"solid 1px silver"}} tag="a" href="#">Messages</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none",borderBottom:"solid 1px silver"}} tag="a" href="#">My Notes</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none",borderBottom:"solid 1px silver"}} tag="a" href="#">Helps & Feedbacks</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none",borderBottom:"solid 1px silver"}} tag="a" href="#">Log Out</ListGroupItem>           
            </div>


        </div>
    )
}
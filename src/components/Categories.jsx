import React from 'react'
import './Categories.css'
import { ListGroup, ListGroupItem } from 'reactstrap';


export default function Categories() {
    return (
        <div className="categories">
            <div className="headerCategories">
                <h3>TOPICS</h3>
                <ListGroup flush>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">Kerala</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">India</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">World</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">English</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">Science</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">Malayalam</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">Mathamatics</ListGroupItem>
                    <ListGroupItem style={{textDecoration:"none",backgroundColor:"transparent",color:"gray",border:"none"}} tag="a" href="#">IT & Cyber Law</ListGroupItem>
                </ListGroup>

            </div>
        </div>
    )
}

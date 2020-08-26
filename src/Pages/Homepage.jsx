import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./Homepage.css"
import Postcard from '../components/Postcard';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter,Container, Row, Col } from 'reactstrap';
import Categories from '../components/Categories';
import PostDefault from '../components/PostDefault';
import { PostsContext, PostsDispatchContext } from '../context/PostContext';
import ProfileDetails from '../components/Profiledetails';
import Header from '../components/Header';
import PostcardDoubt from '../components/PostcardDoubt';
import PostcardShareinfo from '../components/postcardShareinfo';


function Homepage() {

   
    const posts = useContext(PostsContext);

return (
   <Container fluid>
        <div className="homePage">
            <Row className="homepageheader" >
                <Col lg="12"><Header/></Col>
            </Row>
            <Row> 
                <Col  xs="12" md="3" className="categoriesLayout" > <Categories /> </Col> 
                <Col  xs="12" md="6" className="postLayout" >
                   <Row ><PostDefault /></Row>
                   <Row>{posts.map((post)=>
                            post.postType==='mcq'?
                           (<Postcard post={post} />) :post.postType==='doubt'?(<PostcardDoubt post={post}/>):post.postType==='shareinfo'?(<PostcardShareinfo post={post}/>):null)
                               }
                  </Row>
                </Col> 
                <Col  xs="12" md="3" className="ProfileDetails" ><ProfileDetails /></Col>               
            </Row>
        </div>
    </Container>        
    )


}




export default Homepage;
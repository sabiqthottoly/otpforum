import React, { Component,useContext } from 'react'
import { Avatar } from '@material-ui/core';
import {Input , Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import './Postcard.css'  
import { PostGlobalContext } from '../context/PostGlobalContext';
  

//export default class Postcard extends Component {
  //  render() {
     function Postcard() {

        console.log("PostCard")
        const {posts} = useContext(PostGlobalContext);
        console.log(posts)    
        
        let arrayOfUsers = []
          console.log(Object.keys(posts))
          
        Object.keys(posts).map(eachKey => {
            arrayOfUsers.push(posts[eachKey])    
        })

        console.log(arrayOfUsers)
        
        return arrayOfUsers.map((each) => {
            return (
                <div className="post">
                   <div className="postHeader">
                        <Avatar className="avatar" alt="Remy Sharp" src="" />
                        <h6 className="userName"><strong>{each.userName}</strong></h6>
                    </div>
                    <div className="postContent">
                       <h4 style={{fontFamily: "'Montserrat', sans-serif"}} className="postQuestion">Which is the largest country in this world</h4>
                       <div className="postOptions">
                           <h6><Input style={{fontFamily: "'Montserrat', sans-serif"}} type="radio"/>Russia</h6>
                           <h6><Input style={{fontFamily: "'Montserrat', sans-serif"}} type="radio"/>chi</h6>
                           <h6><Input style={{fontFamily: "'Montserrat', sans-serif"}} type="radio"/>USA</h6>
                           <h6><Input style={{fontFamily: "'Montserrat', sans-serif"}} type="radio"/>Canada</h6>
                       </div> 	
                    </div>
                </div>
            )
        })
    }

//}
export default Postcard;
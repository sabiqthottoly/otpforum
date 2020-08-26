import React, { Component, useContext } from 'react'
import { Avatar } from '@material-ui/core';
// import { input,  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Postcard.css'

//export default class Postcard extends Component {
//  render() {
function Postcard({post}) {
    {console.log(post)}
    
    // return props.posts.map((each) => {
        return (
            // {each.ask==='doubt'?}

            <div className="post" key={Math.random().toString()}>
                <div className="postHeader">
                    <Avatar className="avatar" alt="Remy Sharp" src="" />
                    <h6 className="userName"><strong>{post.userName}</strong></h6>
                </div>
                <div className="postContent">
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="postQuestion">{post.postQuestion}</h4>
                    <div className="postOptions">
                        <h6><button className="options" style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.postOptions[0]}</button></h6>
                        <h6><button className="options" style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.postOptions[1]}</button></h6>
                        <h6><button className="options" style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.postOptions[2]}</button></h6>
                        <h6><button className="options" style={{ fontFamily: "'Montserrat', sans-serif" }}>{post.postOptions[3]}</button></h6>
                    </div>
                </div>
            </div>
        )
    // })
}

//}
export default Postcard;
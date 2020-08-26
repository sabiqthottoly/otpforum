import React, { Component, useContext } from 'react'
import { Avatar } from '@material-ui/core';
// import { Input, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Postcard.css'

function PostcardShareinfo({post}) {
    console.log(post)
        return (
            <div className="post" key={Math.random().toString()}>
                <div className="postHeader">
                    <Avatar className="avatar" alt="Remy Sharp" src="" />
                    <h6 className="userName"><strong>{post.userName}</strong></h6>
                </div>
                <div className="postContent">
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif" }} className="postQuestion">{post.postQuestion}</h4>
                </div>
            </div>
        )
    // })
}

export default PostcardShareinfo;
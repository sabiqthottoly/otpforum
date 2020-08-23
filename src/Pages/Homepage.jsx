import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./Homepage.css"
import Postcard from '../components/Postcard';
// import { db } from './firebase';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Categories from '../components/Categories';
import PostDefault from '../components/PostDefault';
import { PostsContext, PostsDispatchContext } from '../context/PostContext';
import ProfileDetails from '../components/Profiledetails';
import Header from '../components/Header';

function Homepage() {

    // const [posts, setPosts] = useState([{ userName: "sabiq", }])

    //  useEffect(()=>{
    //      db.collection('posts').onSnapshot(snapshot=>{
    //          setPosts(snapshot.docs.map(doc =>({
    //             post:doc.data(),
    //             id:doc.id}     ) ))
    //      })
    //  })

    const posts = useContext(PostsContext);

    return (
        <div className="homePage">
            <div className="homepageheader" >
                <Header />
            </div>

            <div className="containerTop">


                {/* CATEGORIES LAYOUT */}
                <div className="categoriesLayout">
                    <Categories />
                </div>

                {/* //POST CARD LAYOUT                 */}
                {/* postDefault */}
                <div className="postLayout">
                    <div className="postDefault">
                        <PostDefault />
                    </div>

                    <Postcard posts={posts} />

                    {/* { posts.map((post) => (<Postcard userName={post.userName}/>))} */}
                    {/* new question */}
                    {/* <div><Button color="primary" style={{borderRadius : '50px'}} className="newQuestionButton">NEW QUESTIONS</Button></div> */}
                    {/* {
                 posts.map(({id,post}) => (
                     <Postcard key={id} 
                               userName={post.userName}
                               postQustion={post.postQuestion}
                               postOptions={post.postOptions}/>
                 ))
             } */}
                    {/* {/* <Postcard
                    userName="Sabiq_Thottoly"
                    postQuestion="Hitler party which came into power in 1933 is known as"
                    postOptions="NAZI party"
                    
                /> */}
                    {/* <Postcard/>
                <Postcard/> */}


                </div>



                {/* profileLayout         */}
                <div className="ProfileDetails">
                    <ProfileDetails />
                </div>

            </div>
        </div>
    )
}

export default Homepage;
import React, { createContext, useState } from "react";

const PostsContext = createContext(undefined);
const PostsDispatchContext = createContext(undefined);

<<<<<<< HEAD
class PostContextProvider extends Component {
  state = {
    posts: [
      {
        userName: "Sabiq-thottoly",
        postQuestion: "question will be here? ",
        postOptions: ["1", "2", "3", "4"],
        isDeleted: true,
      },
      {
        userName: "Jasir@Jamal",
        postQuestion: "question will be here? ",
        postOptions: ["1", "2", "3", "4"],
        isDeleted: false,
      }
    ],
  };

  addNewPost = (postQuestion) => {
    console.log(postQuestion);
    let postNew = {
      userName: "Hisham",
      postQuestion:postQuestion,
      postOptions: ["1", "2", "3", "4"],
      isDeleted: false,
    };

    this.setState({...this.state,posts:[{postNew}] }, () => {
      console.log(...this.state);
    });
  };
=======
let dummyPosts = [
  {
    userName: "Sabiq-thottoly",
    postQuestion: "question will be here? ",
    postOptions: ["1", "2", "3", "4"],
    isDeleted: true,
  },
  {
    userName: "Jasir@Jamal",
    postQuestion: "question will be here? ",
    postOptions: ["1", "2", "3", "4"],
    isDeleted: false,
  },
]

function PostContextProvider({ children }) {

  const [posts, addNewPost] = useState(dummyPosts)

  return (
    <PostsContext.Provider value={posts}>
      <PostsDispatchContext.Provider value={addNewPost}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsContext.Provider>
  )
>>>>>>> a4376a38cf978b2ca0b45d0f47957b7c0d6cab78

}

export { PostContextProvider, PostsContext, PostsDispatchContext };

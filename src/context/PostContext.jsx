import React, { createContext, useState } from "react";

const PostsContext = createContext(undefined);
const PostsDispatchContext = createContext(undefined);

let dummyPosts = [
  {
    userName: "Sabiq-thottoly",
    postQuestion: "question will be here? ",
    postOptions: ["1", "2", "3", "4"],
    isDeleted: true,
    postType:'mcq'
  },
  {
    userName: "Jasir@Jamal",
    postQuestion: "question will be here? ",
    postOptions: ["1", "2", "3", "4"],
    isDeleted: false,
    postType:'mcq'
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

}

export { PostContextProvider, PostsContext, PostsDispatchContext };
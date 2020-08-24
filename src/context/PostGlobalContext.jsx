import React, { createContext, Children ,useReducer} from 'react'
import { PostContext } from './PostContext'
import Appreducer from './Appreducer'

const initialState={
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
        },
      ],
}




export const PostGlobalContext = createContext(initialState)

export  const PostGlobalContextProvider=({Children})=> {
     const [state, dispatch] = useReducer(Appreducer, initialState )    

     
   const addNewPost=(post)=>{
 
     dispatch({
        type:'ADD_POST',
        payload:post })
                                  

};

    return (
       <PostGlobalContext.Provider value={{posts:state.posts,addNewPost}}>
           {Children}
       </PostGlobalContext.Provider>
        
    )
}

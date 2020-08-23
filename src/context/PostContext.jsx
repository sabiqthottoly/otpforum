import React, { createContext, Component } from "react";

export const PostContext = createContext();

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
      },
    ],
  };

  addNewPost = (postQuestion) => {
    console.log(postQuestion);
    let postNew = {
      userName: "Hisham",
      postQuestion: postQuestion,
      postOptions: ["1", "2", "3", "4"],
      isDeleted: false,
    };

    this.setState({ posts: this.state.posts.concat([postNew]) }, () => {
      console.log(this.state.posts);
    });
  };

  render() {
    return (
      <PostContext.Provider
        value={{ ...this.state, addNewPost: this.addNewPost }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

export default PostContextProvider;

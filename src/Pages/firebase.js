// const firebaseConfig = {
//     apiKey: "AIzaSyB3XPHAa7HJAmjPHcnnUqzrHuahGpCtD2o",
//     authDomain: "homepageproject-d21e7.firebaseapp.com",
//     databaseURL: "https://homepageproject-d21e7.firebaseio.com",
//     projectId: "homepageproject-d21e7",
//     storageBucket: "homepageproject-d21e7.appspot.com",
//     messagingSenderId: "1084903082661",
//     appId: "1:1084903082661:web:d332c8cc61518acbb9db4c",
//     measurementId: "G-QS4XHPYN00"
//   };

//   export default firebaseConfig;

  import firebase from "firebase"

  const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyB3XPHAa7HJAmjPHcnnUqzrHuahGpCtD2o",
    authDomain: "homepageproject-d21e7.firebaseapp.com",
    databaseURL: "https://homepageproject-d21e7.firebaseio.com",
    projectId: "homepageproject-d21e7",
    storageBucket: "homepageproject-d21e7.appspot.com",
    messagingSenderId: "1084903082661",
    appId: "1:1084903082661:web:d332c8cc61518acbb9db4c",
    measurementId: "G-QS4XHPYN00"
  })

  const db =firebase.firestore();
  const auth =firebase.auth();
  const storage = firebase.storage();

  export{db,auth,storage};
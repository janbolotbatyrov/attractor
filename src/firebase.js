import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlkrPjAZQHJbaEm4Ipo-HSXVySDkcAkOI",
  authDomain: "repo-auth.firebaseapp.com",
  projectId: "repo-auth",
  storageBucket: "repo-auth.appspot.com",
  messagingSenderId: "894352804491",
  appId: "1:894352804491:web:851b21d951a50132e9628e",
  measurementId: "G-C40X94BEBW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GithubAuthProvider();

export const signInWithGithub = () =>
  auth
    .signInWithPopup(provider)
    .then((res) =>
      localStorage.setItem("username", res.additionalUserInfo.profile.login)
    )
    .catch((err) => console.log(err));

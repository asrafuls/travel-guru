import React, { createContext, useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';


firebase.initializeApp(firebaseConfig)

const AuthContext = createContext()
export const AuthContextProvider = (props) => {
  const auth = Auth();
  return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext);

const getUser = (user) => {
  const { displayName, email, photoUrl } = user;
  return { name: displayName, email, photo: photoUrl }
}


export const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const Auth = () => {

  const [error, setError] = useState(null)

  const [user, setUser] = useState(null)

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
      .then((res) => {
        const filterUser = getUser(res.user)
        setUser(filterUser)
      })
      .catch((err) => {
        setUser(null)
        console.log(err.message)
      })
  }

  const facebookSignIn = () => {

  }

  const passwordSignUp = (name, email, password) => {
    console.log(password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
        // firebase.auth().currentUser.updateProfile({
        //   displayName: name,
        //   // photoURL: 'https://www.w3schools.com/w3images/avatar2.png'
        // }).then(res => {
        const usr = getUser(res.user)
        setUser(usr)
        // })
      })
      .catch(err => {

      })
  }

  const passwordSignIn = (email, password) => {

  }

  const forgotPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(res => {
        window.location.pathname('/')
      }).catch(err => {

      });
  }


  const singOut = () => {
    firebase.auth().signOut()
      .then(res => {
        setUser(null)
        window.location.reload()
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged((usr) => {
      if (usr) {
        const currentUser = getUser(usr)
        setUser(currentUser)
      } else {

      }
    });
  }, [])

  return {
    user,
    error,
    googleSignIn,
    facebookSignIn,
    passwordSignUp,
    passwordSignIn,
    forgotPassword,
    singOut
  }
}
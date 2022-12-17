import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';


firebase.initializeApp(firebaseConfig)

const AuthContext = createContext()
export const AuthContextProvider = (props) => {
  const auth = ContextItems();
  return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}
export const useContextItems = () => useContext(AuthContext);

const getUser = (user) => {
  const { displayName, email, photoUrl } = user;
  return { name: displayName, email, photo: photoUrl }
}


export const PrivateRoute = ({ children, ...rest }) => {
  let auth = useContext();
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

const ContextItems = () => {

  const [user, setUser] = useState(null)
  const [bannerItems, setBannerItems] = useState(null)
  const [tourItems, setTourItems] = useState(null)
  const [destinasonItems, setDestinasonItems] = useState(null)
  const [error, setError] = useState(null)


  const [searchResult, setSearchResult] = useState(null)

  const [homeLoading, setHomeLoading] = useState(true)


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


  // Get Websites Neded Datas Form Db
  useEffect(() => {
    // Banner Items
    axios.get("/banner-items")
      .then(res => {
        setBannerItems({
          status: 200,
          data: res.data
        })
      })
      .catch(error => {
        setBannerItems({
          status: 400,
          data: error.message
        })
      })

    // Banner Items
    axios.get("/tour-items")
      .then(res => {
        setTourItems({
          status: 200,
          data: res.data
        })
      })
      .catch(error => {
        setTourItems({
          status: 400,
          data: error.message
        })
      })

    // Destinason Items
    axios.get("/destinason-items")
      .then(res => {
        setDestinasonItems({
          status: 200,
          data: res.data
        })
      })
      .catch(error => {
        setDestinasonItems({
          status: 400,
          data: error.message
        })
      })
  }, [])



  // Handle Search Items
  const handleSearchItems = (inputData) => {
    if (tourItems?.data && inputData?.length > 1) {
      const filteredItems = tourItems?.data.filter(dt => {
        if (dt.title.toLowerCase().includes(inputData)) {
          return dt
        } else {
          return null
        }
      })
      if (filteredItems.length) {
        setSearchResult(filteredItems)
      } else {
        setSearchResult(null)
      }
    } else {
      setSearchResult(null)
    }
  }

  // Handle Home Loading
  useEffect(() => {
    if (bannerItems && tourItems && destinasonItems) {
      setHomeLoading(false)
    } else {
      setHomeLoading(true)
    }
  }, [bannerItems, destinasonItems, tourItems])


  // console.log(user,
  //   bannerItems,
  //   tourItems,
  //   destinasonItems)

  return {
    user,
    bannerItems,
    tourItems,
    destinasonItems,
    error,
    homeLoading,
    googleSignIn,
    facebookSignIn,
    passwordSignUp,
    passwordSignIn,
    forgotPassword,
    searchResult,
    handleSearchItems,
    singOut
  }
}
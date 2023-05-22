"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  // signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, database } from "./firebase";
import { collection, setDoc, doc, getDocs, getDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  // console.log(user);
  // const collectRef = collection(database, "users");
  // // const q = query(collectRef, where(id, "==", user.uid));
  // // console.log(user.uid);

  //push to firebase
  async function handleSubmit(
    fullname,
    companyName,
    companyAddress,
    skill,
    permanentAddress,
    about
  ) {
    const docRef = await setDoc(doc(collectRef, user.uid), {
      fullname: fullname,
      companyName: companyName,
      companyAddress: companyAddress,
      skill: skill,
      permanentAddress: permanentAddress,
      about: about,
    });

    console.log("Document written with ID: ", docRef.id);
  }

  //.........  //pull from firebase

  // const [show, setShow] = useState("");

  // const getData = async () => {
  //   await getDocs(collection(database, "users", user.uid)).then((response) => {
  //     const getuser = response.docs.map((item) => {
  //       return { ...item.data(), id: item.id };
  //     });
  //     setShow(getuser);
  //   });
  // };

  // console.log(show);

  // getData();

  const [show, setShow] = useState("");

  async function getData() {
    const docRef = doc(database, "users", user.uid);
    const docSnap = await getDoc(docRef);
    setShow(docSnap.data());
    // console.log("Document data:", docSnap.data());
  }
  console.log(show);
  getData();

  // .................................
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account",
  });

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    // signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);

      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        // getData,
        show,
        handleSubmit,
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}

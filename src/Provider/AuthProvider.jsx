import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  console.log(user);
  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   User Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Facebook Login
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  // User Observer
  useEffect(() => {
    const Unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    };
    return () => {
      Unsubscribe();
    };
  }, []);
  //   User Log Out
  const LogOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    userLogin,
    googleLogin,
    facebookLogin,
    LogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

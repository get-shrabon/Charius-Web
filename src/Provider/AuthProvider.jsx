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
 const [loading, setLoading] = useState(true)
  // Create User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   User Login
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   Google Login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  // Facebook Login
  const facebookLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider);
  };
  // User Observer
  useEffect(() => {
    const Unsubscribe = () => {
        
      onAuthStateChanged(auth, (currentUser) => {
        setLoading(false);
        setUser(currentUser);
      });
    };
    return () => {
      Unsubscribe();
    };
  }, []);
  //   User Log Out
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    userLogin,
    googleLogin,
    facebookLogin,
    LogOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};

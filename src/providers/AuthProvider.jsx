import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const googelProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reloading, setReloading] = useState(null);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setReloading(0);
    });
    return () => {
      unsubcribe;
    };
  }, []);

  const withGoogle = () => {
    setReloading(1);
    return signInWithPopup(auth, googelProvider);
  };
  const withEmail = (email, password) => {
    setReloading(1);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const register = (email, password) => {
    setReloading(1);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const setProfile = (disName, url) => {
    return updateProfile(auth.currentUser, {
      displayName: disName,
      photoURL: url,
    });
  };
  const logOut = () => {
    setReloading(1);
    return signOut(auth);
  };

  const values = {
    user,
    reloading,
    withGoogle,
    withEmail,
    logOut,
    register,
    setProfile,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

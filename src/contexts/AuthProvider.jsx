import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUserWithEmailPass = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithEmailPass = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  };

  const updateUser= async(name)=>{
    return await updateProfile(auth.currentUser, {
      displayName: name
    })
  }

  const logOut= async()=>{
   return await signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        setUser(currentUser);
        setLoading(false);
      }
    })
    return ()=>{
      unsubscribe();
    }
  },[auth])

  const authInfo = { user,setUser, loading, createUserWithEmailPass,updateUser,logInWithEmailPass,logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

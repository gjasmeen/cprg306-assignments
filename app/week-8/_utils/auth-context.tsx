"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase";

interface AuthContextType {
  user: any| null;
  gitHubSignIn: () => Promise<UserCredential>;
  firebaseSignOut: () => Promise<void>;
}
 
const AuthContext = createContext<AuthContextType | null>(null);
 
export const AuthContextProvider = ({ children }: { children: React.ReactNode  }) => {
  const [user, setUser] = useState<any | null>(null);
 
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
 
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext) as AuthContextType;
};
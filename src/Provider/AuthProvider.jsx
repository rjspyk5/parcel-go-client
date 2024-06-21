import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useAxiosPublic } from "@/Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const axiosPublic = useAxiosPublic();

  const [loading, setloading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (curentUser) => {
      setuser(curentUser);
      if (curentUser) {
        axiosPublic.post("/jwt", { email: curentUser.email }).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            setloading(false);
          }
        });
      } else {
        localStorage.removeItem("token");
        setloading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const login = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  const updateInfo = (photo, name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  return (
    <AuthContext.Provider
      value={{
        createUser,
        login,
        logOut,
        googleLogin,
        user,
        loading,
        updateInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

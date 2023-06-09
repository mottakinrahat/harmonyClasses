import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const updateUserProfile = (name, image_url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image_url
        });
    }


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            //get and set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', {
                    email: currentUser.email
                })
                    .then(data => {
                        localStorage.setItem('access_token', data.data.token);
                    })
            }
            else {
                localStorage.removeItem('access_token');
            }

            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
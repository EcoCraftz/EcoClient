// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Hasan Ali' });
    const auth = getAuth(app);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currently loged in user', currentUser);
        })
        return () => {
            unSubscribe();
        }

    }, []);

    const authInfo = { user, createUser, signIn, logOut };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
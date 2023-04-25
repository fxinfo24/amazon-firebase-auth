import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseApp from '../../Firebase/Firebase.config';

// 1. Create and export context
export const AuthContext = createContext(null)

// 3. Create Auth
const auth = getAuth(firebaseApp)

const AuthProvider = ({children}) => {

    // 4. Create useState
    const {user, setUser} = useState(null)

    // Dummy data for the AuthInfo b4 useState method
    // const user = { displayName: 'Learner', email: 'learner@gmail.com'}

    // 5. Create context api object
        // 1. Create user context
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

        // 2. Login user context
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

        // 3. Log Out user context
    const logOutUser = () => {
        return signOut(auth)
    }

    // Context Data to share with
    const AuthInfo = {
        user,
        createUser,
        loginUser,
        logOutUser
    }


    return (
        // 2. Return created context api
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
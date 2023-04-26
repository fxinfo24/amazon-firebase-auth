import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import firebaseApp from '../../Firebase/Firebase.config';

// 1. Create and export context
export const AuthContext = createContext(null)

// 3. Create Auth
const auth = getAuth(firebaseApp)

const AuthProvider = ({children}) => {

    // 4. Create useState for user
    const [user, setUser] = useState(null)

    // Dummy data for the AuthInfo b4 useState method
    // const user = { displayName: 'Learner', email: 'learner@gmail.com'}

    // 5. Create context api object
        // 5.1. Create user context
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

        // 5.2. Login user context
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

        // 5.3. Log Out user context
    const logOutUser = () => {
        return signOut(auth)
    }

    /** Interesting: Observe user auth state changes */
    useEffect(() => {
        /**
         * as the following onAuthStateChange will non-stop observe auth state change status, we've to stop/unsubscribe that function after we get the auth-state of the user. So, we're going to keep the whole function in a variable named 'unsubscribe'  */

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('Auth state changed', (currentUser));
            setUser((currentUser));
            setLoader(false);
        });

        // Stop observing user auth state change
        return () => {
            unsubscribe();
        }
    } , [])

    // 6. Declare state for loaders
    const [loader, setLoader] = useState(true)
        // 6.2 Use setLoader as 'false' under setEffect (Ln 43)
    
    // Context Data as object to share with
    const AuthInfo = {
        user,
        createUser,
        loginUser,
        logOutUser,
        loader,
    }


    return (
            // 2. Return created context api
        <div>
            <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
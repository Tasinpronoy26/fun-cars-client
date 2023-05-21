import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [carDetails, setCarDetails] = useState(null);

    




    /* Sign Up CREATE ACCOUNT */

    const createUser = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }




    /*Log in*/

    const createLogIn = (email, password) => {

        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }




    /*Sign Out*/

    const logOut = () => {

        setLoading(true)
        return signOut(auth)
    }





    /*GOOGLE LOG IN*/

    const createUSerWithGoogle = (provider) => {

        setLoading(true)
        return signInWithPopup(auth, provider);
    }




    /*On Auth State*/

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUsers(currentUser);
            setLoading(false);

        })

        return () => unsubscribe();

    }, [])





    /*User Photo*/


    




    const info = {

        createUser,
        users,
        loading,
        createLogIn,
        createUSerWithGoogle,
        logOut,
        setCarDetails,
        carDetails
        
        

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
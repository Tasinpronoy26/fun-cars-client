import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState([]);


    
    
    /* Sign Up CREATE ACCOUNT */

    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password);
    }




    /*Log in*/
    
    const createLogIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }



    /*Sign Out*/

    const logOut = () => {

        return signOut(auth)
    }



    
    /*GOOGLE LOG IN*/

    const createUSerWithGoogle = (provider) => {

        return signInWithPopup(auth, provider) ;
    }
     


    /*On Auth State*/

    useEffect( () => {
       
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          
            setUsers(currentUser);

        })
        return unsubscribe();

    },[])



    
    const info = {

        createUser,
        users,
        createLogIn,
        createUSerWithGoogle,
        logOut

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
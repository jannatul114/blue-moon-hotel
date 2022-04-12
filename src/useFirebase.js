

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import auth from './firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});
    console.log(user);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>

        </div>
    );
};

export {
    useFirebase

};
import React, { useContext, useState } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";


export const AuthContext = useContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    // Sign-in with popup:
    // signInWithPopup(auth, provider)
    //     .then((result) => {
    //         const loggedUser = result.user;
    //         setUser(loggedUser);

    //         console.log(loggedUser);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })

    const authInfo = {
        user
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
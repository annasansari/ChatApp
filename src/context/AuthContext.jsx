import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext()

export const AuthContextprovider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        });
        return () => {
            unsub()
        }
    }, []);
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {!loading && children}
        </AuthContext.Provider>
    )
};
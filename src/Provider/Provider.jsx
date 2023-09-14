import { createContext,  useEffect, useState } from "react";

import {   onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const ProviderContext = createContext(null)
const Provider = ({children}) => {
    const [user ,setUser]= useState(null)
    

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);

           
            
        });

        return () => {
            return unsubscribe();
        }

    }, [])
   const Info = {
    user,
   }
  console.log(user);
    return (
       <ProviderContext.Provider value={Info}>
         {children}
       </ProviderContext.Provider>
    );
};

export default Provider;
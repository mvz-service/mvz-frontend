import { User } from "@firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export default function useGetUser() {
  
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          
            if(user) {
                setCurrentUser(user);
            }else{
                setCurrentUser(undefined);
            }

        });
        
        return () => unsubscribe();
    }, []);


    return currentUser;

}

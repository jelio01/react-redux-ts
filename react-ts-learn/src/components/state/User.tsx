import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    //const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {

       setUser({
        name : 'Max',
        email : 'max@mustermann.org',
       })
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
            {/*<div>User email is {user?.email}</div> "?" => To avoid object can possibly be null TS error*/}
        </div>
    )
}
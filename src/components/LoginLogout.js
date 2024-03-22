import React from "react";

import {useUser} from "@auth0/nextjs-auth0/client";

const loginlogout = () => {
    const{user,error,isLoading} = useUser()
    if(error) return <div>{error.message}</div>
    if(isLoading) return <div><h2>Loading... </h2></div>
    if(user) console.log(user);
    return (
        <>
        {user ? (
            <a href="/api/auth/logout">
                <h2>logout</h2>
            </a>
        ):(
            <a href="/api/auth/login">
                <h2>Login</h2>
            </a>
        )}
        </>
    );

}

export default loginlogout;
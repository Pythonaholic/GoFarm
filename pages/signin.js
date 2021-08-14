import React from 'react'
import SignupOrIn from '../component/sign'
import Footer from '../component/footer'
import { SettingsContext } from '../context/auth';
import { useContext } from 'react';

function Signin() {
    const context = useContext(SettingsContext);

    if (context.loggedIn){
        window.location.href = `/`;
    }
    return (
        <>
          <SignupOrIn />
          <Footer />  
        </>
    )
}

export default Signin

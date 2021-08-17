import React from 'react'
import Head from '../component/head';
import SignupOrIn from '../component/sign'
import Footer from '../component/footer'
import { SettingsContext } from '../context/auth';
import { useContext } from 'react';
import Nav from '../component/nav';
import Header from '../component/header';



function Signin() {
    const context = useContext(SettingsContext);

    if (context.loggedIn){
        window.location.href = `/`;
    }
    return (
        <div className="tex">

          <Header/>
      <Head/>

          <Nav /> 
          <SignupOrIn />
          <Footer />  
        </div>
    )
}

export default Signin

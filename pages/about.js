import React from 'react'
import Aboutus from '../component/aboutus'
import Nav from '../component/nav'
import Header from '../component/header'
import Footer from '../component/footer'
import Head from '../component/head';


function about() {
    return (
        <div className="tex">
            <Header />
            <Head />

            <Nav />
            < Aboutus />
            <Footer />
        </div>
    )
}

export default about


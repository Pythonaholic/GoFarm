import React from 'react'
import Form from '../component/Form'
import MyFarms from '../component/myFarms'
import Footer from '../component/footer'
import Nav from '../component/nav'
import Header from '../component/header';
import Head from '../component/head';


function AddFarm() {
    return (
        <div className="tex">

          <Header/>
      <Head/>

        < Nav />
            < MyFarms />
            <Form />
            <Footer />

        </div>
    )
}

export default AddFarm

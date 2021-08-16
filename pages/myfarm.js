import React from 'react'
import Form from '../component/Form'
import MyFarms from '../component/myFarms'
import Footer from '../component/footer'
import Nav from '../component/nav'
import Header from '../component/header';

function AddFarm() {
    return (
        <div className="tex">

          <Header/>
        < Nav />
            < MyFarms />
            <Form />
            <Footer />

        </div>
    )
}

export default AddFarm

import Head from '../component/head';
import { SettingsContext } from '../context/auth'; //1
import React, { useContext } from 'react'; //3
import { useState } from 'react';
import { FarmsContext } from '../context/farms'; //2
import { stringify } from 'postcss';
import Footer from '../component/footer';
import Main from '../component/main';
import Nav from '../component/nav';
import Main_component from '../component/main-comp';
import Header from '../component/header';
import Homecards from '../component/homecards';

export default function Home() {
  const context = useContext(SettingsContext); //4
  const farmsListContext = useContext(FarmsContext); //5

  return (
    <div className="tex">

      <Header/>
      <Head/>

      <Nav />
      <Main />
      <Homecards/>
      <Footer />
     </div>
  )
}

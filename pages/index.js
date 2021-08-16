import Head from 'next/head';
import { SettingsContext } from '../context/auth'; //1
import React, { useContext } from 'react'; //3
import { useState } from 'react';
import { FarmsContext } from '../context/farms'; //2
import { stringify } from 'postcss';
import Footer from '../component/footer';
<<<<<<< HEAD
import Slider from '../component/slider';
import { useEffect } from 'react';
import axios from 'axios';
=======
import Main from '../component/main';
import Nav from '../component/nav';
import Main_component from '../component/main-comp';

>>>>>>> ac27eeaaf0c92e472e222690bef73f876af1fe92
export default function Home() {
  const context = useContext(SettingsContext); //4
<<<<<<< HEAD
  const farmsListContext = useContext(FarmsContext) //5
  
  return(  
    <>
    {/* <Footer /> */}

    <Slider/>
    <Footer />
    </>
  );
=======
  const farmsListContext = useContext(FarmsContext); //5

  return (
    <div className="">
      <Main />
>>>>>>> ac27eeaaf0c92e472e222690bef73f876af1fe92

      <Footer />
    </div>
  );
}

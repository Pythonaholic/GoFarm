import Head from 'next/head';
import { SettingsContext } from '../context/auth'; //1
import React, { useContext } from 'react'; //3
import { useState } from 'react';
import { FarmsContext } from '../context/farms'; //2
import { stringify } from 'postcss';
import Footer from '../component/footer';
import Slider from '../component/slider';
import { useEffect } from 'react';
import axios from 'axios';
import Aboutus from '../component/aboutus';
export default function Home() {
  const context = useContext(SettingsContext); //4
  const farmsListContext = useContext(FarmsContext) //5
  
  return(  
    <>
    <Aboutus />
    </>
  );

      <Footer />
    // </div>
}

import Head from 'next/head';

import React from 'react'; //3

import AddFarm from '../component/addFarm';

import { stringify } from 'postcss';
import Footer from '../component/footer';


export default function Home() {
  
  return(
    < AddFarm />
    // <Footer />
  )
}
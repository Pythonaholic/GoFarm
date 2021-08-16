import Head from 'next/head';
import { SettingsContext } from '../context/auth'; //1
import React, { useContext } from 'react'; //3
import { useState } from 'react';
import { FarmsContext } from '../context/farms'; //2
import { stringify } from 'postcss';
import Footer from '../component/footer';
import DetailsPage from '../component/detailsPage';

export default function Search() {
  
  const context = useContext(SettingsContext); 
  const farmsListContext = useContext(FarmsContext) 
  
    
  return(  
      <div>
         <DetailsPage />
         <Footer />
      </div>
  );

}
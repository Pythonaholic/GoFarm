import Head from 'next/head';
import { SettingsContext } from '../context/auth'; //1
import React, { useContext } from 'react'; //3
import { useState } from 'react';
import { FarmsContext } from '../context/farms'; //2
import { stringify } from 'postcss';
import Footer from '../component/footer';
import SearchForm from '../component/searchForm';
import Nav from '../component/nav';
import Header from '../component/header';



export default function Search() {

  const context = useContext(SettingsContext);
  const farmsListContext = useContext(FarmsContext)


  return (
    <div className="tex">
      <Header />
      <Nav />
      <SearchForm />
      <Footer />
    </div>
  );

}
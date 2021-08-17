import React from 'react'
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import { useState } from 'react';
import { useEffect } from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
function Header() {
    const context = useContext(SettingsContext);
    const farmsListContext = useContext(FarmsContext)

    return (

        <div className="headerbar">
        
        <header>
            
            <a href="/"><img src="https://i.ibb.co/qD6F1Pp/white-s.png" width='120px' alt="" /></a>
            
        </header>
        </div>
      );
}

export default Header
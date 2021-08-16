import React from 'react'
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';


function Footer() {
    const context = useContext(SettingsContext);
    const farmsListContext = useContext(FarmsContext)

    return ('obada')

}



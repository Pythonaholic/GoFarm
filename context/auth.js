import React, { useState } from 'react';
import { Component } from 'react';
import { useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import axios from 'axios';
const API = 'https://gofarm-api.herokuapp.com/api/token/'; //process.env.API_SERVER;
const SECRET = 'SECRET_KEY'; //process.env.JWT_SECRET;


export const SettingsContext = React.createContext();
function SettingsProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});


  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);
  const validateToken = async token => {
    try {

      const id = await jwt.decode(token).user_id;
      const config = { headers: { Authorization: 'Bearer ' + token} };
      const userData = await axios.get(
        `https://gofarm-api.herokuapp.com/accounts/${id}`,
        config
      );

      setLoginState(true, token, userData.data);
    } catch (error) {
      setLoginState(false, null, {});
      console.log(`Token Validation Error ${error.message}`);
    }
  };
  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setToken(token);
    setUser(user);
    setloggedIn(loggedIn);
  };
  const login = async (username, password) => {

    try {
      const data = {
        username,
        password,
      };
    
      const response = await axios.post(API, data);
    
      validateToken(response.data.access);
    } catch (error) {
      console.error('Signin Error', error.message);
    }
  };
  const logout = () => {
    setLoginState(false, null, {});
  };
  const signup = async userInfo => {
    await axios.post('https://gofarm-api.herokuapp.com/accounts/signup/',userInfo)
  }
  const state = {
    loggedIn,
    setloggedIn,
    user,
    setUser,
    token,
    setToken,
    login,
    logout,
    signup,
  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
export default SettingsProvider;

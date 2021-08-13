import React, { useState } from 'react';
import { Component } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
import { FALSE } from 'node-sass';
import axios from 'axios';
// dotenv.config();
const API = 'https://gofarm-api.herokuapp.com/api/token/'; //process.env.API_SERVER;
const SECRET = 'SECRET_KEY'; //process.env.JWT_SECRET;
export const LoginContext = React.createContext();

export const SettingsContext = React.createContext();
function SettingsProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const state = {
    loggedIn,
    setloggedIn,
    user,
    setUser,
    token,
    setToken,
    login,
    logout,
  };

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);
  validateToken = async token => {
    try {
      // const user = jwt.verify(token,SECRET);
      const id = await jwt.decode(token).user_id;
      const config = { headers: { Authorization: 'Bearer ' + token } };
      const userData = await axios.get(
        `https://gofarm-api.herokuapp.com/accounts/${id}`,
        config
      );
      // console.table(user);
      setLoginState(true, token, userData);
    } catch (error) {
      setLoginState(false, null, {});
      console.log(`Token Validation Error ${error.message}`);
    }
  };
  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setToken(token);
    setUser(user);
    setloggedIn(loggedIn);
  };
  login = async (username, password) => {
    try {
      const data = {
        username,
        password,
      };
      const response = await axios.post(API, data);
      validateToken(response.body.access);
    } catch (error) {
      console.error('Signin Error', error.message);
    }
  };
  logout = () => {
    setLoginState(false, null, {});
  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}
export default SettingsProvider;

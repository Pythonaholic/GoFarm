import React from 'react'
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { If, Else, Then } from 'react-if';

function Footer() {
  const context = useContext(SettingsContext);
  const farmsListContext = useContext(FarmsContext)

  return (
    <div className='footer'>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
      <section className="footer-section">
        <div className="footer">
          <div className="social">
            <a href="/"><img src="https://i.ibb.co/qD6F1Pp/white-s.png" className='photo' alt="" /><br></br></a>

            <ul>
              <li>
                <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter-square" /></a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram" /></a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-square" /></a>

              </li>
              <li>
                <a href="https://github.com/" target="_blank"><i className="fab fa-github" /></a>

              </li>
              <li>
                <a href="https://web.facebook.com" target="_blank"><i className="fab fa-facebook-messenger" /></a>

              </li>
              <li>
                <a href="https://www.google.jo/" target="_blank"><i className="fab fa-google-drive" /></a>

              </li>
            </ul>

          </div>
          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/search">Search for farm</a>
              </li>
              <If condition={context.loggedIn}>
                <Then>
                  <li>
                    <a href="/myfarm">My Farm</a>
                  </li>

                </Then>
              </If>
              <li>
                <a href="/about">About Us</a>
              </li>

            </ul>
          </div>
        <If condition={!context.loggedIn}> 
              <Then>
          <div className="email-signup">
            <h4>Sign up</h4>
            <form id="form" action="/signin">
              <label>Sign up and stay up-to-date with new <br />products, tips, news and recepies.</label><br />
              <div className="section-wrapper">

                <button id="submit" className="btn-ghost" type="submit" defaultValue="Sign up">Sign up</button>
              </div>
            </form>
          </div>
          </Then>
          <Else>
          <div className="email-signup">

          <h4>Add Farm</h4>
            <form id="form" action="/myfarm">
              <label>Be our partner and add your<br />farm to make more profit.</label><br />
              <div className="section-wrapper">

                <button id="submit" className="btn-ghost" type="submit" defaultValue="Add Farm">Add</button>
              </div>
            </form>
          </div>
            
          </Else>
          </If>
        </div>
        <p className="footer-credit">Copyright © 2021 Designed by GoFarm Team. All rights reserved. Find Your Best Farm.</p>
      </section>

    </div>
  );
}

export default Footer

import React from 'react'
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';


function Footer() {
    const context = useContext(SettingsContext);
    const farmsListContext = useContext(FarmsContext)

    return (
        <div className = 'footer'>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
          <script src="https://kit.fontawesome.com/752510c1eb.js" crossorigin="anonymous"></script>
          <title>GoFarm</title>
          <section className="footer-section">
            <div className="footer">
              <div className="social">
                
                <a href="/component/home.js"><i className="fas fa-home logo" /><i class="fas fa-tree "></i>GoFarm</a>
                
                
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
                </ul>
              </div>
              <div className="footer-links">

              
                
              
                <p><br></br>Find The Best Farm .</p>
                
 
                
               

              </div>
              <div className="email-signup">
                <h4>Subscribe</h4>
                <form id="form" action="https://www.freecodecamp.com/email-submit">
                  <label>Sign up and stay up-to-date with new <br />locations, tips, news and Offers.</label><br />
                  <div className="section-wrapper">
                    <input id="email" type="email" name="email" placeholder="Enter email..." required />
                    <input id="submit" className="btn-ghost" type="submit" defaultValue="Sign up" />
                  </div>
                </form> 
              </div>
            </div>
            <p className="footer-credit">Copyright © 2021 Designed by Gelso Designs and modified by GoFarm Team. All rights reserved. Website content taken from <a href="http://ancientnutrition.com/" target="_blank">Ancient Nutrition</a>.</p>
          </section>
        </div>
      );
}

export default Footer

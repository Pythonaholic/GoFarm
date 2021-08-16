import React from 'react';
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';

function Footer() {
  const context = useContext(SettingsContext);
  const farmsListContext = useContext(FarmsContext);

  return (
    <div className="footer">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
        crossOrigin="anonymous"
      />
      <title>GoFarm</title>
      <section className="footer-section">
        <div className="footer">
          <div className="social">
            <a href="#header">
              <i className="fas fa-leaf logo" />
              {/* <img src="https://i.ibb.co/FY7tWHf/BEST2.png"></img> */}
            </a>
            <ul>
              <li>
                <a href="https://twitter.com/ancientnutr" target="_blank">
                  <i className="fab fa-twitter-square" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/explore/tags/modernsuperfood/"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ancientnutrition/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#demo-video">Video</a>
              </li>
              <li>
                <a href="#shopping-cart">Search</a>
              </li>
            </ul>
          </div>
          <div className="email-signup">
            <h4>Subscribe</h4>
            <form id="form" action="https://www.freecodecamp.com/email-submit">
              <label>
                Sign up and stay up-to-date with new <br />
                products, tips, news and offers.
              </label>
              <br />
              <div className="section-wrapper">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email..."
                  required
                />
                <input
                  id="submit"
                  className="btn-ghost"
                  type="submit"
                  defaultValue="Sign up"
                />
              </div>
            </form>
          </div>
        </div>
        <p className="footer-credit">
          {' '}
          <a href="http://ancientnutrition.com/" target="_blank">
            {' '}
          </a>
        </p>
      </section>
    </div>
  );
}

export default Footer;

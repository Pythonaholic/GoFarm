import React from 'react';
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { useEffect } from 'react';
import Nav from './nav';
import Main_component from './main-comp';
import Slider from './slider_main';
import Footer from './footer';
function Main() {
  // selected elements
  useEffect(() => {
    // selected elements
    var navTrigger = document.getElementById('nav-trigger');
    var nav = document.getElementById('nav');
    var header = document.getElementById('header');
    var heading = document.getElementById('heading');
    var labels = document.getElementsByClassName('nav-label');

    // sizing
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var fontSize = windowHeight * 0.1;
    var headingSize = windowWidth * 0.1;

    // Event Listening
    // navTrigger.addEventListener('click', navToggle);
    window.addEventListener('resize', resize);

    function resize() {
      windowHeight = window.innerHeight;
      windowWidth = window.innerWidth;
      fontSize = windowHeight * 0.1;
      headingSize = windowWidth * 0.1;
      if (headingSize > windowHeight * 0.3) headingSize = windowHeight * 0.3;

      for (var i = 0; i < labels.length; i++) {
        labels[i].style.fontSize = fontSize + 'px';
        labels[i].style.height = fontSize + 'px';
        labels[i].style.marginTop = '-' + fontSize * 0.6 + 'px';
      }

      header.style.height = windowHeight + 'px';
      heading.style.fontSize = headingSize + 'px';
      heading.style.height = headingSize + 'px';
      heading.style.marginTop = '-' + headingSize * 0.6 + 'px';
    }

    window.onload = resize;
  }, []);
  return (
    <div>
      <Nav />

      <div className="nav-component">
        <section id="header" className="header">
          <h1 id="heading">GoFarm</h1>
        </section>
        <section className="content">
          <p>
            We are going aerial pingpong no dramas as cross as a mickey mouse
            mate. Flat out like a bities no dramas as cross as a wobbly. Mad as
            a bush bash as dry as a kindie. As stands out like ford also grab us
            a chuck a sickie. Built like a moolah bloody khe sanh. Get a dog up
            ya chokkie how as cunning as a garbo. Lets get some show pony flamin
            lets throw a roadie. Come a sheila to come a cab sav.
          </p>

          <p></p>
          <p className="credit">
            {/* This placeholder text is from{' '} */}
            <a href=""></a>
          </p>
        </section>
      </div>
      <div>
        <Main_component />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default Main;

import React from 'react';
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { useEffect } from 'react';

function Nav() {
  const context = useContext(SettingsContext);
  const farmsListContext = useContext(FarmsContext);
  useEffect(() => {
    // selected elements
    var navTrigger = document.getElementById('nav-trigger');
    var nav = document.getElementById('nav');
    var labels = document.getElementsByClassName('nav-label');

    // sizing
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var fontSize = windowHeight * 0.1;
    var headingSize = windowWidth * 0.1;

    // Event Listening
    navTrigger.addEventListener('click', navToggle);
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
    }

    function navToggle(e) {
      var closed = navTrigger.className.indexOf('close') > 0;
      if (closed) {
        navTrigger.className = 'nav-trigger open';
        nav.className = 'out';
      } else {
        navTrigger.className = 'nav-trigger close';
        nav.className = 'in';
      }
    }

    window.onload = resize;
  }, []);
  return (
    <div className="nav-component">
      <div className="header-main">
        <div id="nav-trigger" className="nav-trigger open">
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
        <nav id="nav" className="out">
          <ul>
            <li>
              <span className="nav-label">Home</span>
            </li>
            <li>
              <span className="nav-label">About</span>
            </li>
            <li>
              <span className="nav-label">add Farm</span>
            </li>
            <li>
              <span className="nav-label">Blog</span>
            </li>
            <li>
              <span className="nav-label">Contact</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;

import React from 'react';
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { useEffect } from 'react';
import Nav from './nav';
import Main_component from './main-comp';
import Slider from './slider_main';
import Video from './video_main';
import Footer from './footer';
function Main() {
  return (
    <div>

{/* <Slider /> */}

<Main_component />


      <div className="nav-component">
        <section className="content">
          <h1 className="styling ">Go-Farm</h1>
          <p className="styling2 ">
            Because We Care About Entertainment We Will Let You Discover Nearby
            Farms , With One Click On Our Web-App You Can Reach Out All Farms In
            Jordan , To Enjoy With Your Family and lovely Moments , Gathering ,
            Watching Sunset with Sipping A Cup Of Coffee .<br></br>
            And If You are Looking For Place For Your Special Day , You Are In
            The Right Place So welcome Here .
          </p>
        </section>
      </div>
      <div>
      </div>
      <Video />
      <div className="nav-component">
        <section className="content">
          <h1 className="styling ">Our Vision</h1>
          <p className="styling2 ">
            • To achieve sustainable growth to add more places, we have
            established a vision with clear goals:
            <br></br>
            •Profit: Maximizing return to share owners while being mindful of
            our overall responsibilities.
            <br></br>• People: Being able to Find a great place where people are
            inspired to be the best they can be.
            <br></br>
            •Portfolio: Bringing to the world a portfolio of local farms that
            anticipate and satisfy peoples; desires and needs.
          </p>
        </section>
      </div>

      <div>
      </div>
    </div>
  );
}

export default Main;

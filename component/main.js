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


<Video />



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
            <br /> <br />
            <strong>So, why should you rent a farm?</strong> 
            <br />
            Renting a farm would provide you with a space to do various activities,
            maybe if you are newly married and you're looking for a place to spend your honeymoon,
            or just you want to go and rest for a couple of days in a non-stress environment, farms have all of that 
            and more, you can relax, maybe go swimming, go explore the nature, set up a camp fire, or just BBQ. 
            farms are suitable for families vacations and other social activities. So, what are you waiting for, start
            searching for farms and rent one now. 

          </p>
        </section>
      </div>
      <div>
      </div>
<Main_component />

      <div className="nav-component">
        <section className="content">
          <h1 className="styling ">Our Vision</h1>
          <p className="styling2 ">
            believing in the effects of relaxing and taking a vacation, 
            and wanting to give back to society by publishing farms all around jordan, 
            we aim to achieve sustainable growth to add more places, we have
            established a vision with clear goals:
            <br></br> <br></br>
            👉 Profit: Maximizing return to share owners while being mindful of
            our overall responsibilities.
            <br></br> <br></br>
            👉 People: Being able to Find a great place where people are
            inspired to be the best they can be.
            <br></br> <br></br>
            👉 Portfolio: Bringing to the world a portfolio of local farms that
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

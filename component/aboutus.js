import React from 'react'
import $ from 'jquery'
import { useEffect } from 'react'

function Aboutus() {
    useEffect(()=>{
        $(function() {
            $('.material-card > .mc-btn-action').click(function () {
                var card = $(this).parent('.material-card');
                var icon = $(this).children('i');
                icon.addClass('fa-spin-fast');
    
                if (card.hasClass('mc-active')) {
                    card.removeClass('mc-active');
    
                    window.setTimeout(function() {
                        icon
                            .removeClass('fa-arrow-left')
                            .removeClass('fa-spin-fast')
                            .addClass('fa-bars');
    
                    }, 800);
                } else {
                    card.addClass('mc-active');
    
                    window.setTimeout(function() {
                        icon
                            .removeClass('fa-bars')
                            .removeClass('fa-spin-fast')
                            .addClass('fa-arrow-left');
    
                    }, 800);
                }
            });
        });
    },[])
    return (
        <div className='about'>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css'></link>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'></link>
        <div className='aboutus'>
             <main style={{marginTop: '50px'}}>
        <section className="container">
          <div className="page-header" style={{border: 'none'}}>
            <h1>About GoFarm</h1>
          </div>
          <p style={{alignContent: 'center', color: 'white'}} className='font-serif text-3xl font-family:Times' id="par">
          Because We Care About Entertainment We Will Let You Discover Nearby
            Farms , With One Click On Our Web-App You Can Reach Out All Farms In
            Jordan , To Enjoy With Your Family and lovely Moments , Gathering ,
            Watching Sunset with Sipping A Cup Of Coffee .<br></br>
            And If You are Looking For Place For Your Special Day , You Are In
            The Right Place So welcome Here .
            <br />
          </p>
          <br />
          <h1>Developers</h1>
          <br />
          <br />
          <div className="row row1 active-with-click">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Red">
                <h2>
                  <span>Abdalrahman Samara</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Software Developer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="https://ca.slack-edge.com/TNGRRLUMA-U01LPD8EL1F-f36646ac9eef-512" />
                  </div>
                  <div className="mc-description">
                    "Go Big or Go Home"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">

                </div>
              </article>
            </div> 
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Pink">
                <h2>
                  <span>Ahmad Zatar</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Software Developer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="https://ca.slack-edge.com/TNGRRLUMA-U01MKGCNEA2-edaae29b5141-512" />
                  </div>
                  <div className="mc-description">
                    "when you feel like quitting think about why you started"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">

                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Purple">
                <h2>
                  <span>Hamza Qaoush
                  </span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Software Developer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="https://ca.slack-edge.com/TNGRRLUMA-U01MS9S32UA-03a933c6a626-512" />
                  </div>
                  <div className="mc-description">
                    "Sail in your dreams and don't look to waves crash"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">

                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Deep-Purple">
                <h2>
                  <span>Obada Alhawjreh</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Software Developer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="https://ca.slack-edge.com/TNGRRLUMA-U01N4U8BTQ9-cefe709b3680-512" />
                  </div>
                  <div className="mc-description">
                    "Whoever goes with his ship in the sea of life without knowing which port he is heading to, no wind is favorable for him"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">

                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Deep-Purple">
                <h2>
                  <span>Doa'a Obeidat</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Software Developer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="https://ca.slack-edge.com/TNGRRLUMA-U01M0KK0VCG-641524926a59-512" />
                  </div>
                  <div className="mc-description">
                    "Stay safe and Stay Awesome"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">

                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
        </div>
        </div>
    )
}

export default Aboutus
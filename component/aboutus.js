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
            <h1>About Foodies</h1>
          </div>
          <p style={{alignContent: 'center', color: '#37474F'}} id="par">
            Foodies is a service website, exist to provide proper recipes for food from all over the world.
            if you are following a diet and need to cut down on carbs, we got you, if you have intolerances,
            we got you, if you have only 20 minutes to prepare a proper dish, guess what, we got you, foodies
            have all of that and much more!, you can also shear your recipes with the world and see what people think of it ..
            <br />
          </p>
          <br />
          <h1>Chef's</h1>
          <br />
          <br />
          <div className="row row1 active-with-click">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Red">
                <h2>
                  <span>Ahmad AL-maali</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Civil Engineer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="./img/ahmad.jpg" />
                  </div>
                  <div className="mc-description">
                    "If you aim, aim at the star"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">
                  <h4>
                    Social
                  </h4>
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100010248409389" className="fa fa-fw fa-facebook" />
                  <a target="_blank" href="https://twitter.com/ahmad_maali95?s=09" className="fa fa-fw fa-twitter" />
                  <a target="_blank" href="https://www.linkedin.com/in/ahmad-maali-780403125" className="fa fa-fw fa-linkedin" />
                  <a className="fa fa-fw fa-google-plus" />
                </div>
              </article>
            </div> 
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Pink">
                <h2>
                  <span>Suhaib Emad</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Mechanical Engineer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="./img/suhaib.jpg" />
                  </div>
                  <div className="mc-description">
                    "when you feel like quitting think about why you started"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">
                  <h4>
                    Social
                  </h4>
                  <a target="_blank" href="https://www.facebook.com/suhaib.emad.1" className="fa fa-fw fa-facebook" />
                  <a className="fa fa-fw fa-twitter" />
                  <a target="_blank" href="https://www.linkedin.com/in/suhaib-emad-253aa61b6/" className="fa fa-fw fa-linkedin" />
                  <a className="fa fa-fw fa-google-plus" />
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Purple">
                <h2>
                  <span>Abdalrahman Samara
                  </span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Mechanical Engineer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="./img/abdulrahan.jpg" />
                  </div>
                  <div className="mc-description">
                    "Don't monkey my sky"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">
                  <h4>
                    Social
                  </h4>
                  <a target="_blank" href="https://web.facebook.com/abood.samara.585" className="fa fa-fw fa-facebook" />
                  <a className="fa fa-fw fa-twitter" />
                  <a target="_blank" href="www.linkedin.com/in/abdalrahman-samara585" className="fa fa-fw fa-linkedin" />
                  <a className="fa fa-fw fa-google-plus" />
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Deep-Purple">
                <h2>
                  <span>Baraa Jahmani</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Management Information System
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="./img/bebo.jpg" />
                  </div>
                  <div className="mc-description">
                    "Whoever goes with his ship in the sea of life without knowing which port he is heading to, no wind is favorable for him"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">
                  <h4>
                    Social
                  </h4>
                  <a target="_blank" href="https://web.facebook.com/lilian.rami.58/" className="fa fa-fw fa-facebook" />
                  <a className="fa fa-fw fa-twitter" />
                  <a target="_blank" href="https://www.linkedin.com/in/baraa-jahmani-2926951b5/" className="fa fa-fw fa-linkedin" />
                  <a className="fa fa-fw fa-google-plus" />
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <article className="material-card Deep-Purple">
                <h2>
                  <span>Bayan AlKhatib</span>
                  <strong>
                    <i className="fa fa-fw fa-star" />
                    Chemical Engineer
                  </strong>
                </h2>
                <div className="mc-content">
                  <div className="img-container">
                    <img className="img-responsive" src="./img/bayan.jpg" />
                  </div>
                  <div className="mc-description">
                    "We can always begin again"
                  </div>
                </div>
                <a className="mc-btn-action">
                  <i className="fa fa-bars" />
                </a>
                <div className="mc-footer">
                  <h4>
                    Social
                  </h4>
                  <a target="_blank" href="https://www.facebook.com/psofrose" className="fa fa-fw fa-facebook" />
                  <a className="fa fa-fw fa-twitter" />
                  <a target="_blank" href="https://www.linkedin.com/in/bayan-alkhatib" className="fa fa-fw fa-linkedin" />
                  <a className="fa fa-fw fa-google-plus" />
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

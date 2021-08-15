import React from 'react'
import { SettingsContext } from '../context/auth'; //1
import  { useContext } from 'react'; //3
import { FarmsContext } from '../context/farms'; //2
import { useState } from 'react';
import { useEffect } from 'react';
import $ from 'jquery';


function SignupOrIn() {
    const context = useContext(SettingsContext); //4
    const farmsListContext = useContext(FarmsContext) //5

    const signUpHandler = (e) =>{
        e.preventDefault()
        let signUpInfo = {
            username: e.target.username.value,
            password: e.target.password.value,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            phone_number: e.target.phone.value,
        }
        context.signup(signUpInfo)    
    }
    const signInHandler = (e) =>{
        e.preventDefault()
        let signInInfo = {
            username: e.target.username.value,
            password: e.target.password.value,
        }   
        console.log(signInInfo)
        context.login(signInInfo.username,signInInfo.password)
    }

    useEffect(() => {
        $("main").addClass("pre-enter").removeClass("with-hover");
    setTimeout(function(){
        $("main").addClass("on-enter");
    }, 500);
    setTimeout(function(){
        $("main").removeClass("pre-enter on-enter");
        setTimeout(function(){
            $("main").addClass("with-hover");
        }, 50);
    }, 3000);
    
    $("h1 a").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        if ($(this).is("#link-signup")) {
            $("#form-login").removeClass("active");
            $("#intro-login").removeClass("active");
            setTimeout(function(){
                $("#form-signup").addClass("active");
                $("#intro-signup").addClass("active");
            }, 50);
        } else {
            $("#form-signup").removeClass("active");
            $("#intro-signup").removeClass("active");
            setTimeout(function(){
                $("#form-login").addClass("active");
                $("#intro-login").addClass("active");
            }, 50);
        }
    });



      },)
    
      
      
      return (
          <div className='signup'>
    
    <body className='body'>
    
    <main id="index" className="with-hover mains">
        <aside>
            <div></div>
            <svg viewBox="0 0 100 100">
                <g stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M65.892702,73 C70.3362168,68.5836139 73.0845878,62.4824333 73.0845878,55.7432553 C73.0845878,49.0040774 70.3362168,42.9028968 65.892702,38.4865107 C61.4491873,34.0701246 55.3105288,31.338533 48.5299539,31.338533 C41.749379,31.338533 35.6107205,34.0701246 31.1672058,38.4865107 C26.723691,42.9028968 23.97532,49.0040774 23.97532,55.7432553 C23.97532,62.4824333 26.723691,68.5836139 31.1672058,73 C31.1672058,73 65.892702,73 65.892702,73 Z M73.0594097,62.3985471 C76.4680437,61.2200182 88.5607213,56.1793944 85.5117743,37.8371245 L81.6924976,37.9360303 C80.8526284,43.134546 77.152648,46.6051883 72.4845099,46.6051883 M24.4062209,60.319036 C24.3904842,60.3191058 24.3747393,60.3191408 24.3589862,60.3191408 C18.6378761,60.3191408 14,55.70958 14,50.0233985 C14,44.3372171 18.6378761,39.7276563 24.3589862,39.7276563 C26.0569266,39.7276563 27.6594543,40.133673 29.0736464,40.8533508 M65.8946819,38.4867877 L31.1652244,38.4844448 M37.6782363,44.9577899 C34.9010396,47.7180312 33.1833077,51.5312691 33.1833077,55.7432553 C33.1833077,59.9552416 34.9010396,63.7684794 37.6782363,66.5287208 M45.4606247,29.0505903 L51.5992831,29.0505903 M48.5299539,26 L48.5299539,31.338533"></path>
                </g>
            </svg>
            <div>
                <p id="intro-signup" className="active"><strong>Cup o Tea</strong> is even better with&nbsp;an&nbsp;account.</p>
                <p id="intro-login">Welcome back to<br/><strong>Cup o Tea</strong>!</p>
            </div>
        </aside>
        <section>
            <h1>
                <a id="link-signup" className="active">Sign Up</a>
                <a id="link-login">Log In</a>
            </h1>
            <form id="form-signup" className="active" onSubmit = {signUpHandler}>
                <div>
                    <fieldset>
                        <div>
                            <label htmlFor="name">First Name</label>
                            <input id="name" type="text" name='first_name' placeholder="Marcia" required />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <label htmlFor="name">Last Name</label>
                            <input id="name" type="text" name='last_name' placeholder="Polo" required />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <label htmlFor="name">Phone Number</label>
                            <input id="name" type="phone" name='phone' placeholder="Polo" required/>
                        </div>
                    </fieldset>

                </div>
                <div>
                <fieldset>
                        <div>
                            <label htmlFor="name">Username</label>
                            <input id="name" type="text" name='username' placeholder="Marcia Polo" required/>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name='email' placeholder="marcia@polo.com" required />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name='password' placeholder="••••••••" required />
                        </div>
                    </fieldset>
                </div>
                
                <input type="submit" value="Sign Up"/>
            </form>
            <form id="form-login" onSubmit = {signInHandler}>
                <div className='sss'>
                    <fieldset>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name='username' placeholder="marcia@polo.com" required/>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name='password' placeholder="••••••••" required/>
                        </div>
                    </fieldset>
                </div>
                
                <input type="submit" value="Log In"/>
            </form>
        </section>
    </main>
    
    
    </body>
    
    
        </div>
        )
      }
export default SignupOrIn

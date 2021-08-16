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



      },[])
    
      
      
      return (
          <div className='signup'>
    
    <body className='body'>
    
    <main id="index" className="with-hover mains">
        <aside>
            <div></div>

            <img src="https://i.ibb.co/bsP31TV/black-s.png" alt="" />
            
            {/* <svg viewBox="0 0 100 100">
                <g stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path src = "https://i.ibb.co/bsP31TV/black-s.png"></path>
                </g>
            </svg> */}
            <div>
                <br />

                <p id="intro-signup" className="active"><strong>GoFarm</strong> is even better with&nbsp;an&nbsp;account.</p>
                
                <p id="intro-login">Welcome back to<br/><strong>GoFarm</strong>!</p>
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
                            <input id="password" type="password" name='password' placeholder="••••••••" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                        </div>
                    </fieldset>
                </div>

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

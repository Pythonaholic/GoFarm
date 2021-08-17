import React from 'react';
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
// import { useEffect } from 'react';
import { If, Else, Then } from 'react-if';

function Nav() {
    const context = useContext(SettingsContext);
    const farmsListContext = useContext(FarmsContext);
    function loginhandler(e){
        e.preventDefault();
        
          window.location.href = `/signin`;
        
      }
      function logouthandler(e){
        e.preventDefault();
        context.logout()
        
        setTimeout(() => {
    
          window.location.href = `/`;
    
      }, 500);
        
      }

      if(context.loggedIn){
    return (
        <div className='nav'>

        <label htmlFor="menu-control" className="hamburger">
          <i className="hamburger__icon" />
          <i className="hamburger__icon" />
          <i className="hamburger__icon" />
        </label>
        <input type="checkbox" id="menu-control" className="menu-control" />
        <aside className="sidebar">
          <nav className="sidebar__menu">
              <a>
            <form onSubmit={logouthandler}><button>Logout</button></form></a>
            <a href='/'>Home</a>
            <a href='/search'>Search</a>
            <a href = '/myfarm'>My Farms</a>
            <a href = '/about'>About us</a>

          </nav>
          <label htmlFor="menu-control" className="sidebar__close" />
        </aside>

        </div>
    )
}
else{
    return (
        <div className='nav'>

        <label htmlFor="menu-control" className="hamburger">
          <i className="hamburger__icon" />
          <i className="hamburger__icon" />
          <i className="hamburger__icon" />
        </label>
        <input type="checkbox" id="menu-control" className="menu-control" />
        <aside className="sidebar">
          <nav className="sidebar__menu">
            <a><form onSubmit={loginhandler}><button>Login</button></form></a>
            <a href='/'>Home</a>
            <a href='/search'>Search</a>
            <a href = '/about'>About us</a>
          </nav>
          <label htmlFor="menu-control" className="sidebar__close" />
        </aside>

        </div>
    )
}
}

export default Nav
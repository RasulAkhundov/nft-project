import React from 'react';
import { useState } from 'react';
import Logo from '../assets/logo.png';

// let toggle = false;

function Header(e) {

  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const menuToggle = () => {
    if(menu === false) {
      return setMenu(true);
    } else {
      return setMenu(false);
    }
  }

  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <header className={header ? 'header header-active' : 'header'}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="header-nav">
            <div className="burger-toggle">
              <label htmlFor="check-toggle">
                <input type="checkbox" id='check-toggle' onClick={menuToggle}/>
                <div className="line"></div>
              </label>
            </div>
            <ul className='navigation'>
              <a><li>Home</li></a>
              <a><li>Blog</li></a>
              <a><li>Coming Soon!</li></a>
              <a><li>404</li></a>
              <a><li>Contact</li></a>
            </ul>
            <div className="discord-btn">
              <button type='button'>Join Our Discord</button>
            </div>
          </div>
        </div>
        <div className={menu ? 'navbar-collapse menu-open' : 'navbar-collapse'} id='navbar-collapse'>
          <ul className='navigation'>
            <a><li>Home</li></a>
            <a><li>Blog</li></a>
            <a><li>Coming Soon!</li></a>
            <a><li>404</li></a>
            <a><li>Contact</li></a>
          </ul>
          <div className="discord-btn d-flex justify-content-center m-0">
            <button type='button'>Join Our Discord</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
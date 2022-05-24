import React from 'react';
import logo from './logo2.png'
// import style from './Header.module.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <a href="index.html" className='logo'>
          <img src={logo} alt="Pizza logo"/>
        </a>
      </div>
      <div className='header__cart'>
        <a href="cart.html">0 $</a>
      </div>
      <div className='header__user'>
        <a href="#" className='header__login'><span>Sign in</span></a>
      </div>
    </header>
);
};

export default Header;

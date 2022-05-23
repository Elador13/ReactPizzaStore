import React from 'react';
import logo from './logo.png'
import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <a href="index.html" className={style.logo}>
          <img src={logo} alt="Pizza logo"/>
        </a>
      </div>
      <div className={style.header__cart}>
        <a href="cart.html">0 $</a>
      </div>
      <div className={style.header__user}>
        <a href="#" className={style.header__login}><span>Войти</span></a>
      </div>
    </header>
);
};

export default Header;

import React, { useState, ReactNode, MouseEventHandler, useEffect, useRef } from 'react';

import { MenuBurger, Cross, Bell, Globe, Search } from '../Icons';

import ThemeToggle from '../Theme/themeToggle';
import Title from '../Assets/images/svg/thebettermint/boilerplate.svg';
import Logo from '../Assets/images/svg/thebettermint/logo.svg';

import style from './index.module.scss';

import { useStoreContext } from '../../context/store';
import Panel from '../Panel';

interface Props {
  theme?: string;
  invert?: boolean;
  home?: any;
  about?: any;
  contact?: any;
  join?: any;
}

const Header = ({ theme, invert, home, about, contact, join }: Props) => {
  const hamRef = useRef<HTMLDivElement>(null);
  const storeContext = useStoreContext();

  const [isDropdown, toggleDropdown] = useState<Boolean>(false);

  const dropdown = () => {
    if (!isDropdown) return null;
    if (hamRef.current) hamRef.current.style.zIndex = '9';
    return <Panel close={() => toggleDropdown(!isDropdown)} />;
  };

  const handleMenuClick = () => toggleDropdown(!isDropdown);

  return (
    <>
      <div className={`${style.header}`}></div>

      <div className={style.headerLeft}>
        <Title
          className={style.title}
          fill={storeContext.theme[0] === 'dark' ? 'white' : null}
          width={'90%'}
          height={42}
        />
        <Logo className={style.logo} width={'90%'} height={42} />
      </div>

      <div className={`${style.headerCenter} ${theme ? style[theme] : null}`}></div>

      <div className={style.headerRight}>
        <div className={style.items}>
          <div onClick={() => home.current.scrollIntoView()}>home</div>
          <div onClick={() => about.current.scrollIntoView()}>about</div>
          <div onClick={() => join.current.scrollIntoView()}>join</div>
          <div onClick={() => contact.current.scrollIntoView()}>contact</div>
          <ThemeToggle />
        </div>
        <div className={style.ham} onClick={handleMenuClick}>
          <MenuBurger fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={24} />
        </div>
      </div>
      {dropdown()}
    </>
  );
};

export default Header;

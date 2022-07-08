import React, { useState, ReactNode, MouseEventHandler, useEffect, useRef } from 'react';

import { MenuBurger, Cross, Bell, Globe, Search } from '../Icons';

import ThemeToggle from '../Theme/themeToggle';
import Title from '../Assets/images/svg/thebettermint/boilerplate.svg';
import Logo from '../Assets/images/svg/thebettermint/logo.svg';

import style from './index.module.scss';

import { useStoreContext } from '../../context/store';

interface Props {
  theme?: string;
  close: () => void;
}

const Panel = ({ theme, close }: Props) => {
  const handleNavClick = (page: string) => {
    close();
  };

  return (
    <>
      <div className={`${style.panel}`}>
        <div className={style.close} onClick={() => close()}>
          close
        </div>
        <div className={style.items}>
          <div>home</div>
          <div>about</div>
          <div>join</div>
          <div>contact</div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Panel;

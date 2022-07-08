import React, { useState, useRef, useEffect } from 'react';

import { MenuBurger } from '../Icons';

import ThemeToggle from '../Theme/themeToggle';
import Title from '../Assets/images/svg/thebettermint/boilerplate.svg';
import Logo from '../Assets/images/svg/thebettermint/logo.svg';

import style from './index.module.scss';

import { useStoreContext } from '../../context/store';
import Panel from '../Panel';

interface Props {
  invert?: boolean;
  home?: any;
  services?: any;
  about?: any;
  contact?: any;
  join?: any;
}

const Header = ({ home, services, about, contact, join }: Props) => {
  const hamRef = useRef<HTMLDivElement>(null);
  const storeContext = useStoreContext();

  const [theme, setTheme] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(storeContext.theme[0]);
    }
  }, [storeContext.theme[0]]);

  const [isDropdown, toggleDropdown] = useState<Boolean>(false);

  const dropdown = () => {
    if (!isDropdown) return null;
    if (hamRef.current) hamRef.current.style.zIndex = '9';
    return (
      <Panel
        pages={{ home: home, services: services, about: about, contact: contact, join: join }}
        close={() => toggleDropdown(!isDropdown)}
      />
    );
  };

  const handleMenuClick = () => toggleDropdown(!isDropdown);

  return (
    <>
      <div className={`${style.header}`}></div>

      <div className={style.headerLeft}>
        <Title
          className={style.title}
          fill={theme === 'dark' ? 'white' : null}
          width={'90%'}
          height={42}
        />
        <Logo className={style.logo} width={36} height={36} />
      </div>

      <div className={`${style.headerCenter} ${theme ? style[theme] : null}`}></div>

      <div className={style.headerRight}>
        <div className={style.items}>
          <div className={style.nav} onClick={() => home.current.scrollIntoView()}>
            home
          </div>
          <div className={style.nav} onClick={() => about.current.scrollIntoView()}>
            about
          </div>
          <div className={style.nav} onClick={() => services.current.scrollIntoView()}>
            services
          </div>
          <div className={style.nav} onClick={() => join.current.scrollIntoView()}>
            join
          </div>
          <div className={style.nav} onClick={() => contact.current.scrollIntoView()}>
            contact
          </div>
          <ThemeToggle />
        </div>
        <div className={style.ham} onClick={handleMenuClick}>
          <MenuBurger fill={theme === 'dark' ? 'white' : null} size={24} />
        </div>
      </div>
      {dropdown()}
    </>
  );
};

export default Header;

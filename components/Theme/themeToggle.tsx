import React from 'react';

import { Sun } from '../Icons';
import { useStoreContext } from '../../context/store';
import style from './index.module.scss';

const ThemeToggle = () => {
  const storeContext = useStoreContext();

  const handleThemeChange = () => {
    if (storeContext.theme[0] == 'light') storeContext.theme[1]('dark');
    if (storeContext.theme[0] == 'dark') storeContext.theme[1]('light');
  };

  return (
    <div onClick={handleThemeChange} className={style.toggle}>
      <Sun color={storeContext.theme[0] === 'light' ? 'black' : 'white'} size={18} />
    </div>
  );
};

export default ThemeToggle;

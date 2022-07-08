import React from 'react';

import ThemeToggle from '../Theme/themeToggle';

import style from './index.module.scss';

interface Props {
  close: () => void;
}

const Panel = ({ close }: Props) => {
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

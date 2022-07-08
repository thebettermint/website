import React from 'react';
import styles from './index.module.scss';

import Vercel from '../Assets/images/svg/vercel.svg';

import Logo from '../Assets/images/svg/thebettermint/logo.svg';
import Title from '../Assets/images/svg/thebettermint/boilerplate.svg';
import LinkLogo from '../Assets/images/png/thebettermint/horizontal.png';

import Image from 'next/image';

import {
  Discord,
  Facebook,
  Twitter,
  Github,
  Telegram,
  Shield,
  Bullseye,
  Target,
  Receipt,
  TimeOclock,
} from '../Icons';

import { useStoreContext } from '../../context/store';

const Footer = () => {
  const storeContext = useStoreContext();

  return (
    <footer className={styles.footer}>
      <div className={styles.tag}>
        <Title
          fill={storeContext.theme[0] === 'dark' ? 'white' : null}
          width={'90%'}
          height={42}
          style={{ margin: '10px' }}
        />

        <div className={styles.imgWrapper}>
          <Image src={LinkLogo} height={154} width={668} />
        </div>
      </div>

      <div className={styles.socials}>
        <Discord fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={24} />
        <Facebook fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={24} />
        <Twitter fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={24} />
        <Telegram fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={24} />
        <Github fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={24} />
      </div>
    </footer>
  );
};

export default Footer;

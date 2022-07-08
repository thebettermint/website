import type { NextPage } from 'next';
import React, { useRef } from 'react';

import Head from 'next/head';
import styles from '../styles/index.module.scss';

import Footer from '../components/Footer';

import ThemeToggle from '../components/Theme/themeToggle';

import { useStoreContext } from '../context/store';
import { useRouter } from 'next/router';

import Image from 'next/image';

import Header from '../components/Header';
import Card from '../components/Card';
import Contact from '../components/Contact';

import Logo from '../components/Assets/images/svg/thebettermint/logo.svg';
import Title from '../components/Assets/images/svg/thebettermint/boilerplate.svg';
import LinkLogo from '../components/Assets/images/png/thebettermint/horizontal.png';
import Hex1 from '../components/Assets/images/svg/thebettermint/hex1.svg';
import Hex2 from '../components/Assets/images/svg/thebettermint/hex2.svg';
import Hex3 from '../components/Assets/images/svg/thebettermint/hex3.svg';
import Hex4 from '../components/Assets/images/svg/thebettermint/hex4.svg';

import Module from '../components/Assets/images/png/thebettermint/molecular.png';
import ContactImg from '../components/Assets/images/png/thebettermint/contact.png';
import ContactSvg from '../components/Assets/images/svg/thebettermint/contact.svg';

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
} from '../components/Icons';

import Button from '../components/Button';

const Home: NextPage = () => {
  const router = useRouter();
  const storeContext = useStoreContext();

  const homeRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const joinRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title></title>
        <meta name="description" content="A better way to donate" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Header home={homeRef} about={aboutRef} join={joinRef} contact={contactRef} />

      {/* LANDING PAGE */}
      <div ref={homeRef} className={styles.screen}>
        <div className={styles.inner}>
          <div className={styles.logoWrapper}>
            <Logo width={'80%'} height={'100%'} style={{ maxHeight: '154px' }} />
            <Title
              fill={storeContext.theme[0] === 'dark' ? 'white' : null}
              width={'90%'}
              height={54}
              style={{ margin: '10px' }}
            />
          </div>

          <div className={styles.subtitle}>nft automation</div>
          <div className={styles.socials}>
            <Discord fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={28} />
            <Facebook fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={28} />
            <Twitter fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={28} />
            <Telegram fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={28} />
            <Github fill={storeContext.theme[0] === 'dark' ? 'white' : null} size={28} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              type="secondary"
              theme={'light'}
              height={'45px'}
              onClick={() => console.log('clicked')}
              className={styles.button}>
              register
            </Button>
            <Button
              type="secondary"
              theme={'light'}
              height={'45px'}
              onClick={() => console.log('clicked')}
              className={styles.button}>
              explore
            </Button>
          </div>
        </div>

        <Button
          type="secondary"
          theme={'light'}
          height={'100px'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
          }}
          onClick={() => console.log('clicked')}
          className={styles.pageButton}>
          <div>learn more</div>
          <div>about</div>
        </Button>
      </div>

      {/* ABOUT PAGE */}
      <div ref={aboutRef} className={`${styles.screen} ${styles.about}`}>
        <div className={styles.inner}>
          <div className={styles.imgWrapper}>
            <Image src={LinkLogo} height={154} width={668} />
          </div>
          <div className={styles.subtitle}>streamlined minting service</div>
        </div>

        <Button
          type="secondary"
          theme={'light'}
          height={'100px'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
          }}
          onClick={() => console.log('clicked')}
          className={styles.pageButton}>
          <div>join</div>
          <div>join</div>
        </Button>
      </div>

      {/* ABOUT PAGE */}
      <div className={`${styles.screen} ${styles.cards}`}>
        <div className={styles.background}>
          <Hex1
            width={'100%'}
            stroke={storeContext.theme[0] === 'dark' ? '#ffffff15' : '#00000015'}
          />
        </div>
        <div className={styles.background} style={{ bottom: '-50px', right: '-100%' }}>
          <Hex1
            width={'60%'}
            stroke={storeContext.theme[0] === 'dark' ? '#ffffff15' : '#00000015'}
          />
        </div>
        <div className={styles.inner}>
          <div className={styles.cardContainer}>
            <Card hex={<Hex4 width={'100%'} />} delay={0}>
              <TimeOclock size={36} />
              <div>time-based tokenization</div>
            </Card>
            <Card hex={<Hex3 width={'100%'} />} delay={10}>
              <Receipt size={36} />
              <div> ondemand tokenization</div>
            </Card>
            <Card hex={<Hex2 width={'100%'} />} delay={35}>
              <Bullseye size={36} />
              <div>targeted tokenization</div>
            </Card>
          </div>
        </div>

        <Button
          type="secondary"
          theme={'light'}
          height={'100px'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
          }}
          onClick={() => console.log('clicked')}
          className={styles.pageButton}>
          <div>join</div>
          <div>join</div>
        </Button>
      </div>

      {/* JOIN PAGE */}
      <div ref={joinRef} className={`${styles.screen} ${styles.join}`}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <div className={styles.title}>
              are you an organization seeking automated tokenization?
            </div>
            <div className={styles.subtitle}>
              join the new age of automated tokenization and redeemable credits
            </div>

            <Button
              type="secondary"
              theme={'light'}
              height={'48px'}
              width={'150px'}
              onClick={() => console.log('clicked')}
              className={styles.button}>
              <div>join today</div>
            </Button>
          </div>

          <div className={styles.molecularWrapper}>
            <Image src={Module} />
          </div>
        </div>

        <Button
          type="secondary"
          theme={'light'}
          height={'100px'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 0',
          }}
          onClick={() => console.log('clicked')}
          className={styles.pageButton}>
          <div>contact</div>
          <div>contact</div>
        </Button>
      </div>

      {/* CONTACT PAGE */}
      <div ref={contactRef} className={`${styles.screen} ${styles.contact}`}>
        <div className={styles.background}>
          <Hex1
            width={'100%'}
            stroke={storeContext.theme[0] === 'dark' ? '#ffffff15' : '#00000015'}
          />
        </div>
        <div className={styles.background} style={{ bottom: '-50px', left: '-60%' }}>
          <Hex1
            width={'60%'}
            stroke={storeContext.theme[0] === 'dark' ? '#ffffff15' : '#00000015'}
          />
        </div>
        <div className={styles.inner}>
          <div className={styles.form}>
            <Contact />
          </div>
          <div className={styles.graphics}>
            <ContactSvg />
            {/*             <Image src={ContactImg} /> */}
          </div>
        </div>
      </div>

      <div className={`${styles.footer} ${styles.screen}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

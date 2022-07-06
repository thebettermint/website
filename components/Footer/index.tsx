import React from 'react'
import styles from './index.module.scss'

import Vercel from '../Assets/images/svg/vercel.svg'

const Footer = () =>  {
    return (
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Vercel width={72} height={16} />
          </span>
        </a>
      </footer>
    )
}

export default Footer

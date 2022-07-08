import React from 'react';
import styles from './index.module.scss';

interface Props {
  children?: React.ReactNode;
  theme: string;
  hex: any;
  delay: any;
}

const Card = ({ children, theme, hex, delay }: Props) => {
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.svg} style={{ animationDelay: `${delay}s` }}>
        {hex}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

Card.defaultProps = {
  theme: 'dark',
};

export default Card;

import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

interface Props {
  children?: React.ReactNode;
  route: string;
  theme: string;
}

const Card = ({ children, route, theme }: Props) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <div onClick={handleClick} className={`${styles.card} ${styles[theme]}`}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  theme: 'dark',
};

export default Card;

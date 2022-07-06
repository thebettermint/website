import React from 'react';
import styles from './index.module.scss';

import { useStoreContext } from '../../context/store';

interface Props {
  children?: React.ReactNode;
}

const Theme = ({ children }: Props) => {
  const storeContext = useStoreContext();

  return <div className={storeContext.theme[0]}>{children}</div>;
};

export default Theme;

import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

interface IContextProps {
  data: [string, Dispatch<SetStateAction<string>>];
  theme: any;
}

const StoreContext = createContext({} as IContextProps);

export const useStoreContext = () => useContext(StoreContext);

const StoreContextProvider = (props: any) => {
  const [data, setData] = useState<string>('');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <StoreContext.Provider
      value={{
        data: [data, setData],
        theme: [theme, setTheme],
      }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

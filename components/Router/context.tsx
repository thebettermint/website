
import React, { 
  useState, 
  createContext, 
  useContext, 
  Dispatch, 
  SetStateAction } from 'react'


interface IContextProps {
  activePage: string|undefined
  setPage: Dispatch<SetStateAction<string|undefined>>
  data: any
  setData: Dispatch<SetStateAction<any>>
  nav: (page:string) => void
  prev: () => void
}

const RouterContext = createContext({} as IContextProps)

export const useRouterContext = () => useContext(RouterContext)

const RouterContextProvider = (props:any) => {

  const [ page, setPage ] = useState<string|undefined>('input')
  const [ data, setData ] = useState<any>(undefined)
  const [ history, setHistory ] = useState<any>(undefined)

  const nav = (nextPage:string) => {
      if (!history) setHistory([page])
      if (history) setHistory((previous:string[]) => [page, ...previous])
      setPage(nextPage)
  }

  const prev = () => {
    setPage(history[0])
    setHistory(history.slice(1))
  }

  return (
    <RouterContext.Provider value={{ 
                                    activePage:page, 
                                    setPage:setPage,
                                    data:data, 
                                    setData:setData,
                                    nav:nav,
                                    prev:prev
                                    }}>
        {props.children}
    </RouterContext.Provider>
  )
}

export default RouterContextProvider
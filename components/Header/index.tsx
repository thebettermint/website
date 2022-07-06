import React, {useState, ReactNode, MouseEventHandler, useEffect, useRef } from 'react'
import { useStoreContext } from '../../store/store';
import NavPanel from '../NavPanel'
import NetworkPanel from '../NetworkPanel'

import { MenuBurger, Cross, Bell, Globe, Search} from '../Icons';

import style from './index.module.scss'

interface Props {
    theme?:string,
    invert?:boolean
  };


const Header = ({ theme, invert } :Props ) =>  {

    const storeContext = useStoreContext()

    const [ isDropdown, toggleDropdown ] = useState<Boolean>(false)
    const [ isNetworkDropdown, toggleNetworkDropdown ] = useState<Boolean>(false)

    const hamRef = useRef<HTMLDivElement>(null)

    const dropdown = () => {
        if (!isDropdown) return null
        if (hamRef.current) hamRef.current.style.zIndex="9"
        return <NavPanel theme={storeContext.theme} close={() => toggleDropdown(!isDropdown)}/>
    }

    const networkDropdown = () => {
        if (!isNetworkDropdown) return null
        if (hamRef.current) hamRef.current.style.zIndex="6"
        return <NetworkPanel theme={storeContext.theme} close={() => toggleNetworkDropdown(!isNetworkDropdown)}/>
    }


    const handleMenuClick = () => toggleDropdown(!isDropdown)
    const handleNetworkClick = () => {
        console.log('clicked')
        toggleNetworkDropdown(!isNetworkDropdown)}

    let color = theme == 'light' ? 'rgb(61, 61, 61)' : '#ffffffff'
    if (invert) color = '#ffffffff'

    let crossColor = theme == 'light' ? 'black' : 'white'
    
    return (
        <>
        <div className={`${style.header} ${theme ? style[theme] : null}
        ${invert ? style.invert : null}`}>
        </div>

        <div className={style.headerLeft}>
                <div className={style.icon}>
                    <Globe 
                        color={color} 
                        size={16} 
                        onClick={handleMenuClick}/>
                        </div>
                        <div className={style.icon}>
                    <Bell 
                        color={color} 
                        size={16} 
                        onClick={handleMenuClick}/>
                        </div>
                        <div className={style.icon}>
                    <Search 
                        color={color} 
                        size={16} 
                        onClick={handleMenuClick}/>
                        </div>
            </div>

        <div className={`${style.headerCenter} ${theme ? style[theme] : null}`}>
                <div className={`${style.networkWrapper} 
                ${isNetworkDropdown ? style.clear : null}  
                ${storeContext.connection ? style.green : style.red}`}
                onClick={handleNetworkClick}
                >
                    <div className={`${style.network} 
                    ${invert 
                        && theme == 'light' ? style.invert : null}
                    ${isNetworkDropdown 
                    && invert 
                    && theme == 'light' ? style.forceFontColor : null}`}>{storeContext.activeNetwork.name}</div>
                </div>
            </div>

        <div ref={hamRef} className={style.hamburger}>
            { isDropdown ?  
            <Cross 
            color={crossColor} 
            size={16} 
            onClick={handleMenuClick}/>
            :
            <MenuBurger 
            color={color} 
            size={16} 
            onClick={handleMenuClick}/>
        }
        </div>
        {dropdown()}
        {networkDropdown()}
        </>
    )
}

export default Header

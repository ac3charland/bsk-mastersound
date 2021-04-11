import React, {useState} from 'react'
import './nav-bar.scss'
import {SECONDARY_PAGE_URL} from '../../utils/constants'
import Logo from '../../images/logo.png'
import {useSelector} from 'react-redux'

const cb = 'navbar'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuCSS = menuOpen ? 'open' : 'closed'
    const menuIcon = menuOpen ? 'fa-times' : 'fa-bars'
    const navBarActive = useSelector(state => state.scroll.isBelowScrollThreshold)

    return (
        <div id='nav-bar' className={`${cb} ${navBarActive ? 'active' : ''}`}>
            <a className={`${cb}__home`} href='/'>
                <img className={`${cb}__logo`} src={Logo} alt='Logo for BSK Mastersound by Bruce Kasprzyk, providing quality audio engineering services' />
                <h1 className={`${cb}__company-name`}>BSK <span className={`${cb}__mastersound`}>MASTERSOUND</span></h1>
            </a>
            <div className={`${cb}__links ${menuCSS}`}>
                <button className={`icon ${menuCSS}`} onClick={() => setMenuOpen(!menuOpen)}><i className={`fa ${menuIcon}`}></i></button>
                <a id={'secondary-link'} className={`${cb}__link ${menuCSS}`} href={SECONDARY_PAGE_URL}>CHANGE_ME SECONDARY_LINK</a>
            </div>
        </div>
    )
}

export default NavBar

import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {CONTACT_URL, ENGINEERING_URL, EQUIPMENT_URL, TRANSFER_URL} from '../../utils/constants'
import {getIsBelowScrollThreshold, getIsOffHomePage} from '../../selectors/app'
import Logo from '../../images/logo.png'

import './nav-bar.scss'

const cb = 'navbar'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuCSS = menuOpen ? 'open' : 'closed'
    const menuIcon = menuOpen ? 'fa-times' : 'fa-bars'
    const navBarActive = useSelector(getIsBelowScrollThreshold)
    const isOffHomePage = useSelector(getIsOffHomePage)
    const isNavbarActive = isOffHomePage || navBarActive

    return (
        <div id='nav-bar' className={`${cb} ${isNavbarActive ? 'active' : ''}`}>
            <Link className={`${cb}__home`} to='/'>
                <img className={`${cb}__logo`} src={Logo} alt='Logo for BSK Mastersound by Bruce Kasprzyk, providing quality audio engineering services' />
                <h1 className={`${cb}__company-name`}>BSK <span className={`${cb}__mastersound`}>MASTERSOUND</span></h1>
            </Link>
            <div className={`${cb}__links ${menuCSS}`}>
                <button className={`icon ${menuCSS}`} onClick={() => setMenuOpen(!menuOpen)}><i className={`fa ${menuIcon}`}></i></button>
                <Link
                    id={'engineering-link'}
                    className={`${cb}__link ${menuCSS}`}
                    to={ENGINEERING_URL}
                    onClick={() => setMenuOpen(false)}
                >
                    AUDIO ENGINEERING
                </Link>
                <Link
                    id={'engineering-link'}
                    className={`${cb}__link ${menuCSS}`}
                    to={TRANSFER_URL}
                    onClick={() => setMenuOpen(false)}
                >
                    AUDIO TRANSFER & RESTORATION
                </Link>
                <Link
                    id={'repair-link'}
                    className={`${cb}__link ${menuCSS}`}
                    to={EQUIPMENT_URL}
                    onClick={() => setMenuOpen(false)}
                    >
                    AUDIO EQUIPMENT REPAIR
                </Link>
                <Link
                    id={'contact-link'}
                    className={`${cb}__link ${menuCSS}`}
                    to={CONTACT_URL}
                    onClick={() => setMenuOpen(false)}
                >
                    INQUIRIES
                </Link>
            </div>
        </div>
    )
}

export default NavBar

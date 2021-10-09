import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import NavBar from './components/nav-bar/nav-bar'
import HomePage from './pages/home-page/home-page'
import ContactPage from './pages/contact-page/contact-page'
import {SCROLL_CHANGE_THRESHOLD, CONTACT_URL, ENGINEERING_URL, EQUIPMENT_URL, TRANSFER_URL, ENGINEERING_SERVICES, EQUIPMENT_SERVICES, TRANSFER_SERVICES} from './utils/constants'
import {setBelowScrollThreshold, setAboveScrollThreshold} from './actions/scroll'
import {getIsBelowScrollThreshold, getIsOffHomePage} from './selectors/app'
import ServicePage from './pages/service-page/service-page'

const App = () => {
    const dispatch = useDispatch()
    const isBelowScrollThreshold = useSelector(getIsBelowScrollThreshold)
    const isOffHomePage = useSelector(getIsOffHomePage)

    useEffect(() => {
        const changeBackground = () => {
            if (!isOffHomePage) {
                if (window.scrollY >= SCROLL_CHANGE_THRESHOLD && !isBelowScrollThreshold) {
                    dispatch(setBelowScrollThreshold())
                }
                else if (window.scrollY < SCROLL_CHANGE_THRESHOLD && isBelowScrollThreshold) {
                    dispatch(setAboveScrollThreshold())
                }
            } 
        }
        window.addEventListener('scroll', changeBackground, {passive: true})

        return () => window.removeEventListener('scroll', changeBackground)
    }, [isBelowScrollThreshold, isOffHomePage, dispatch])

    return (
        <React.StrictMode>
            <Router>
                <div className='content-wrapper'>
                    <NavBar />
                    <div className='flex' >
                        <div className='page-wrapper'>
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route path={CONTACT_URL} component={ContactPage} />
                                <Route path={ENGINEERING_URL} render={() => <ServicePage title='AUDIO ENGINEERING' services={ENGINEERING_SERVICES} background='/backgrounds/audio-engineering.jpg'/>} />
                                <Route path={TRANSFER_URL} render={() => <ServicePage title='AUDIO TRANSFER & RESTORATION' services={TRANSFER_SERVICES} background='/backgrounds/transfer.jpg' />} />
                                <Route path={EQUIPMENT_URL} render={() => <ServicePage title='AUDIO EQUIPMENT' services={EQUIPMENT_SERVICES} background='/backgrounds/equipment.jpg'/>} />
                                <Route component={HomePage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </React.StrictMode>
    )
}

export default App

import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import NavBar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import HomePage from './pages/home-page/home-page'
import SecondaryPage from './pages/secondary-page/secondary-page'
import {SCROLL_CHANGE_THRESHOLD, CONTACT_URL} from './utils/constants'
import {setBelowScrollThreshold, setAboveScrollThreshold} from './actions/scroll'
import {getIsBelowScrollThreshold, getIsOffHomePage} from './selectors/app'

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
                                <Route path={CONTACT_URL} component={SecondaryPage} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </React.StrictMode>
    )
}

export default App

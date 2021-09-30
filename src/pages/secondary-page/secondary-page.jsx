import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {setOffHomePage} from '../../actions/navigation'

import qs from 'qs'
import './secondary-page.scss'
import Footer from '../../components/footer/footer'

const cb = 'secondary'

const SecondaryPage = ({location}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(setOffHomePage(true))
        return () => {
            dispatch(setOffHomePage(false))
        }
    }, [dispatch])


    const {subject: rawSubject = ''} = qs.parse(location.search, {ignoreQueryPrefix: true})
    const subject = rawSubject.replace('-', ' ')

    return (
        <div className={cb}>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__page-content`}>
                    <h1 className={`${cb}__heading`}>CONTACT</h1>
                    <h1 className={`${cb}__heading`}>{subject}</h1>
                    <p>(Footer sticks to bottom)</p>
                </div>
                <Footer />
            </div>
        </div>
    )
}

SecondaryPage.propTypes = {
    location: {
        search: PropTypes.string,
    },
}

export default SecondaryPage

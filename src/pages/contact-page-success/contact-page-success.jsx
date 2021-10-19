import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {setOffHomePage} from '../../actions/navigation'

import qs from 'qs'
import './contact-page-success.scss'
import Footer from '../../components/footer/footer'
import ContactForm from '../../components/contact-form/contact-form'

const cb = 'contact'

const ContactSuccessPage = ({location}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(setOffHomePage(true))
        return () => {
            dispatch(setOffHomePage(false))
        }
    }, [dispatch])


    const {subject: rawSubject = ''} = qs.parse(location.search, {ignoreQueryPrefix: true})
    const subject = rawSubject.replace('_', ' ')

    return (
        <div className={cb}>
            <div className={`${cb}__flex`}>
                <div className={`${cb}__page-content`}>
                    <h2 className={`${cb}__heading`}>SUCCESS</h2>
                    <h3 className={`${cb}__sub-heading`}>Your message has been sent. Bruce will get back to you shortly.</h3>
                </div>
                <Footer />
            </div>
        </div>
    )
}

ContactSuccessPage.propTypes = {
    location: {
        search: PropTypes.string,
    },
}

export default ContactSuccessPage

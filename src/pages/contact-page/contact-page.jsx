import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {setOffHomePage} from '../../actions/navigation'

import qs from 'qs'
import './contact-page.scss'
import Footer from '../../components/footer/footer'
import ContactForm from '../../components/contact-form/contact-form'

const cb = 'contact'

const ContactPage = ({location}) => {
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
                    <h2 className={`${cb}__heading`}>CONTACT</h2>
                    <ContactForm subjectPrefill={subject}/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

ContactPage.propTypes = {
    location: {
        search: PropTypes.string,
    },
}

export default ContactPage
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'

import {setOffHomePage} from '../../actions/navigation'

import './service-page.scss'
import Footer from '../../components/footer/footer'
import {CONTACT_URL} from '../../utils/constants'


const cb = 'service'

const ServicePage = ({title, services, background, copy}) => {
    const CopyComponent = copy
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(setOffHomePage(true))
        return () => {
            dispatch(setOffHomePage(false))
        }
    }, [dispatch])


    return (
        <div className={cb} style={{backgroundImage: `url(${background})`}}>
            <div className={`${cb}__content-wrapper`}>
                <div className={`${cb}__copy`}>
                    <h2 className={`${cb}__heading`}>{title}</h2>
                    <CopyComponent/>
                </div>
                <div className={`${cb}__services-wrapper`}>
                    {services.map((service, idx) => (
                        <div key={service + idx} className={`${cb}__service-wrapper`}>
                            <a className={`${cb}__link`} href={`${CONTACT_URL}?subject=Re: ${service}`}>{service.toUpperCase()}</a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

ServicePage.propTypes = {
    title: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    background: PropTypes.string.isRequired,
    copy: PropTypes.func,
}

export default ServicePage

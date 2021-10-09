import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {setOffHomePage} from '../../actions/navigation'

import './service-page.scss'
import Footer from '../../components/footer/footer'
import {CONTACT_URL} from '../../utils/constants'


const cb = 'service'

const ServicePage = ({title, services, background}) => {
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
                    <p>BSK Mastersound provides lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan iaculis eros quis placerat. Donec lectus elit, porta sed fermentum et, hendrerit id ipsum. Aenean tristique enim ac diam convallis hendrerit. Integer et massa varius, ullamcorper sapien iaculis, posuere risus. Ut id scelerisque lectus. Duis at lectus dui. Praesent ornare sollicitudin leo ac faucibus. In condimentum laoreet eros, a lacinia ante imperdiet sed. Nulla ac lorem vel dolor lacinia ullamcorper. Donec tellus eros, consectetur in justo at, tincidunt pretium tortor. Vestibulum neque tortor, scelerisque non mauris molestie, pulvinar tincidunt est. Duis sed ullamcorper enim, sit amet mollis sapien. Ut porta diam sed efficitur dignissim.</p>
                    <p>Vestibulum justo mauris, auctor eu sapien at, euismod cursus nisl. Fusce tristique orci eu ligula finibus, nec pulvinar nisl lobortis. Nam ultricies mattis fermentum. Nunc nulla diam, vestibulum ac nibh volutpat, aliquet elementum sapien. Praesent laoreet libero auctor ante fringilla blandit. Fusce rhoncus blandit magna, id rhoncus turpis bibendum a. Suspendisse laoreet diam non gravida aliquet. Nulla blandit est sed efficitur posuere.</p>
                </div>
                <div className={`${cb}__services-wrapper`}>
                    {services.map((service, idx) => (
                        <div key={service + idx} className={`${cb}__service-wrapper`}>
                            <Link to={`${CONTACT_URL}?subject=${service.replace(' ', '_')}`} className={`${cb}__link`}>{service.toUpperCase()}</Link>
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
}

export default ServicePage

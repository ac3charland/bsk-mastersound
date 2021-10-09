import React from 'react'
import {Link} from 'react-router-dom'
import {CONTACT_URL, SERVICES_SECTION_ID, HOME_SERVICES} from '../../utils/constants'

import './services.scss'

const cb = 'services'

const Services = () => (
    <div id={SERVICES_SECTION_ID} tabIndex={-1} className={cb}>
        <div className={`${cb}__flex`}>
            <div className={`${cb}__copy`}>
                <h2 className={`${cb}__heading`}>SERVICES</h2>
                <p>BSK Mastersound provides lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan iaculis eros quis placerat. Donec lectus elit, porta sed fermentum et, hendrerit id ipsum. Aenean tristique enim ac diam convallis hendrerit. Integer et massa varius, ullamcorper sapien iaculis, posuere risus. Ut id scelerisque lectus. Duis at lectus dui. Praesent ornare sollicitudin leo ac faucibus. In condimentum laoreet eros, a lacinia ante imperdiet sed. Nulla ac lorem vel dolor lacinia ullamcorper. Donec tellus eros, consectetur in justo at, tincidunt pretium tortor. Vestibulum neque tortor, scelerisque non mauris molestie, pulvinar tincidunt est. Duis sed ullamcorper enim, sit amet mollis sapien. Ut porta diam sed efficitur dignissim.</p>
                <p>Vestibulum justo mauris, auctor eu sapien at, euismod cursus nisl. Fusce tristique orci eu ligula finibus, nec pulvinar nisl lobortis. Nam ultricies mattis fermentum. Nunc nulla diam, vestibulum ac nibh volutpat, aliquet elementum sapien. Praesent laoreet libero auctor ante fringilla blandit. Fusce rhoncus blandit magna, id rhoncus turpis bibendum a. Suspendisse laoreet diam non gravida aliquet. Nulla blandit est sed efficitur posuere. Praesent at nisl congue, malesuada erat sit amet, egestas lorem. Cras eget nunc neque. Maecenas risus tortor, ultrices nec elit convallis, facilisis congue eros. Curabitur lobortis non nunc non sollicitudin. Fusce metus orci, mollis vitae iaculis ac, lacinia ac sem. Integer hendrerit turpis turpis, eget iaculis nunc venenatis quis.</p>
            </div>
            <div className={`${cb}__services-wrapper`}>
                {HOME_SERVICES.map((service, idx) => (
                    <div key={service + idx} className={`${cb}__service-wrapper`}>
                        <Link to={`${CONTACT_URL}?subject=${service.replace(' ', '_')}`} className={`${cb}__link`}>{service.toUpperCase()}</Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
)



export default Services

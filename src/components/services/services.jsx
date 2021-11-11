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
                <p>BSK Mastersound provides a variety of audio-related services, including recording, transfer, and equipment repair.</p>
                <p>Bruce can assist in any phase of the music production process, from recording to mixing to mastering. Whether you want to record a live performance, create an album from start to LP pressing, or bring in tracks to master on a great stereo system, BSK Mastersound has you covered.</p>
                <p>An avid electronics repairman, Bruce also can repair all manner of audio equipment, including but not limited to machines like the Studer A827 24 track, the Studer B67 & B77, the Otari MX5050 and the Otari MTR-10. Chances are, if your equipment is broken, Bruce can fix it.</p>
                <p>To start your inquiry, select a category.</p>
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

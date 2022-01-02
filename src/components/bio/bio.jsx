import React from 'react'
import './bio.scss'

import {BIO_SECTION_ID} from '../../utils/constants'

const cb = 'bio'

const Bio = () => (
    <div id={BIO_SECTION_ID} tabIndex={-1} className={cb}>
        <div className={`${cb}__para-wrapper`}>
            <p><span className={`${cb}__name`}>BRUCE KASPRZYK</span> is an audio engineer with over 25 years of experience based out of  Madison, Wisconsin. Bruce has recorded around the country with artists like Patrick Sweany, Caravan, Buffalo Clover, Harmonious Wail, Rachel Pearl, Trapper Schoepp, Dave Pahanish, the Wilder Deitz Group, the UW Russian Folk Orchestra, and the Madison East Side Acoustic Ensemble.</p>
            <p>Bruce’s first recording was of a 1994 thunderstorm using equipment bought with a year of saved newspaper money. His passion for recording continued through high school and into college, when in 2003 he studied audio engineering formally at Middle Tennessee State University. While there, he learned how to repair audio equipment and quickly took charge of maintaining the college’s tape machines. To this day, Bruce repairs, restores, and maintains his tape machines himself.</p>
            <p>Since MTSU, Bruce’s skills as an audio engineer have taken him to garages in South Jersey, bars in Tennessee, professional studios in Florida, and university recital halls in Wisconsin. He’s recorded in homes, churches, clubs, and auditoriums, collaborating with new and established artists alike. Collectively, the artists that Bruce has recorded have hundreds of thousands of listeners every month.</p>
            <p>If you’re looking to record, mix, or master; if you want to restore audio from an old, obscure format; if you have a piece of audio equipment that’s broken; for all this and more, BSK Mastersound is your one-stop shop. Reach out today to start your inquiry.</p>
            <div className={`${cb}__svg ${cb}__speaker ${cb}__speaker-1`} />
            <div className={`${cb}__svg ${cb}__speaker ${cb}__speaker-2`} />
            <div className={`${cb}__svg ${cb}__mixer`} />
            <div className={`${cb}__svg ${cb}__tape`} />
        </div>
    </div>
)

export default Bio

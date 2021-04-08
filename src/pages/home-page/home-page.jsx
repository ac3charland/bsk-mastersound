import React from 'react'
import './home-page.scss'
import Hero from '../../components/hero/hero'
import Bio from '../../components/bio/bio'

const cb = 'home'

const HomePage = () => {
    return (
        <div className={cb}>
            <Hero />
            <Bio />
        </div>
    )
}

export default HomePage

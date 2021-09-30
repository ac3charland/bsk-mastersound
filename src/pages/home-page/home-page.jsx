import React, {useEffect} from 'react'
import './home-page.scss'
import Hero from '../../components/hero/hero'
import Bio from '../../components/bio/bio'
import Services from '../../components/services/services'
import {useDispatch} from 'react-redux'
import {setOffHomePage} from '../../actions/navigation'
import Footer from '../../components/footer/footer'

const cb = 'home'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setOffHomePage(false))
        return () => {
            dispatch(setOffHomePage(true))
        }
    }, [dispatch])

    return (
        <div className={cb}>
            <Hero />
            <Bio />
            <Services />
            <Footer/>
        </div>
    )
}

export default HomePage

import React, {useState, useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import HeroImage from '../../images/hero.jpg'
import ChevronDown from '../../images/chevrondown.png'
import './hero.scss'
import {BIO_SECTION_ID} from '../../utils/constants'

const cb = 'hero'
const words = ['ENGINEERING', 'EQUIPMENT', 'TRANSFER', 'RECORDING', 'MIXING', 'MASTERING', 'RESTORATION']
const animationSpeed = 400
const defaultTransition = `${animationSpeed}ms cubic-bezier(0.455, 0.03, 0.515, 0.955)`

const Hero = () => {
    const [index, setIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(index + 1)
    const [transitioning, setTransitioning] = useState(false)
    const shouldHideChevron = useSelector(state => state.scroll.isBelowScrollThreshold)
    const nextIndexRef = useRef(nextIndex)
    nextIndexRef.current = nextIndex

    const startTransition = () => {
        setTransitioning(true)
        let newNextIndex = nextIndexRef.current + 1
        if (newNextIndex >= words.length) newNextIndex = 0
        setTimeout(
            () => {
                setTransitioning(false)
                setIndex(nextIndexRef.current)
                setNextIndex(newNextIndex)
            },
            animationSpeed
        )

    }

    useEffect(() => {
        const runSlideShow = () => {
            setInterval(startTransition, 3000)
        }

        runSlideShow()
    }, [])

    useEffect(() => {
        if (index >= words.length) {
            setIndex(0)
        }
    }, [index])

    useEffect(() => {

    })

    const transition = transitioning ? defaultTransition : 'none'


    return (
        <div className={`${cb}__wrapper`}>
            <img className={`${cb}__image`} alt='Bruce Kasprzk BSK Mastersound Vaccum Tubes' src={HeroImage} />
            <div className={`${cb}__title`}>
                <div className={`${cb}__slideshow-wrapper`}>
                    <div>AUDIO&nbsp;</div>
                    <div className={`${cb}__variable-word-container${transitioning ? '-transition' : ''}`} style={{transition}}>
                        <div className={`${cb}__current-word${transitioning ? '-transition' : ''}`} style={{transition}}>{words[index]}</div>
                        <div className={`${cb}__next-word${transitioning ? '-transition' : ''}`} style={{transition}}>{words[nextIndex]}</div>
                    </div>
                </div>
                <button className={`${cb}__button ${shouldHideChevron ? `${cb}__button-hidden` : ''}`} onClick={scrollToBio}>
                    <div className={`${cb}__chevron-container`}>
                        <img className={`${cb}__chevron`} alt='' src={ChevronDown} />
                    </div>
                </button>
            </div>
        </div>
    )
}

const scrollToBio = () => {
    const bioSection = document.getElementById(BIO_SECTION_ID)
    if (bioSection) {
        bioSection.scrollIntoView({behavior: 'smooth'})
        setTimeout(() => (bioSection.focus()), 500)
    }
}

export default Hero

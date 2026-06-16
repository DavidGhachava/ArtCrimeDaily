import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroArtworkDefault from '../../assets/hero-art-default.jpg'
import heroArtwork from '../../assets/hero-art.jpg'
import { fadeUp, tapPress } from '../../utils/motion'
import './Hero.css'

const ART_RESET_DELAY = 850

function Hero() {
  const [isAltArtworkVisible, setIsAltArtworkVisible] = useState(false)
  const resetTimerRef = useRef(null)

  const clearResetTimer = useCallback(() => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current)
      resetTimerRef.current = null
    }
  }, [])

  const showAltArtwork = useCallback(() => {
    clearResetTimer()
    setIsAltArtworkVisible(true)
  }, [clearResetTimer])

  const hideAltArtworkSoon = useCallback(() => {
    clearResetTimer()
    resetTimerRef.current = window.setTimeout(() => {
      setIsAltArtworkVisible(false)
      resetTimerRef.current = null
    }, ART_RESET_DELAY)
  }, [clearResetTimer])

  useEffect(() => {
    const mobileScrollQuery = window.matchMedia('(hover: none), (pointer: coarse)')

    const handleScroll = () => {
      if (!mobileScrollQuery.matches) {
        return
      }

      showAltArtwork()
      hideAltArtworkSoon()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearResetTimer()
    }
  }, [clearResetTimer, hideAltArtworkSoon, showAltArtwork])

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="eyebrow">Custom animal portraits</p>
        <h1 id="hero-title">Tiny portraits. Big personality.</h1>
        <p className="hero-text">
          Send a photo and I will turn your little weirdo into a sweet, funny
          keepsake.
        </p>
        <div className="hero-actions">
          <motion.div whileTap={tapPress}>
            <Link className="button-sketch" to="/order">
              Order for $6.99
            </Link>
          </motion.div>
          <Link className="text-link" to="/#works">
            See my work
          </Link>
        </div>
      </motion.div>
      <motion.figure
        className={`hero-art${isAltArtworkVisible ? ' is-alt-visible' : ''}`}
        onMouseEnter={showAltArtwork}
        onMouseLeave={hideAltArtworkSoon}
        onFocus={showAltArtwork}
        onBlur={hideAltArtworkSoon}
        initial={{ opacity: 0, scale: 0.94, rotate: 2, y: 24 }}
        animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        whileHover={{ rotate: -1, scale: 1.015 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          className="hero-art-default"
          src={heroArtworkDefault}
          alt="A funny hand-drawn animal portrait making a skeptical face"
        />
        <img className="hero-art-hover" src={heroArtwork} alt="" aria-hidden="true" />
      </motion.figure>
    </section>
  )
}

export default Hero

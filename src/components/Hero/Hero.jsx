import { useCallback, useEffect, useRef, useState } from 'react'
import heroArtworkDefault from '../../assets/hero-art-default.jpg'
import heroArtwork from '../../assets/hero-art.jpg'
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
      <div className="hero-copy">
        <p className="eyebrow">Custom animal portraits</p>
        <h1 id="hero-title">Tiny portraits. Big personality.</h1>
        <p className="hero-text">
          Send a photo and she will turn your little weirdo into a sweet, funny
          keepsake.
        </p>
        <div className="hero-actions">
          <a className="button-sketch" href="/order">
            Book a painting
          </a>
          <a className="text-link" href="/#works">
            See her work
          </a>
        </div>
      </div>
      <figure
        className={`hero-art${isAltArtworkVisible ? ' is-alt-visible' : ''}`}
        onMouseEnter={showAltArtwork}
        onMouseLeave={hideAltArtworkSoon}
        onFocus={showAltArtwork}
        onBlur={hideAltArtworkSoon}
      >
        <img
          className="hero-art-default"
          src={heroArtworkDefault}
          alt="A funny hand-drawn animal portrait making a skeptical face"
        />
        <img className="hero-art-hover" src={heroArtwork} alt="" aria-hidden="true" />
      </figure>
    </section>
  )
}

export default Hero

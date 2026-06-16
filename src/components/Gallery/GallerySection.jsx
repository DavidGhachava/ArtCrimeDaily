import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Lightbox from '../Lightbox/Lightbox'
import { hoverLift, popCard, staggerContainer, tapPress, viewportOnce } from '../../utils/motion'
import './GallerySection.css'

function GallerySection({
  ctaHref,
  ctaLabel,
  eyebrow = 'Gallery',
  includeOrderCard = false,
  items,
  title,
  variant,
}) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(null)
  const activeGalleryItem =
    activeGalleryIndex === null ? null : items[activeGalleryIndex]

  const showPreviousArtwork = useCallback(() => {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + items.length) % items.length,
    )
  }, [items.length])

  const showNextArtwork = useCallback(() => {
    setActiveGalleryIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % items.length,
    )
  }, [items.length])

  return (
    <section
      className={`gallery-section${variant ? ` gallery-section-${variant}` : ''}`}
      id="works"
      aria-labelledby="works-title"
    >
      <motion.div
        className="gallery-heading-row"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <motion.h2 id="works-title" variants={popCard}>
            {title}
          </motion.h2>
        </div>
        {ctaHref && ctaLabel && (
          <Link className="gallery-view-link" to={ctaHref}>
            {ctaLabel}
          </Link>
        )}
      </motion.div>
      <motion.div
        className="gallery-grid"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {items.map((item, index) => (
          <motion.div
            className="gallery-motion-wrap"
            key={item.name}
            variants={popCard}
            whileHover={hoverLift}
            whileTap={tapPress}
          >
            <button
              className="gallery-card"
              type="button"
              onClick={() => setActiveGalleryIndex(index)}
            >
              <span className="gallery-image-wrap">
                <img src={item.image} alt={`${item.name} portrait`} loading="lazy" />
              </span>
              <span className="gallery-name">{item.name}</span>
            </button>
          </motion.div>
        ))}
        {includeOrderCard && (
          <motion.div variants={popCard} whileHover={hoverLift} whileTap={tapPress}>
            <Link className="gallery-card gallery-order-card" to="/order">
            <span className="gallery-order-plus" aria-hidden="true">
              +
            </span>
            <span className="gallery-name">Order yours</span>
            </Link>
          </motion.div>
        )}
      </motion.div>
      <Lightbox
        item={activeGalleryItem}
        onClose={() => setActiveGalleryIndex(null)}
        onNext={showNextArtwork}
        onPrevious={showPreviousArtwork}
      />
    </section>
  )
}

export default GallerySection

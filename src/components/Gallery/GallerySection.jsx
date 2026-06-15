import { useCallback, useState } from 'react'
import Lightbox from '../Lightbox/Lightbox'
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
      <div className="gallery-heading-row">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="works-title">{title}</h2>
        </div>
        {ctaHref && ctaLabel && (
          <a className="gallery-view-link" href={ctaHref}>
            {ctaLabel}
          </a>
        )}
      </div>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            className="gallery-card"
            type="button"
            key={item.name}
            onClick={() => setActiveGalleryIndex(index)}
          >
            <span className="gallery-image-wrap">
              <img src={item.image} alt={`${item.name} portrait`} loading="lazy" />
            </span>
            <span className="gallery-name">{item.name}</span>
          </button>
        ))}
        {includeOrderCard && (
          <a className="gallery-card gallery-order-card" href="/order">
            <span className="gallery-order-plus" aria-hidden="true">
              +
            </span>
            <span className="gallery-name">Order yours</span>
          </a>
        )}
      </div>
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

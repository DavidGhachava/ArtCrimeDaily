import { useEffect } from 'react'
import './Lightbox.css'

function Lightbox({ item, onClose, onNext, onPrevious }) {
  useEffect(() => {
    if (!item) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onPrevious()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNext()
      }

      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.classList.add('has-lightbox')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('has-lightbox')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose, onNext, onPrevious])

  if (!item) {
    return null
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} artwork preview`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <button
        className="lightbox-close"
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
      >
        X
      </button>
      <button
        className="lightbox-arrow lightbox-arrow-left"
        type="button"
        aria-label="Previous artwork"
        onClick={(event) => {
          event.stopPropagation()
          onPrevious()
        }}
      >
        &lt;
      </button>
      <div className="lightbox-panel" onMouseDown={(event) => event.stopPropagation()}>
        <div className="lightbox-image-frame">
          <img src={item.image} alt={`${item.name} portrait`} />
        </div>
        <aside className="lightbox-info">
          <p className="eyebrow">Pet name</p>
          <h2>{item.name}</h2>
        </aside>
      </div>
      <button
        className="lightbox-arrow lightbox-arrow-right"
        type="button"
        aria-label="Next artwork"
        onClick={(event) => {
          event.stopPropagation()
          onNext()
        }}
      >
        &gt;
      </button>
    </div>
  )
}

export default Lightbox

import { useEffect, useState } from 'react'
import logo from '../../assets/logo-small.jpg'
import './Footer.css'

function Footer() {
  const [isInstagramModalOpen, setIsInstagramModalOpen] = useState(false)

  useEffect(() => {
    if (!isInstagramModalOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsInstagramModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isInstagramModalOpen])

  return (
    <>
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" aria-label="ArtCrimeDaily home">
              <img src={logo} alt="" />
            </a>
            <p>Custom pet portraits with tiny chaos and big feelings.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="/hall-of-fame">Hall Of Fame</a>
            <a href="/#process">How it works</a>
            <a href="/order">Book</a>
            <a href="/#contact">Contact</a>
          </nav>
          <div className="footer-contact">
            <p>DM for questions, weird pet stories, and booking help.</p>
            <div className="footer-socials">
              <button
                className="social-ball"
                type="button"
                aria-label="Instagram coming soon"
                onClick={() => setIsInstagramModalOpen(true)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="5" width="14" height="14" rx="4" />
                  <circle cx="12" cy="12" r="3.5" />
                  <circle cx="16.5" cy="7.5" r="1" />
                </svg>
              </button>
              <a
                className="social-ball"
                href="https://www.tiktok.com/@artcrimesdaily"
                target="_blank"
                rel="noreferrer"
                aria-label="ArtCrimeDaily on TikTok"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 4v11.2a3.8 3.8 0 1 1-3.8-3.8" />
                  <path d="M13 4c.7 3 2.7 4.8 5.5 5.2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>(c) 2026 ArtCrimeDaily. All rights reserved.</span>
          <div>
            <a href="/policies/terms">Terms</a>
            <a href="/policies/privacy">Privacy</a>
            <a href="/policies/refunds">Refund policy</a>
          </div>
        </div>
      </footer>
      {isInstagramModalOpen && (
        <div
          className="coming-soon-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsInstagramModalOpen(false)
            }
          }}
        >
          <div className="coming-soon-card">
            <p className="eyebrow">Instagram</p>
            <h2 id="coming-soon-title">Coming soon</h2>
            <p>The profile link will be added once ArtCrimeDaily is ready.</p>
            <button
              className="button-sketch"
              type="button"
              onClick={() => setIsInstagramModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer

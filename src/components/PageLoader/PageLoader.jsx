import './PageLoader.css'

function PageLoader({ isVisible }) {
  return (
    <div className={`page-loader${isVisible ? ' is-visible' : ''}`} aria-live="polite" aria-busy={isVisible}>
      <div className="page-loader-card" role="status">
        <div className="folding-boxes" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p>Loading</p>
      </div>
    </div>
  )
}

export default PageLoader

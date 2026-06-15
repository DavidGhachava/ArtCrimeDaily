import logo from '../../assets/logo-small.jpg'
import './SiteNav.css'

function SiteNav() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <a className="brand" href="/" aria-label="ArtCrimeDaily home">
        <img src={logo} alt="" />
      </a>
      <nav className="nav-links" aria-label="Main pages and sections">
        <a href="/hall-of-fame">Hall Of Fame</a>
        <a href="/#process">How it works</a>
        <a href="/order">Book drawing</a>
      </nav>
      <a className="button-sketch nav-cta" href="/order">
        Draw my pet
      </a>
    </header>
  )
}

export default SiteNav

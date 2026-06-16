import { Link } from 'react-router-dom'
import logo from '../../assets/logo-small.jpg'
import './SiteNav.css'

function SiteNav() {
  return (
    <header className="site-nav" aria-label="Primary navigation">
      <Link className="brand" to="/" aria-label="ArtCrimeDaily home">
        <img src={logo} alt="" />
      </Link>
      <nav className="nav-links" aria-label="Main pages and sections">
        <Link to="/hall-of-fame">Hall Of Fame</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/order">Order</Link>
      </nav>
      <Link className="button-sketch nav-cta" to="/order">
        Draw my pet
      </Link>
    </header>
  )
}

export default SiteNav

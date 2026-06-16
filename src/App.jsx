import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import PageLoader from './components/PageLoader/PageLoader'
import SiteNav from './components/SiteNav/SiteNav'
import HallOfFamePage from './pages/HallOfFamePage/HallOfFamePage'
import HowItWorksPage from './pages/HowItWorksPage/HowItWorksPage'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import PolicyPage from './pages/PolicyPage/PolicyPage'

function AppShell() {
  const location = useLocation()
  const [isPageLoading, setIsPageLoading] = useState(false)
  const activeLocationRef = useRef(
    `${location.pathname}${location.search}${location.hash}`,
  )
  const loadingTimerRef = useRef(null)

  const handleNavigationCapture = (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    const link = event.target.closest('a[href]')

    if (!link || link.target || link.hasAttribute('download')) {
      return
    }

    const nextUrl = new URL(link.href)

    if (nextUrl.origin !== window.location.origin) {
      return
    }

    const currentLocation = `${location.pathname}${location.search}${location.hash}`
    const nextLocation = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`

    if (currentLocation !== nextLocation) {
      window.clearTimeout(loadingTimerRef.current)
      setIsPageLoading(true)
    }
  }

  useEffect(() => {
    const nextLocation = `${location.pathname}${location.search}${location.hash}`

    if (activeLocationRef.current === nextLocation) {
      if (location.hash) {
        const target = document.querySelector(location.hash)
        target?.scrollIntoView({ block: 'start' })
      }
      return undefined
    }

    activeLocationRef.current = nextLocation
    setIsPageLoading(true)

    loadingTimerRef.current = window.setTimeout(() => {
      setIsPageLoading(false)
      if (location.hash) {
        const target = document.querySelector(location.hash)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
    }, 620)

    return () => {
      window.clearTimeout(loadingTimerRef.current)
    }
  }, [location.pathname, location.search, location.hash])

  return (
    <div onClickCapture={handleNavigationCapture}>
      <PageLoader isVisible={isPageLoading} />
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hall-of-fame" element={<HallOfFamePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/policies/:policyId" element={<PolicyPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import SiteNav from './components/SiteNav/SiteNav'
import HallOfFamePage from './pages/HallOfFamePage/HallOfFamePage'
import HomePage from './pages/HomePage/HomePage'
import OrderPage from './pages/OrderPage/OrderPage'
import PolicyPage from './pages/PolicyPage/PolicyPage'

function App() {
  return (
    <BrowserRouter>
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hall-of-fame" element={<HallOfFamePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/policies/:policyId" element={<PolicyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

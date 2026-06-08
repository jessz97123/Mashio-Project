import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Events from './pages/Events'
import GiftCard from './pages/GiftCard'
import Photos from './pages/Photos'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="events" element={<Events />} />
        <Route path="gift-card" element={<GiftCard />} />
        <Route path="photos" element={<Photos />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

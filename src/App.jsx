import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import HomePage from './home-page/HomePage.jsx'
import DailyLunchPage from './daily-lunch/DailyLunchPage.jsx'
import MenuPage from './menu/MenuPage.jsx'
import FindUsPage from './find-us/FindUsPage.jsx'
import OrderPage from './order/OrderPage.jsx'
import GalleryPage from './gallery/GalleryPage.jsx'
import NoPage from './no-page/NoPage.jsx'

function App() {

  return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="daily-lunch" element={<DailyLunchPage />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="find-us" element={<FindUsPage />} />
                <Route path="order" element={<OrderPage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
  )
}

export default App

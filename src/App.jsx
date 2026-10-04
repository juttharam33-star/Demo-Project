import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { CartProvider } from './context/CartContext';


export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const addToCart = () => setCartCount((count) => count + 1)
   return (
    <CartProvider>
      {/* Your router or main components */}
    </CartProvider>
  );
}
export default function App() {

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage onAdd={addToCart} />} />
        <Route path="/products" element={<ProductsPage onAdd={addToCart} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}
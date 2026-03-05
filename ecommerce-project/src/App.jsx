import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { useState, useEffect } from 'react';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css'

function App() {
   const [cart, setCart] = useState([]);
   const [products, setProducts] = useState([]);

   useEffect(() => {
    // Load products from local data
    import('../starting-code/data/products.js').then(module => {
      setProducts(module.products);
    });

    // Load cart from localStorage or use default
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    } else {
      // Load default cart from starting code
      import('../starting-code/backend/cart.json').then(module => {
        setCart(module.default);
      });
    }
   }, []);

   const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
   };

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} products={products} updateCart={updateCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} products={products} updateCart={updateCart} />}/>
      <Route path="orders" element={<OrdersPage cart={cart} products={products} updateCart={updateCart} />}/>
      <Route path="tracking" element={<TrackingPage cart={cart} />}/>
    </Routes>
  )
}

export default App

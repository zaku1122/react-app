import { Routes,Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { OrdersPage } from './pages/OrdersPage';
import './App.css'
import { useEffect } from 'react';

function App() {
   const [cart, setCart] = useState([]);
   useEffect(()=> {
    axios.get('http://localhost:3000/api/cart-items')
    .then( (response) => {
        setCart(response.data);
    })
   })

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />}/>

      <Route path="orders" element={<OrdersPage />}/>

    </Routes>
  
  )
}

export default App

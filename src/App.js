import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses'; 
import Contact from './components/Contact';
import SignIn from './components/SignIn';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const courses = [
    { id: 1, name: "course 1", price: 50 },
    { id: 2, name: "course 2", price: 75 },
    { id: 3, name: "course 3", price: 100 },
  ];

  const addToCart = (course) => {
    setCartItems([...cartItems, course]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <h1>Online Courses</h1>
      
        <Courses courses={courses} onAddToCart={addToCart} />
        <div className="cart">
          <h2>Shopping Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Courses from './components/Courses'; 
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Cart from './components/Cart';
import { Provider } from 'react-redux'
import store from './components/store/storee';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      
   
      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/AboutUs' element={<AboutUs />} />
  <Route path='/Cart' element={<Cart />} />
  <Route path='/Contact' element={<Contact />} />
  <Route path='/SignIn' element={<SignIn />} />
  <Route path='/Courses' element={<Courses />} />
  <Route path='*' element={<NotFound />} />
</Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
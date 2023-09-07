import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Courses from './components/Courses';
import Home from './components/Home';
import  {useState}from 'react';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';


// function Home(){
//   return <h1>Home</h1>;
//   }


// function AboutUs(){
// return <h1>AboutUs</h1>;
// }

// function Courses(){
//   return <h1>Courses</h1>;
//   }

//   function Contact(){
//     return <h1>Contact</h1>;
//     }

//     function SignIn(){
//       return <h1>SignIn</h1>
//     }


function App() {
  const [CartItems,setCartItems]=useState([]);
  const courses=[
    { id:1,name:"course 1", price:50},
    { id:2,name:"course 2", price:75},
    { id:3,name:"course 3", price:100},];
    const AddToCart=(course)=>{
      setCartItems([...CartItems,course]);
    };
  
  return (
    <div className="App">
      <h1>online Courses</h1><Courses courses={courses} onAddTOCart={addToCart}/>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item)=>(<li key={item.id}>
            {item.name}-${item.price}
            </li>
            ))}
        </ul>
      </div>
    </div>);
    
    <BrowserRouter>
    <NavBar/>
    {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">AboutUs</Link>
        </li>
        <li>
          <Link to="/Courses">Courses</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>
      </ul>
    </nav> */}
    <Routes>
    <Route Path='/'element={<Home/>}></Route>
      <Route Path='/AboutUs'element={<AboutUs/>}></Route>
      <Route Path='/Courses'element={<Courses/>}></Route>
      <Route path='/Contact'element={<Contact/>}></Route>
      <Route path='/SignIn'element={<SignIn/>}></Route>
    </Routes>
    </BrowserRouter>
    
 

}

export default App;

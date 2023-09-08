// import React from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../downloadcc.png';
// import {useSelector} from 'react-redux'

// const NavBar = () => {
//   const items=useSelector((state)=>state.cart)
//   console.log(items.length)
//   return (
//     <div style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       padding: "10px",
//       borderBottom: "1px solid #ccc",
//     }}>
//       <div>
//         <img src={Logo} alt="Company Logo" className="w-[50px]" />
//       </div>
//       <div>
//         <Link className="navLink" to="/">
//           Home
//         </Link>
//         <Link className="navLink" to="/courses">
//           Courses
//         </Link>
//         <Link className="navLink" to="/aboutUs">
//           About Us
//         </Link>
//         <Link className="navLink" to="/cart">
//           Cart
//         </Link>
//         <span className="cartCount">Cart items:0</span>
//       </div>
//     </div>
//   );
// }

// export default NavBar;


import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../downloadcc.png';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartCount = cartItems.length;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div>
        <img src={Logo} alt="Company Logo" className="w-[50px]" />
      </div>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/courses">
          Courses
        </Link>
        <Link className="navLink" to="/aboutUs">
          About Us
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {cartCount}</span>
      </div>
    </div>
  );
};

export default NavBar;
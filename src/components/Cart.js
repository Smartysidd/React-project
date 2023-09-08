// import React from "react";
// import {useSelector} from 'react-redux'
// import Courses from "./Courses";

// const Cart = ({ cartItems, onRemoveFromCart }) => {
//   return (
//     <div>
//     <div className="carWrappert">
//       {
//         Courses.map((item)=>(
//           <div className='cartCard'>
//             <img src={item.image}></img>
//             <h5>{item.title}</h5>
//             <h5>Price:${item.price}</h5>
//           </div>
//         ))
// }
// </div>
// </div>
//   )}

// export default Cart;

import React from "react";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div className='cartCard' key={item.id}>
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <h5>Price: ${item.price}</h5>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

// import React from 'react';
// import useCartStore from '../cartStore'; // Adjust path as per your project structure

// const CartPage = () => {
//   const { cartItems, removeFromCart, clearCart } = useCartStore((state) => ({
//     cartItems: state.cartItems,
//     removeFromCart: state.removeFromCart,
//     clearCart: state.clearCart,
//   }));

//   console.log("cart items form cart page", cartItems);

//   const handleRemoveFromCart = (itemId) => {
//     removeFromCart(itemId); // Remove item from Zustand cart items
//   };

//   const handleClearCart = () => {
//     clearCart(); // Clear all items from Zustand cart items
//   };

//   // Ensure cartItems.items is defined and is an array before mapping
//   const items = cartItems.items || [];

//   return (
//     <div className="container mx-auto mt-16 py-10">
//       <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">Shopping Cart</h2>
      
//       {items.length === 0 ? (
//         <h1>Your cart is empty.</h1>
//       ) : (
//         <div className="grid grid-cols-3 gap-4">
//           {items.map((item) => (
//             <div key={item._id} className="bg-white p-4 shadow-md rounded-md">
//               <img src={item.image_url} alt={item.name} className="w-24 h-32 object-cover rounded-md" />
//               <div className="mt-2">
//                 <h3 data-aos="fade-up" className="text-lg font-semibold">Book Name:{item.name}</h3>
//                 <p data-aos="fade-up" className="text-gray-500">Author:{item.author}</p>
                
//                 <p data-aos="fade-up" className="text-gray-500">Genre:{item.genre}</p>
//                 <p data-aos="fade-up" className="text-gray-500">Ratings: {item.ratings}</p>
//                 <button
//                   className="bg-red-500 text-white px-3 py-1 rounded-md mt-2"
//                   onClick={() => handleRemoveFromCart(item._id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {items.length > 0 && (
//         <div className="mt-4">
//           <button data-aos="fade-up"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
//             onClick={handleClearCart}
//           >
//             Clear Cart
//           </button>
//           <button data-aos="fade-up" className="bg-green-500 text-white px-4 py-2 rounded-md">
//             Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;


import React from 'react';
import useCartStore from '../cartStore'; // Adjust path as per your project structure

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCartStore((state) => ({
    cartItems: state.cartItems,
    removeFromCart: state.removeFromCart,
    clearCart: state.clearCart,
  }));

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId); // Remove item from Zustand cart items
  };

  const handleClearCart = () => {
    clearCart(); // Clear all items from Zustand cart items
  };

  // Ensure cartItems.items is defined and is an array before mapping
  const items = cartItems.items || [];

  return (
    <div className="container mx-auto mt-16 py-10">
      <h2 data-aos="fade-up" className="text-3xl font-bold mb-4">Shopping Cart</h2>
      
      {items.length === 0 ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-4 shadow-md rounded-md flex">
              <div className="w-24 h-32 mr-4">
                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h3 data-aos="fade-up" className="text-lg font-semibold">Book Name: {item.name}</h3>
                  <p data-aos="fade-up" className="text-gray-500">Author: {item.author}</p>
                  <p data-aos="fade-up" className="text-gray-500">Genre: {item.genre}</p>
                  <p data-aos="fade-up" className="text-gray-500">Ratings: {item.ratings}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md mt-2"
                  onClick={() => handleRemoveFromCart(item._id)} // Pass item ID to remove
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-4">
          <button
            data-aos="fade-up"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <button data-aos="fade-up" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

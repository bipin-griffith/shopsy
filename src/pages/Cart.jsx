import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>${item.price} x {item.quantity}</p>
                </div>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            <button onClick={() => dispatch(clearCart())} className="bg-primary text-white py-2 px-6 rounded-full">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
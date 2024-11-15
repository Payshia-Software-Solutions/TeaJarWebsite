"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Link from "next/link";

function CartSideBar({ closeCart }) {
  const [cart, setCart] = useState([]);
  const sidebarRef = useRef(null); // Ref for the sidebar

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    // const savedCart = localStorage.getItem("cart");
    console.log(savedCart);
    if (savedCart) {
      setCart(savedCart);
      console.log(cart);
    }
  }, []);

  // Detect clicks outside the cart sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeCart(); // Close the cart if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeCart]);

  // Save cart to localStorage whenever it changes
  //   useEffect(() => {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }, [cart]);

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);

      // Update localStorage after removing the item
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) => {
      // Map over the cart to find and update the product quantity
      const updatedCart = prevCart
        .map((item) => {
          if (item.id === productId) {
            const newQuantity = item.quantity + delta;
            // Return the item with updated quantity if newQuantity > 0
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter((item) => item !== null); // Filter out items with quantity <= 0

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart; // Update the state with the modified cart
    });
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="relative">
      <div
        ref={sidebarRef}
        style={{ position: "fixed", zIndex: 1000 }}
        className="right-0 top-0 h-full w-96 bg-white shadow-lg p-4 overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 border-b py-2"
              >
                <img
                  src={`https://kdu-admin.payshia.com/pos-system/assets/images/products/${item.id}/${item.imgUrl}`}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.productName}</h3>
                  <p className="text-gray-600">
                    {item.price} x {item.quantity}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:bg-gray-100 rounded ml-2"
                    >
                      <FiTrash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>{totalPrice.toFixed(2)}</span>
              </div>
              <Link href="/cart">
                <button className="w-full mt-4 bg-black text-white py-2 rounded hover:bg-gray-800">
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSideBar;

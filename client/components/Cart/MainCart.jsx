"use client";
import React, { useState, useEffect } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";

const MainCart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // // Save cart to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

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
    <div className="mt-14 px-4 sm:px-8 md:px-14">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="hidden sm:table-row">
                  <th className="text-left">Image</th>
                  <th className="text-left">Product Name</th>
                  <th className="text-right">Price</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-right">Total</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b flex flex-col sm:table-row sm:flex-row items-center sm:items-start"
                  >
                    <td className="py-2 flex justify-center sm:table-cell">
                      <img
                        src={`https://kdu-admin.payshia.com/pos-system/assets/images/products/${item.id}/${item.imgUrl}`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                    </td>
                    <td className="py-2 text-center sm:text-left sm:table-cell">
                      <h3 className="font-semibold">{item.productName}</h3>
                    </td>
                    <td className="py-2 text-center sm:text-right sm:table-cell">
                      <p className="text-gray-600">LKR {item.price}</p>
                    </td>
                    <td className="py-2 text-center sm:table-cell">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="py-2 text-center sm:text-right sm:table-cell">
                      <p className="font-semibold">
                        LKR {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </td>
                    <td className="py-2 text-center sm:table-cell">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between text-sm sm:text-base font-semibold">
            <span>Total:</span>
            <span>LKR {totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-end mt-4">
            <Link href="checkout">
              <button className="bg-black text-white px-4 py-2 text-sm sm:text-base rounded hover:bg-gray-600">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;

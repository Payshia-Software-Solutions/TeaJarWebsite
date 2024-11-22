"use client";
import React, { useState, useEffect } from "react";
import config from "@/config";

const OrderSummary = ({
  setPromoCode,
  setFinalPayAmount,
  setDiscountAmount,
}) => {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState(""); // Entered coupon code
  const [discount, setDiscount] = useState(0); // Discount amount
  const [finalAmount, setFinalAmount] = useState(0); // Final amount after discount
  const [couponError, setCouponError] = useState(""); // Error message
  const [loading, setLoading] = useState(false); // Loading state for validation

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const shippingFee = 0;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Update final amount when discount or cart changes
  useEffect(() => {
    setFinalAmount(totalPrice + shippingFee - discount);
  }, [totalPrice, shippingFee, discount]);

  // Fetch promo code details
  const validateCoupon = async () => {
    if (!coupon) {
      setCouponError("Please enter a valid coupon code.");
      return;
    }

    setLoading(true);
    setCouponError("");

    try {
      const response = await fetch(
        `${config.API_BASE_URL}/promo_codes/by_code/${coupon}`
      );
      const data = await response.json();

      if (!data.is_active) {
        setCouponError("This promo code is not active.");
      } else {
        const now = new Date();
        const startDate = new Date(data.start_date);
        const endDate = new Date(data.end_date);

        if (now < startDate || now > endDate) {
          setCouponError("This promo code is expired.");
        } else if (totalPrice < parseFloat(data.min_order_value)) {
          setCouponError(
            `Minimum order value of Rs. ${data.min_order_value} is required.`
          );
        } else {
          const discountValue =
            data.discount_type === "percentage"
              ? (totalPrice * parseFloat(data.discount_value)) / 100
              : parseFloat(data.discount_value);

          const calculatedFinalPayAmount =
            totalPrice + shippingFee - discountValue;

          setDiscount(discountValue);
          setPromoCode(coupon);
          setDiscountAmount(discountValue);
          setFinalPayAmount(calculatedFinalPayAmount); // Use the calculated value here
          console.log(calculatedFinalPayAmount);
          setCouponError(""); // Clear any errors
        }
      }
    } catch (error) {
      setCouponError("Failed to validate the coupon code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Product Items */}
      {cart.map((item) => (
        <div key={item.id} className="flex items-start mb-4">
          <img
            src={`https://kdu-admin.payshia.com/pos-system/assets/images/products/${item.id}/${item.imgUrl}`}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-xl"
          />
          <div className="ml-4 flex-1">
            <h4 className="font-medium text-sm">{item.productName}</h4>
            <p className="text-sm mt-1">
              LKR {item.price} x {item.quantity}
            </p>
          </div>
          <span className="text-xs flex items-center justify-center">
            LKR {(item.quantity * item.price).toFixed(2)}
          </span>
        </div>
      ))}

      {/* Discount Code Input */}
      <div className="flex mb-4">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Discount code or gift card"
          className="w-full p-2 text-black rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          onClick={validateCoupon}
          disabled={loading}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-r-md font-semibold"
        >
          {loading ? "Validating..." : "Apply"}
        </button>
      </div>
      {couponError && <p className="text-red-500 text-sm">{couponError}</p>}

      {/* Subtotal and Shipping */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Rs {shippingFee.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-500">
            <span>Discount</span>
            <span>- Rs {discount.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t border-gray-700 mt-4 pt-4">
        <div className="flex justify-between items-center font-semibold text-lg">
          <span>Total</span>
          <span>Rs {finalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

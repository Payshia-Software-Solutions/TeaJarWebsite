"use client";
import React, { useState, useEffect } from "react";
import ContactForm from "@/components/Checkout/ContactForm";
import DeliveryForm from "@/components/Checkout/DeliveryForm";
import ShippingMethod from "@/components/Checkout/ShippingMethod";
import PaymentOptions from "@/components/Checkout/PaymentOptions";
import BillingAddressForm from "@/components/Checkout/BillingAddress";
import PaymentNotice from "@/components/Checkout/PaymentNotice";
import OrderSummary from "@/components/Checkout/OrderSummary";
import Payment from "@/components/Payment/Payment";
import config from "@/config";

const MainPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [cart, setCart] = useState([]);
  const [finalAmount, setFinalAmount] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  useEffect(() => {
    // Load cart data from localStorage (or other storage mechanism)
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    const totalAmount = cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setFinalAmount(totalAmount);
  }, []);

  const handlePayment = async () => {
    // Collect data from forms
    const orderData = {
      items: cart,
      totalAmount: finalAmount,
      shippingFee: shippingFee,
      paymentMethod: selectedPaymentMethod,
      contactDetails: {
        email: contactEmail,
        phone: contactPhone,
      },
      shippingAddress: deliveryAddress,
      billingAddress: billingAddress,
    };

    try {
      const response = await fetch(
        `${config.API_BASE_URL}/payment/initiate-payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Order creation failed");
      }

      const data = await response.json();

      if (data.payment_url) {
        // Redirect to PayHere payment page
        window.location.href = data.payment_url;
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an issue processing your order.");
    }
  };
  return (
    <section className="py-20">
      <div className="w-full container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/2 p-4">
            <ContactForm
              setContactEmail={setContactEmail}
              setContactPhone={setContactPhone}
            />
            <DeliveryForm setDeliveryAddress={setDeliveryAddress} />
            <BillingAddressForm setBillingAddress={setBillingAddress} />
            <ShippingMethod />
            <BillingAddressForm setBillingAddress={setBillingAddress} />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 p-4">
            <OrderSummary
              cart={cart}
              finalAmount={finalAmount}
              shippingFee={shippingFee}
            />

            <PaymentOptions
              setSelectedPaymentMethod={setSelectedPaymentMethod}
            />
            <PaymentNotice />

            <div className="mx-auto p-6 bg-white">
              <button
                onClick={handlePayment}
                className="w-full px-6 py-3 text-white bg-black rounded-lg text-center font-semibold hover:bg-gray-800"
              >
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;

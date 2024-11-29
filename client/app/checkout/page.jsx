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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [deliveryAddress, setDeliveryAddress] = useState({});
  const [billingAddress, setBillingAddress] = useState({});
  const [cart, setCart] = useState([]);
  const [finalAmount, setFinalPayAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [sameAddressStatus, setSameAddressStatus] = useState(1);
  const [contactDetails, setContactDetails] = useState({
    email: "",
    subscribe: false,
  });
  const [promoCode, setPromoCode] = useState(0);

  useEffect(() => {
    // Load cart data from localStorage (or other storage mechanism)
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);

    const totalAmount = cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setFinalPayAmount(totalAmount);
  }, []);

  const handlePayment = async () => {
    // Validate contact details
    if (!contactDetails.email || !validateEmail(contactDetails.email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validate delivery address
    if (
      !deliveryAddress.firstName ||
      !deliveryAddress.lastName ||
      !deliveryAddress.address ||
      !deliveryAddress.city ||
      !deliveryAddress.postalCode
    ) {
      toast.error("Please fill in all required fields for delivery.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validate billing address if applicable
    if (
      sameAddressStatus === 0 &&
      (!billingAddress.firstName ||
        !billingAddress.lastName ||
        !billingAddress.address ||
        !billingAddress.city ||
        !billingAddress.postalCode)
    ) {
      toast.error("Please fill in all required fields for billing address.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validate promo code if provided
    if (promoCode && !isValidPromoCode(promoCode)) {
      toast.error("Invalid promo code.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Validate payment method
    if (!selectedPaymentMethod) {
      toast.error("Please select a payment method.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Collect data from forms
    const orderData = {
      items: cart,
      totalAmount: finalAmount,
      discountAmount: discountAmount,
      shippingFee: shippingFee,
      promoCode: promoCode,
      paymentMethod: selectedPaymentMethod,
      contactDetails: contactDetails,
      shippingAddress: deliveryAddress,
      billingAddress: billingAddress,
      sameAddressStatus: sameAddressStatus,
    };
    // console.log(orderData);

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

      const html = await response.text(); // Read the response as HTML text

      // Create a new div element to inject the HTML into the page
      const iframeContainer = document.createElement("div");
      iframeContainer.innerHTML = html;

      // Check if the response contains the form and submit it
      const form = iframeContainer.querySelector("form");
      if (form) {
        document.body.appendChild(form); // Append the form to the document body
        form.submit(); // Submit the form to initiate the payment
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an issue processing your order.");
    }
  };

  // Helper function to validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Helper function to validate promo code (you can adjust this based on your criteria)
  const isValidPromoCode = (code) => {
    // Example validation: check if promo code has at least 5 characters
    return code.length >= 5;
  };
  return (
    <section className="pt-20 md:py-28">
      <div className="w-full container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/2 p-4">
            <ContactForm setContactDetails={setContactDetails} />
            <DeliveryForm setDeliveryAddress={setDeliveryAddress} />
            <BillingAddressForm
              shippingAddress={deliveryAddress}
              setBillingAddress={setBillingAddress}
              setSameAddressStatus={setSameAddressStatus}
            />
            <ShippingMethod />
          </div>
          {/* Right Column */}
          <div className="w-full md:w-1/2 p-4">
            <OrderSummary
              cart={cart}
              finalAmount={finalAmount}
              shippingFee={shippingFee}
              setPromoCode={setPromoCode}
              setFinalPayAmount={setFinalPayAmount}
              setDiscountAmount={setDiscountAmount}
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
      <ToastContainer />
    </section>
  );
};

export default MainPage;

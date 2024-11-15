import React from "react";
import ContactForm from "@/components/Checkout/ContactForm";
import DeliveryForm from "@/components/Checkout/DeliveryForm";
import ShippingMethod from "@/components/Checkout/ShippingMethod";
import PaymentOptions from "@/components/Checkout/PaymentOptions";
import BillingAddressForm from "@/components/Checkout/BillingAddress";
import PaymentNotice from "@/components/Checkout/PaymentNotice";
import OrderSummary from "@/components/Checkout/OrderSummary";
import Payment from "@/components/Payment/Payment";

const MainPage = () => {
  return (
    <section className="py-20">
      <div className="w-full container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <ContactForm />
            <DeliveryForm />
            <ShippingMethod />
            <BillingAddressForm />
          </div>
          <div className="w-1/2">
            <OrderSummary />
            <PaymentOptions />
            <PaymentNotice />
          </div>
        </div>
      </div>
      <Payment />
    </section>
  );
};

export default MainPage;

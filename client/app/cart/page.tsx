import React from "react";
import MainCart from "@/components/Cart/MainCart";

const CartPage = () => {
  return (
    <section className=" py-16">
      <div className="w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white text-center mt-10">
          Cart
        </h2>
        {/*test* */}
        <MainCart />
      </div>
    </section>
  );
};

export default CartPage;

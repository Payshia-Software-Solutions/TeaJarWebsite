import React from "react";

function FinestCeylonTea() {
  return (
    <section className="bg-babout py-16">
      <div className="mx-auto max-w-screen-xl px-8 py-4 sm:px-6 lg:px-96">
        <div className="text-center text-white font-italiana">
          <h2 className="text-[48px]">Finest Ceylon Tea</h2>
          <p className="leading-8 mt-4 max-w-2xl mx-auto">
            Finest Ceylon Tea is a premium blend of handpicked tea leaves from
            Sri Lanka's lush highlands, offering a rich, aromatic flavor with a
            hint of citrus, perfect for a refreshing cup any time of day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center text-white text-[40px] mt-16">
        <div className="text-center">
          <img
            src="/assets/images/fct/fct1.png"
            alt="Ethical Grown"
            className="object-cover mx-auto"
          />
          <p className="font-italiana mt-2">Ethical Grown</p>
        </div>

        <div className="text-center">
          <img
            src="/assets/images/fct/fct2.png"
            alt="Hand Picked"
            className="object-cover mx-auto"
          />
          <p className="font-italiana mt-2">Hand Picked</p>
        </div>

        <div className="text-center">
          <img
            src="/assets/images/fct/fct3.png"
            alt="Packaging"
            className="object-cover mx-auto"
          />
          <p className="font-italiana mt-2">Packaging</p>
        </div>
      </div>
    </section>
  );
}

export default FinestCeylonTea;

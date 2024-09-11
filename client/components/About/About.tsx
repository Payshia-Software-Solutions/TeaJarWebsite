import React from "react";


function About() {
  return (
    <section className="bg-babout text-white">
      
      <div className="mx-auto max-w-screen-2xl px-8 py-16  sm:px-6 lg:px-96">
        <div className="text-center">
          <h1 className="text-[64px] -font-bold text-white font-italiana">
            About Us
          </h1>
          <div className="text-white leading-8 mt-8 font-italiana">
            The Green Leaf Cafe was established three years ago in the heart of
            Portland, Oregon, as a place dedicated to sustainability and respect
            for nature. Committed to reducing plastic use and pollution, we
            offer organic and locally sourced, seasonal food. Our café is not
            just a spot to enjoy delicious and healthy meals; it's also a hub
            for those who wish to make conscious choices and adopt a sustainable
            lifestyle. Every meal and beverage served is a testament to our deep
            respect for nature, providing a culinary experience that combines
            taste with environmental awareness
          </div>
          <div>
            <p className="text-white mt-4 font-italiana">
              Read More <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

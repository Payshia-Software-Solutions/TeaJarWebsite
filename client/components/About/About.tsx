import React from "react";
import { Italiana, Julius_Sans_One } from "@next/font/google";
import {
  faCoffee,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});


function About() {
  return (
    <section className="bg-babout text-white">
      <div className="mx-auto max-w-screen-2xl px-8 py-16  sm:px-6 lg:px-96">
        <div className="text-center">
          <div className={italiana.className}>
            <h1 className="text-[64px] -font-bold text-white">About Us</h1>
          </div>
          <div className={juliusSansOne.className}>
            <div className="text-white leading-8 mt-8 ">
              The Green Leaf Cafe was established three years ago in the heart
              of Portland, Oregon, as a place dedicated to sustainability and
              respect for nature. Committed to reducing plastic use and
              pollution, we offer organic and locally sourced, seasonal food.
              Our café is not just a spot to enjoy delicious and healthy meals;
              it's also a hub for those who wish to make conscious choices and
              adopt a sustainable lifestyle. Every meal and beverage served is a
              testament to our deep respect for nature, providing a culinary
              experience that combines taste with environmental awareness
            </div>
          </div>
          <div className={italiana.className}>
            <p className="text-white mt-4 ">
              Read More <br />
              <button className=''>
                
                <FontAwesomeIcon
                  icon={faArrowCircleDown}
                  className="w-8 h-8 mt-2"
                />
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

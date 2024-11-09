import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

// Font import
import { Montserrat } from "next/font/google"; // Using Montserrat for thin 100

const montserratThin = Montserrat({
  weight: "100", // Thin weight (100) for both header and description
  subsets: ["latin"],
  style: "italic", // Use a string instead of an array here
});

function ContactForm() {
  return (
    <div className="container mx-auto px-8 py-8 bg-[#353D32] rounded-xl text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Contact Information */}
        <div className="bg-babout bg-opacity-50 p-4 rounded-xl shadow-md col-span-1 max-w-full md:max-w-sm md:max-h-96">
          <div className="my-4">
            <div className={montserratThin.className}>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FiPhone className="mr-2 text-teal-600 w-6 h-6" />
                Phone number:
              </h3>
              <p className="text-lg ml-8">+94 11 482 2000</p>
            </div>
          </div>
          <div className="my-4">
            <div className={montserratThin.className}>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FiMail className="mr-2 text-teal-600 w-6 h-6" />
                Email:
              </h3>
              <p className="ml-8 text-lg">orders@dilmahtea.com</p>
            </div>
          </div>
          <div className="my-4">
            <div className={montserratThin.className}>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <GoLocation className="mr-2 text-teal-600 w-6 h-6" />
                Address:
              </h3>
              <p className="text-lg ml-8">
                Dilmah Ceylon Tea Company PLC, <br />
                111, Negombo Road, <br />
                Peliyagoda (11830), <br />
                Sri Lanka.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form Fields */}
        <div className="col-span-1 md:col-span-2 md:mx-0 mx-4">
          <form className="space-y-4">
            <div className={montserratThin.className}>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full p-3 border bg-babout border-black rounded-md"
                  placeholder="Full Name"
                />
              </div>
              <div className="mt-1">
                <input
                  type="email"
                  className="w-full p-3 border bg-babout border-black rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full p-3 border bg-babout border-black rounded-md"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full p-3 border bg-babout border-black rounded-md"
                  placeholder="Subject Topic"
                />
              </div>
              <div className="mt-1">
                <textarea
                  className="w-full p-3 border bg-babout border-black rounded-md"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="items-start space-y-2 mt-2">
                <div>
                  <input type="checkbox" id="newsletter" />
                  <label className="ml-2" htmlFor="newsletter">
                    Signup for Our Newsletter
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="policy" />
                  <label className="ml-2" htmlFor="policy">
                    Confirm acceptance of our Privacy Policy
                  </label>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-6 mt-4 py-3 bg-teal-600 text-white rounded-md"
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

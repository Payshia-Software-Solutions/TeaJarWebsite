import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

// Font import
import { Italiana, Montserrat, Julius_Sans_One } from "next/font/google"; // Using Montserrat for thin 100

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "300", // Set the weight to thin (100)
  style: "italic", // Set the style to italic
  subsets: ["latin"],
});
const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function ContactForm() {
  return (
    <div className="container mb-6 mx-auto  py-8 px-6 md:px-8 lg:px-24 bg-gray-50 rounded-xl text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side - Contact Information */}
        <div className="bg-gray-100 bg-opacity-50 p-4 rounded-xl shadow-md col-span-1 max-w-full md:max-w-sm md:max-h-96">
          <div className="my-4">
            <div className={italiana.className}>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FiPhone className="mr-2 text-teal-600 w-6 h-6" />
                Phone number:
              </h3>{" "}
            </div>
            <div className={juliusSansOne.className}>
              <p className="text-lg ml-8">+9470 11 98 800</p>
            </div>
          </div>
          <div className="my-4">
            <div className={italiana.className}>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <FiMail className="mr-2 text-teal-600 w-6 h-6" />
                Email:
              </h3>{" "}
            </div>
            <div className={juliusSansOne.className}>
              <p className="ml-8 text-lg"> info@teajarceylon.com</p>
            </div>
          </div>
          <div className="my-4">
            <div className={italiana.className}>
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <GoLocation className="mr-2 text-teal-600 w-6 h-6" />
                Address:
              </h3>{" "}
            </div>
            <div className={juliusSansOne.className}>
              <p className="text-lg ml-8">
              KDU Exports PVT LTD,<br />
              Galpadithanna Tea Factory,<br />
              Lellopitiya, <br />
              Rathnapura.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form Fields */}
        <div className="col-span-1 md:col-span-2 md:mx-0 mx-4">
          <form className="space-y-4">
            <div className={juliusSansOne.className}>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full p-3 border bg-white border-black rounded-md"
                  placeholder="Full Name"
                />
              </div>
              <div className="mt-1">
                <input
                  type="email"
                  className="w-full p-3 border bg-white border-black rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full p-3 border bg-white border-black rounded-md"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  className="w-full p-3 border bg-white border-black rounded-md"
                  placeholder="Subject Topic"
                />
              </div>
              <div className="mt-1">
                <textarea
                  className="w-full p-3 border bg-white border-black rounded-md"
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

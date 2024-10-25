import React from "react";
import ContactTitle from "@/components/Contact Us/ContactTitle";

// Font import
import { Italiana, Montserrat } from "next/font/google"; // Add Montserrat for thin italic

const montserrat = Montserrat({
  weight: "300", // Set the weight to thin (300)
  style: "italic", // Set the style to italic
  subsets: ["latin"],
});

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

function ContactUs() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      {/* Heading */}
      <div className="mb-4 text-center">
        <div className={italiana.className}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Contact Us
          </h2>
        </div>
        <div className="border-b-4 md:border-b-6 lg:border-b-8 border-[#bc9307] my-4 md:my-5"></div>
      </div>

      {/* Image */}
      <div className="w-full h-60 md:h-80 lg:h-96 mt-4">
        <img
          src="/assets/images/home/tea-jar.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content below the image */}
      <div className="mt-6">
        <ContactTitle
          header={"Need Help? Send Us Your Message"}
          description={
            "We are committed to providing you with an excellent experience at Dilmah Online Shop. If you can’t find what you’re looking for in the FAQs, wish to comment on your experience, or just want a suggestion, please do not hesitate to contact us either via the telephone number provided below between the office hours of 9 AM and 5 PM or by using the below contact form. We aim to answer all inquiries sent via the contact form within 24 hours, however please allow us a period of 48 hours to get back to you over weekends or busy periods."
          }
        />
      </div>

      <div className="mt-6">
        <ContactTitle
          header={"Special Orders"}
          description={
            "Registered customers can enjoy the convenience of placing special orders to suit their specific needs and budget and receive a custom quote, especially when buying in bulk. Please select “Special Orders” under Subject Topic below and fill the details and send us your requirements, we will contact you within 24 hours."
          }
        />
      </div>

      <div className="mt-6">
        <ContactTitle header={"Address: (Street)"} />
        <div className={`${montserrat.className} text-sm md:text-base`}>
          <p>
            111 Negombo Road <br />
            Peliyagoda <br /> Sri Lanka
          </p>
        </div>
      </div>

      <div className="mt-6">
        <ContactTitle header={"Telephone:"} />
        <div className={`${montserrat.className} text-sm md:text-base`}>
          <p>
            General line (auto answer) <br />
            +94 11 482 2000
            <br />
            Your call will be answered automatically and prompted for extension
            number. You may then wait for an operator to come on line or dial the required extension.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <ContactTitle header={"Fax:"} />
        <div className={`${montserrat.className} text-sm md:text-base`}>
          <p>
            General fax (All Tea Companies) <br />
            +94 11 482 2001
          </p>
          <div className="my-1">
            <label>Email:</label>
            <p>orders@dilmahtea.com</p>
          </div>
          <p className="mt-4 mb-2">
            If you wish to comment on your experience with a Dilmah Tea product or if you require any information, please fill in the following details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

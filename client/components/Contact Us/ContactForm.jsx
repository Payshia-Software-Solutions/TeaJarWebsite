"use client";
import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import config from "@/config";

function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
    policy: false,
  });

  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    policy: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Check if full name is empty
    if (!formData.full_name.trim()) {
      formErrors.full_name = "Full name is required.";
      isValid = false;
    }

    // Check if email is valid
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    // Check if phone number is provided and valid
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone)) {
      formErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }

    // Check if Subject is empty
    if (!formData.subject.trim()) {
      formErrors.subject = "Subject is required.";
      isValid = false;
    }

    // Check if message is provided
    if (!formData.message.trim()) {
      formErrors.message = "Message is required.";
      isValid = false;
    }

    // Check if policy is accepted
    if (!formData.policy) {
      formErrors.policy = "You must accept the privacy policy.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(`${config.API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          newsletter: false,
          policy: false,
        });
        setErrors({});
      } else {
        alert("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="container mb-6 mx-auto py-8 px-6 md:px-8 lg:px-24 rounded-xl text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 bg-opacity-50 p-4 rounded-xl shadow-md col-span-1 max-w-full md:max-w-sm">
          <div className="my-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <FiPhone className="mr-2 text-teal-600 w-6 h-6" />
              Phone number:
            </h3>
            <p className="text-lg ml-8">+9470 55 08 800</p>
          </div>
          <div className="my-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <FiMail className="mr-2 text-teal-600 w-6 h-6" />
              Email:
            </h3>
            <p className="ml-8 text-lg">marketing@teajarceylon.com</p>
          </div>
          <div className="my-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <GoLocation className="mr-2 text-teal-600 w-6 h-6" />
              Corporate Address:
            </h3>
            <p className="text-lg ml-8">
              KDU Exports PVT LTD, <br />
              427 A, Galle Road, <br />
              Colombo 03, <br />
              Sri Lanka.
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="full_name"
              className="w-full p-3 border bg-white border-black rounded-md"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm">{errors.full_name}</p>
            )}
            <input
              type="email"
              name="email"
              className="w-full p-3 border bg-white border-black rounded-md"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <input
              type="text"
              name="phone"
              className="w-full p-3 border bg-white border-black rounded-md"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
            <input
              type="text"
              name="subject"
              className="w-full p-3 border bg-white border-black rounded-md"
              placeholder="Subject Topic"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject}</p>
            )}
            <textarea
              name="message"
              className="w-full p-3 border bg-white border-black rounded-md"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label for="newsletter" className="ml-2">
                Signup for Our Newsletter
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="policy"
                checked={formData.policy}
                onChange={handleChange}
              />
              <label for="policy" className="ml-2">
                Confirm acceptance of our Privacy Policy
              </label>
            </div>
            {errors.policy && (
              <p className="text-red-500 text-sm">{errors.policy}</p>
            )}
            <button
              type="submit"
              className="px-6 mt-4 py-3 bg-teal-600 text-white rounded-md"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

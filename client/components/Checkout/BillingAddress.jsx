"use client";
import React, { useState } from "react";
export default function BillingAddressForm() {
  const [useDifferentAddress, setUseDifferentAddress] = useState(false);

  return (
    <div className=" mx-auto p-6 bg-white">
      <h2 className="text-lg font-medium mb-4">Billing Address</h2>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="billingAddress"
            className="form-radio h-4 w-4 text-blue-600"
            checked={!useDifferentAddress}
            onChange={() => setUseDifferentAddress(false)}
          />
          <span>Same as shipping address</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="billingAddress"
            className="form-radio h-4 w-4 text-blue-600"
            checked={useDifferentAddress}
            onChange={() => setUseDifferentAddress(true)}
          />
          <span>Use a different billing address</span>
        </label>
      </div>
      {useDifferentAddress && (
        <form>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Country/Region
            </label>
            <select
              id="country"
              name="country"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Sri Lanka</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 mb-4">
              <label className="block text-sm font-medium mb-1">
                First name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2 mb-4">
              <label className="block text-sm font-medium mb-1">
                Last name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Apartment, suite, etc. (optional)
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2 mb-4">
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2 mb-4">
              <label className="block text-sm font-medium mb-1">
                Postal Code
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Phone (optional)
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      )}
    </div>
  );
}

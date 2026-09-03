import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

const SecureBanner = () => {
  return (
    <div className="w-full bg-teal-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">
              SECURE SHOPPING
              <span className="text-amber-400 ml-2">WITH TEA JAR</span>
            </h2>
            <p className="text-sm mt-1">
              We provide the most secure online shopping experience with us.
            </p>
          </div>

          {/* Right Section - Payment Methods & Security Badges */}
          <div className="flex items-center gap-6">
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <img
                src="/api/placeholder/40/25"
                alt="Apple Pay"
                className="h-6 bg-white rounded"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Google Pay"
                className="h-6 bg-white rounded"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Visa"
                className="h-6 bg-white rounded"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Mastercard"
                className="h-6 bg-white rounded"
              />
              <img
                src="/api/placeholder/40/25"
                alt="American Express"
                className="h-6 bg-white rounded"
              />
              <img
                src="/api/placeholder/40/25"
                alt="JCB"
                className="h-6 bg-white rounded"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Diners Club"
                className="h-6 bg-white rounded"
              />
              <img
                src="/api/placeholder/40/25"
                alt="Discover"
                className="h-6 bg-white rounded"
              />
            </div>

            {/* Security Badges */}
            <div className="flex items-center gap-4 border-l border-teal-500 pl-4">
              <div className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-full mb-1">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-xs">3D Secure Checkout</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-full mb-1">
                  <Lock className="w-6 h-6 text-teal-600" />
                </div>
                <span className="text-xs">PCI-Compliant</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-white p-2 rounded-full mb-1">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-teal-600"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18.5L4 17V8l8 4 8-4v9l-8 3.5z" />
                  </svg>
                </div>
                <span className="text-xs">Payment Data Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureBanner;

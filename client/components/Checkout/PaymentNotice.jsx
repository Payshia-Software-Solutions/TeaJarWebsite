import React from "react";

const PaymentNotice = () => {
  return (
    <div className=" mx-auto p-6 bg-white">
      <div className="p-4 mb-6 bg-yellow-50 border border-yellow-200 rounded-md">
        <div className="flex items-start">
          <div className="ml-3">
            <h3 className="text-sm font-semibold text-yellow-800">
              Important Notice
            </h3>
            <p className="mt-2 text-sm text-yellow-700">
              Please do not close your tab or browser after completing your
              payment. Kindly remain on this tab/browser until you are
              redirected to the order confirmation page to ensure that your
              transaction is processed successfully.
            </p>
          </div>
        </div>
      </div>
      <button className="w-full px-6 py-3 text-white bg-black rounded-lg text-center font-semibold hover:bg-gray-800">
        Pay now
      </button>
    </div>
  );
};

export default PaymentNotice;

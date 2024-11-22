"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Link from "next/link";

const OrderConfirmationPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");

  const [invoiceData, setInvoiceData] = useState(null);
  const [invoiceItemData, setInvoiceItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const crumbs = [
    {
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Order Confirmation", href: "#" },
  ];

  useEffect(() => {
    // Clear cart data
    localStorage.removeItem("cart");

    async function fetchInvoiceData() {
      try {
        setLoading(true);
        const response = await fetch(
          `${config.API_BASE_URL}/invoices/${orderId}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setInvoiceData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchInvoiceItemData() {
      try {
        setLoading(true);
        const response = await fetch(
          `${config.API_BASE_URL}/transaction-invoice-items/by-invoice/${orderId}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setInvoiceItemData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (orderId) {
      fetchInvoiceData();
      fetchInvoiceItemData();
    }
  }, [orderId]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-8">Error: {error}</div>;
  }

  console.log(invoiceData);
  const grandTotal = invoiceItemData.reduce(
    (total, item) =>
      total + item.item_price * item.quantity - item.item_discount,
    0
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-[60px]">
        <Breadcrumb crumbs={crumbs} />
        <div className="py-8 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-4xl font-bold text-black mb-4 text-center">
              Thank you for Shopping with us
            </h1>
            <h2 className="text-xl font-bold text-black mb-4 text-center">
              🎉 Your Order Was Placed Successfully!
            </h2>
            <h2 className="text-lg text-gray-700 text-center mb-8">
              Order ID:{" "}
              <span className="font-medium text-blue-600">{orderId}</span>
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-theme text-white text-sm uppercase">
                    <th className="px-4 py-2">Product ID</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Discount</th>
                    <th className="px-4 py-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceItemData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{item.product_id}</td>
                      <td className="px-4 py-3">{item.quantity}</td>
                      <td className="px-4 py-3">
                        ${item.item_price.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-red-700">
                        ({item.item_discount.toFixed(2)})
                      </td>
                      <td className="px-4 py-3 text-right">
                        {(
                          item.item_price * item.quantity -
                          item.item_discount
                        ).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="font-bold text-gray-800">
                    <td colSpan={4} className="px-4 py-2 text-right">
                      Grand Total
                    </td>
                    <td className="px-4 py-2 text-right">
                      LKR {grandTotal.toFixed(2)}
                    </td>
                  </tr>

                  <tr className="font-bold text-gray-800">
                    <td colSpan={4} className="px-4 py-2 text-right">
                      Discount
                    </td>
                    <td className="px-4 py-2 text-right text-red-700">
                      ( LKR {invoiceData.discount_amount.toFixed(2)})
                    </td>
                  </tr>

                  <tr className="font-bold text-gray-800">
                    <td colSpan={4} className="px-4 py-2 text-right">
                      Total
                    </td>
                    <td className="px-4 py-2 text-right">
                      LKR{" "}
                      {(grandTotal - invoiceData.discount_amount).toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="text-center mt-8">
              <Link href="shop">
                <button className="bg-theme text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-orange-950 transition">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default OrderConfirmationPage;

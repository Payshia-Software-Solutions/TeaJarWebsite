import React, { Suspense } from "react";
import OrderConfirmationPage from "@/components/OrderConfirmationPage"; // Extracted your actual page logic into this component
// Order Confirmation Page Metadata
export const metadata = {
  title: "Order Confirmation | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Thank you for your order! Your Tea Jar order has been successfully placed. We will process it and notify you of the shipping details soon.",
  keywords: [
    "Order Confirmation",
    "Tea Order Confirmation",
    "Ceylon Tea Order",
    "Tea Jar Order",
    "Order Success",
    "Tea Jar Shipping Details",
  ],
  openGraph: {
    title: "Order Confirmation | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Your Tea Jar order has been successfully confirmed. Thank you for choosing us. We'll send you an email with your shipping details soon.",
    url: "https://www.teajarceylon.com/order-confirmation", // Replace with your actual URL
    images: [
      {
        url: "https://www.teajarceylon.com/images/order-confirmation-banner.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Order Confirmation - Tea Jar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Confirmation | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Your Tea Jar order has been successfully placed. We appreciate your purchase and will notify you of your shipping details soon.",
    image: "https://www.teajarceylon.com/images/order-confirmation-banner.jpg", // Replace with your image URL
  },
};
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderConfirmationPage />
    </Suspense>
  );
}

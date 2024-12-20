import React from "react";
// Shipping Policy Page Metadata
export const metadata = {
  title: "Shipping Policy | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Find out about Tea Jar's shipping policy, including delivery times, shipping charges, and regions served. We aim to deliver the finest tea to your doorsteps.",
  keywords: [
    "Shipping Policy",
    "Ceylon Tea Shipping",
    "Tea Delivery",
    "Shipping Terms",
    "Tea Jar Shipping",
  ],
  openGraph: {
    title: "Shipping Policy | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Learn about the shipping options, delivery times, and charges when ordering Ceylon tea from Tea Jar.",
    url: "https://www.teajarceylon.com/shipping-policy",
    images: [
      {
        url: "https://www.teajarceylon.com/images/shipping-policy-banner.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Tea Jar Shipping Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping Policy | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Understand Tea Jar's shipping policy including charges and delivery timelines for Ceylon tea orders.",
    image: "https://www.teajarceylon.com/images/shipping-policy-banner.jpg", // Replace with your image URL
  },
};

function DeliveryAndReturnPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 font-sans pt-40">
      <h1 className="text-3xl font-bold mb-6">Delivery and Return Policy</h1>

      {/* Delivery Policy Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Delivery Policy</h2>
        <p className="mb-4">
          You can track your order via the local courier service's website or by
          logging into your Tea Jar Ceylon account. We provide island-wide
          delivery service to any address you specify. All prices and special
          offers available on this site are only applicable for deliveries
          carried out by our partnered courier companies.
        </p>
      </section>

      {/* Return Policy Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
        <p className="mb-4">
          We are confident that you will enjoy our tea products. However, if you
          need to return your order, please contact us at{" "}
          <a
            href="mailto:marketing@teajarceylon.com"
            className="text-blue-500 hover:underline"
          >
            marketing@teajarceylon.com
          </a>
          . Our goal is your satisfaction.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Conditions for Returning Products:
        </h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            The product must be shipped back to us. Return shipping costs are
            non-refundable unless the return is due to our error, such as a
            product defect.
          </li>
          <li>We can accept product returns up to 30 days after delivery.</li>
          <li>
            We cannot accept a product return that has been largely consumed
            (more than two servings).
          </li>
          <li>
            We cannot accept a product return if you have simply changed your
            mind, such as a preference for a different tea.
          </li>
        </ul>
      </section>

      <footer className="text-sm text-gray-500 mt-8">
        If you have any questions or concerns about our delivery or return
        policy, please contact us at{" "}
        <a
          href="mailto:marketing@teajarceylon.com"
          className="text-blue-500 hover:underline"
        >
          marketing@teajarceylon.com
        </a>
        .
      </footer>
    </div>
  );
}

export default DeliveryAndReturnPolicy;

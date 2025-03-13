import React from "react";
// Terms and Conditions Page Metadata
export const metadata = {
  title: "Terms and Conditions | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Review the Terms and Conditions for using Tea Jar's website. This includes the rules and guidelines for using our online store and services.",
  keywords: [
    "Terms and Conditions",
    "Website Terms",
    "Terms of Service",
    "Tea Jar Terms",
    "Ceylon Tea Terms",
  ],
  openGraph: {
    title: "Terms and Conditions | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Read Tea Jar's Terms and Conditions to understand the rules and guidelines for using our website and services.",
    url: "https://www.teajarceylon.com/terms-and-conditions",
    images: [
      {
        url: "https://www.teajarceylon.com/images/terms-and-conditions-banner.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Tea Jar Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Explore the Terms and Conditions of Tea Jar for a safe and seamless shopping experience.",
    image:
      "https://www.teajarceylon.com/images/terms-and-conditions-banner.jpg", // Replace with your image URL
  },
};

function TermsOfService() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 font-sans pt-40">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="mb-4">
          This website is operated by Tea Jar Ceylon. Throughout this document,
          the terms "we," "us," and "our" refer to Tea Jar. By accessing and
          using this website, including all services, information, and products
          offered, you agree to abide by these Terms of Service as well as all
          related policies and notices provided.
        </p>
        <p className="mb-4">
          By browsing or purchasing from our site, you are engaging with our
          "Service" and are bound by these Terms. These terms also include any
          additional terms and policies referenced in this document or provided
          through links.
        </p>
        <p className="mb-4">
          Please take the time to read these Terms of Service carefully before
          using our website. By accessing or using any portion of the site, you
          confirm your agreement to be bound by these Terms. If you disagree
          with any part of these Terms, you must refrain from using the website
          and services.
        </p>
        <p className="mb-4">
          Our store is hosted by Shopify Inc., which provides us with the
          platform that allows us to sell our products and services to you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 1 - Online Store Terms
        </h2>
        <p className="mb-4">
          By agreeing to these Terms, you confirm that you are of legal age in
          your state or province of residence, or that you have obtained consent
          from a legal guardian to allow a minor dependent to use this site.
        </p>
        <p className="mb-4">
          You must not transmit any harmful code, such as viruses or worms. Any
          violation of these Terms will result in the immediate suspension of
          your access to our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 2 - General Conditions
        </h2>
        <p className="mb-4">
          We reserve the right to refuse service to anyone at any time and for
          any reason. Your content (excluding payment information) may be
          transferred unencrypted and may be altered to conform to the technical
          requirements of different networks or devices.
        </p>
        <p className="mb-4">
          You agree not to reproduce, copy, sell, or exploit any part of the
          Service, or access to the Service, without prior written consent from
          us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 3 - Accuracy, Completeness, and Timeliness of Information
        </h2>
        <p className="mb-4">
          We do not guarantee that all information on this website is complete,
          accurate, or current. Any use of material from this site is at your
          own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 4 - Modifications to the Service and Prices
        </h2>
        <p className="mb-4">
          The prices for our products are subject to change without notice. We
          may modify, suspend, or discontinue any part of the Service at any
          time, without notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 5 - Products or Services
        </h2>
        <p className="mb-4">
          Certain products or services may be available only through the website
          and may have limited availability, with returns or exchanges governed
          by our Return Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 6 - Accuracy of Billing and Account Information
        </h2>
        <p className="mb-4">
          We reserve the right to refuse any order you place with us. We may
          limit or cancel orders based on customer account information, payment
          details, or shipping address.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 7 - Optional Tools
        </h2>
        <p className="mb-4">
          We may provide access to third-party tools that we neither monitor nor
          have control over.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 8 - Third-Party Links
        </h2>
        <p className="mb-4">
          Some content, products, or services available via our Service may
          include materials from third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 9 - User Comments, Feedback, and Other Submissions
        </h2>
        <p className="mb-4">
          If you submit creative ideas, suggestions, or proposals, you agree
          that we may use, modify, or publish such content in any form and
          across any medium without restriction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 10 - Personal Information
        </h2>
        <p className="mb-4">
          The submission of your personal information through the store is
          governed by our{" "}
          <a href="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Section 12 - Prohibited Uses
        </h2>
        <p className="mb-4">
          You are prohibited from using this site for unlawful purposes or to
          encourage illegal activities.
        </p>
      </section>

      <footer className="text-sm text-gray-500 mt-6">
        If you have questions about these Terms of Service, please contact us at{" "}
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

export default TermsOfService;

import React from "react";

// Privacy Policy Page Metadata
export const metadata = {
  title: "Privacy Policy | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Read the Privacy Policy of Tea Jar to learn how we collect, use, and protect your personal data when you shop with us. Your privacy is important to us.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "Privacy Terms",
    "Personal Data",
    "Ceylon Tea Privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Discover how Tea Jar protects your personal information with our privacy policy. Learn more about how we use your data safely.",
    url: "https://www.teajarceylon.com/privacy-policy",
    images: [
      {
        url: "https://www.teajarceylon.com/images/privacy-policy-banner.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Tea Jar Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Read our Privacy Policy to understand how Tea Jar handles and protects your personal data.",
    image: "https://www.teajarceylon.com/images/privacy-policy-banner.jpg", // Replace with your image URL
  },
};

function PrivacyPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 font-sans pt-40">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-6">
        This Privacy Policy explains how your personal information is collected,
        used, and shared when you visit or make a purchase from
        www.teajarceylon.com (the “Site”).
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Personal Information We Collect
      </h2>
      <p className="mb-4">
        When you visit the Site, we automatically collect certain information
        about your device, including details about your web browser, IP address,
        time zone, and some cookies that are installed on your device.
        Additionally, as you browse the Site, we collect information about the
        individual web pages or products that you view, the websites or search
        terms that referred you to the Site, and how you interact with the Site.
        This automatically-collected information is referred to as “Device
        Information.”
      </p>
      <p className="mb-4">
        We collect Device Information using the following technologies:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Cookies:</strong> Small data files placed on your device or
          computer, often containing an anonymous unique identifier. For more
          information about cookies and how to disable them, visit{" "}
          <a
            href="http://www.allaboutcookies.org"
            className="text-blue-500 hover:underline"
          >
            www.allaboutcookies.org
          </a>
          .
        </li>
        <li>
          <strong>Log Files:</strong> Track actions on the Site and gather data
          such as your IP address, browser type, Internet service provider,
          referring/exit pages, and date/time stamps.
        </li>
        <li>
          <strong>Web Beacons, Tags, and Pixels:</strong> These are electronic
          files used to record information about how you browse the Site.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">
        How We Use Your Personal Information
      </h2>
      <p className="mb-4">We use the Order Information we collect to:</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          Process any orders placed through the Site, including payment
          processing, shipping arrangements, and providing order confirmations.
        </li>
        <li>
          Communicate with you regarding your orders and any related matters.
        </li>
        <li>Prevent fraud or monitor for potential risks with your orders.</li>
      </ul>
      <p className="mb-4">We also use the Device Information to help us:</p>
      <ul className="list-disc list-inside mb-6">
        <li>
          Screen for potential fraud or risk (in particular, your IP address).
        </li>
        <li>
          Improve and optimize our Site, generate analytics on how our customers
          browse the Site, and assess the success of marketing and advertising
          campaigns.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">
        Sharing Your Personal Information
      </h2>
      <p className="mb-4">
        We share your Personal Information with trusted third parties to assist
        in the operation of the Site and provide our services. For example:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          We use Shopify to power our online store. You can read more about how
          Shopify uses your Personal Information{" "}
          <a
            href="https://www.shopify.com/legal/privacy"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
          .
        </li>
        <li>
          We use Google Analytics to understand how our customers interact with
          the Site. You can read more about how Google uses your data{" "}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
          , and you can opt out of Google Analytics{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-blue-500 hover:underline"
          >
            here
          </a>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Behavioral Advertising</h2>
      <p className="mb-4">
        We use your Personal Information to deliver targeted advertisements or
        marketing communications that may be of interest to you. For more
        information about how targeted advertising works, you can visit the
        Network Advertising Initiative’s educational page{" "}
        <a
          href="https://www.networkadvertising.org/understanding-online-advertising"
          className="text-blue-500 hover:underline"
        >
          here
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
      <p className="mb-4">
        If you are a resident of the European Economic Area (EEA), you have the
        right to access, correct, update, or delete your personal information.
        If you wish to exercise this right, please contact us using the contact
        information provided below.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
      <p className="mb-6">
        We will retain your Order Information for as long as needed for business
        or legal purposes, including fulfilling any orders, unless you request
        deletion of this information.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy periodically to reflect changes in our
        practices or for other operational, legal, or regulatory reasons.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="mb-4">
        For more information about our privacy practices, if you have any
        questions, or if you would like to make a complaint, please contact us
        by email at{" "}
        <a
          href="mailto:marketing@teajarceylon.com"
          className="text-blue-500 hover:underline"
        >
          marketing@teajarceylon.com
        </a>{" "}
        or by mail at:
      </p>
      <address className="mb-6">
        KDU Exports (PVT) Ltd
        <br />
        Galpadithenne Tea Factory
        <br />
        Lellopitiya, Ratnapura,
        <br />
        Sri Lanka
        <br />
        Phone: (+94)70 11 98 800
      </address>
    </div>
  );
}

export default PrivacyPolicy;

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Our Story": [
      { title: "The Tea Jar Story", href: "/about" },
      { title: "Our Tea Heritage", href: "/heritage" },
      { title: "Sustainable Sourcing", href: "/sustainability" },
      { title: "Tea Growing Regions", href: "/regions" },
    ],
    "Our Policies": [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Refund Policy", href: "/refund" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Shipping Policy", href: "/shipping" },
    ],
    "Quick Links": [
      { title: "Search", href: "/search" },
      { title: "Contact", href: "/contact" },
      { title: "Store Locator", href: "/stores" },
      { title: "Tea Menu", href: "/menu" },
      { title: "Wholesale Program", href: "/wholesale" },
      { title: "Tea Education", href: "/education" },
    ],
  };

  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-serif text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company Information */}
          <div>
            <h3 className="text-white font-serif text-lg mb-4">Tea Jar</h3>
            <div className="space-y-4 text-sm">
              <p>
                Corporate Office: 123 Tea Garden Road,
                <br />
                Kandy, Sri Lanka
              </p>

              <div>
                <p className="mb-2">Customer Service: (+94) 77 123 4567</p>
                <p>Service Hours: Daily 9 am - 6 pm</p>
              </div>

              <div>
                <p className="mb-2">Wholesale Inquiries: (+94) 11 234 5678</p>
                <p>Email: info@teajar.com</p>
              </div>

              <div>
                <p className="font-medium mb-2">Tea Tasting Sessions:</p>
                <a href="/tea-tasting" className="text-white hover:underline">
                  Click Here For Available Slots
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Tea Jar. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <a
                href="https://example.com"
                className="text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Payshia Software Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

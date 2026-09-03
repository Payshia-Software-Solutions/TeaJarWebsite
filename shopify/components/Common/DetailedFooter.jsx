import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Our Story": [
      { title: "The Tea Jar Story", href: "/tea-jar-story" },
      { title: "Our Tea Heritage", href: "/tea-heritage" },
      { title: "KDU Group", href: "/tea-heritage" },
    ],
    "Our Policies": [
      { title: "Privacy Policy", href: "/policies/privacy-policy" },
      { title: "Refund Policy", href: "/policies/refund-policy" },
      { title: "Terms of Service", href: "/policies/terms-and-conditions" },
      { title: "Shipping Policy", href: "/policies/shipping-policy" },
    ],
    "Quick Links": [
      { title: "Search", href: "#" },
      { title: "Contact", href: "/contact" },
      { title: "Store Locator", href: "#" },
      { title: "Tea Menu", href: "#" },
      { title: "Wholesale Program", href: "#" },
      { title: "Tea Education", href: "#" },
    ],
  };

  const socialMediaLinks = [
    {
      href: "https://facebook.com",
      icon: "fab fa-facebook-f",
      label: "Facebook",
    },
    {
      href: "https://instagram.com",
      icon: "fab fa-instagram",
      label: "Instagram",
    },
    { href: "https://youtube.com", icon: "fab fa-youtube", label: "YouTube" },
    { href: "https://tiktok.com", icon: "fab fa-tiktok", label: "TikTok" },
  ];

  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Footer Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white  text-lg mb-4">{title}</h3>
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
          <div className="hidden md:block text-start  ">
            <h3 className="text-white text-lg mb-4">Tea Jar</h3>
            <div className="space-y-4 text-sm ">
              <p>
                Corporate Office: KDU Exports PVT LTD,
                <br />
                427 A, Galle Road, Colombo 03, Sri Lanka
              </p>

              <p>
                Factory: KDU Exports PVT LTD,
                <br />
                Galpadithanna Tea Factory, Lellopitiya,Rathnapura.
              </p>

              <div>
                <p className="mb-2">Customer Service: (+94)70 55 08 800</p>
                <p>Service Hours: Daily 9 am - 6 pm</p>
              </div>

              <div>
                <p className="mb-2">Wholesale Inquiries: (+94)70 55 08 800</p>
                <p>Email: marketing@teajarceylon.com</p>
              </div>

              {/* <div>
                <p className="font-medium mb-2">Tea Tasting Sessions:</p>
                <a href="/tea-tasting" className="text-white hover:underline">
                  Click Here For Available Slots
                </a>
              </div> */}
            </div>
          </div>
        </div>
        {/* Company Information */}
        <div className="md:hidden text-center md:text-start ">
          <h3 className="text-white text-lg mt-8 mb-4">Tea Jar</h3>
          <div className="space-y-4 text-sm ">
            <p>
              Corporate Office: KDU Exports PVT LTD,
              <br />
              427 A, Galle Road, Colombo 03, Sri Lanka
            </p>

            <p>
              Factory: KDU Exports PVT LTD,
              <br />
              Galpadithanna Tea Factory, Lellopitiya,Rathnapura.
            </p>

            <div>
              <p className="mb-2">Customer Service: (+94)70 55 08 800</p>
              <p>Service Hours: Daily 9 am - 6 pm</p>
            </div>

            <div>
              <p className="mb-2">Wholesale Inquiries: (+94)70 55 08 800</p>
              <p>Email: marketing@teajarceylon.com</p>
            </div>

            {/* <div>
                <p className="font-medium mb-2">Tea Tasting Sessions:</p>
                <a href="/tea-tasting" className="text-white hover:underline">
                  Click Here For Available Slots
                </a>
              </div> */}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-white text-lg mb-4">Follow Us</h3>
          <div>
            <a
              href="https://web.facebook.com/teajarceylon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2"
            >
              <Image
                src="https://teajarceylon.com/assets/icons/social/png/facebook.png"
                alt="Facebook"
                width={30}
                height={30}
                className="invert"
              />
            </a>
            <a
              href="https://www.instagram.com/tea_jar_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2"
            >
              <Image
                src="https://teajarceylon.com/assets/icons/social/png/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
                className="invert"
              />
            </a>
            <a
              href="https://www.tiktok.com/@tea_jar_01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2"
            >
              <Image
                src="https://teajarceylon.com/assets/icons/social/png/tiktok.png"
                alt="TikTok"
                width={30}
                height={30}
                className="invert"
              />
            </a>
            <a
              href="https://web.whatsapp.com/send?phone=94705508800&text=hi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2"
            >
              <Image
                src="https://teajarceylon.com/assets/icons/social/png/whatsapp.png"
                alt="WhatsApp"
                width={30}
                height={30}
                className="invert"
              />
            </a>
            <a
              href="https://www.youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mx-2"
            >
              <Image
                src="https://teajarceylon.com/assets/icons/social/png/youtube.png"
                alt="YouTube"
                width={30}
                height={30}
                className="invert"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} Tea Jar. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span>Powered by</span>
              <a
                href="https://www.payshia.com"
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

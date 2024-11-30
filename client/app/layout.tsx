import type { Metadata } from "next";

import { Ubuntu } from "next/font/google";
import { Inter as InterFont } from "next/font/google"; // Renamed to InterFont
import "./globals.css";
import NavBar from "@/components/NavBar";
import DetailedFooter from "@/components/Common/DetailedFooter";
import LoadingBar from "@/components/LoadingBar";
import Script from "next/script";
import { ToastContainer, toast } from "react-toastify";

// Specify the font weights you want to use
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add the weights you need
});

const interFont = InterFont({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tea Jar | Finest Ceylon Tea in Sri Lanka",
  description: "Finest Ceylon Tea in Sri Lanka",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-152K138MCN"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-152K138MCN');
          `,
          }}
        />
      </head>
      <body
        className={`${interFont.className} scroll-smooth`}
        suppressHydrationWarning={true}
      >
        <LoadingBar />
        <NavBar />
        {children}

        {/* ToastContainer to display the notifications */}
        <ToastContainer />
        <DetailedFooter />
      </body>
    </html>
  );
}

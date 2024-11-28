import type { Metadata } from "next";

import { Ubuntu } from "next/font/google";
import { Inter as InterFont } from "next/font/google"; // Renamed to InterFont
import "./globals.css";
import NavBar from "@/components/NavBar";
import DetailedFooter from "@/components/Common/DetailedFooter";
import LoadingBar from "@/components/LoadingBar";

// Specify the font weights you want to use
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add the weights you need
});

const interFont = InterFont({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tea Jar | Finest Ceylon Tea in Sri Lanka",
  description: "Finest Ceylon Tea in Sri Lanka",
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
      </head>
      <body
        className={`${interFont.className} scroll-smooth`}
        suppressHydrationWarning={true}
      >
        <LoadingBar />
        <NavBar />
        {children}
        <DetailedFooter />
      </body>
    </html>
  );
}

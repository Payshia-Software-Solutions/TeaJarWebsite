import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Inter as InterFont } from "next/font/google"; // Renamed to InterFont
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";

// Specify the font weights you want to use
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Add the weights you need
});

const interFont = InterFont({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tea Jar | World No 1 Tea Provider in Sri Lanka",
  description: "World No 1 Tea Provider in Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} scroll-smooth`}
        suppressHydrationWarning={true}
      >
        <LoadingBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

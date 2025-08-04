import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Inter as InterFont } from "next/font/google"; // Renamed to InterFont
import "./globals.css";
import NavBar from "@/components/NavBar";
import DetailedFooter from "@/components/Common/DetailedFooter";
import LoadingBar from "@/components/LoadingBar";
import Script from "next/script";
import { ToastContainer, toast } from "react-toastify";
import WhatsAppButton from "@/components/WhatsAppButton";

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

        {/* Payshia GA4 Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-152K138MCN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-152K138MCN');
            `,
          }}
        ></script>
        {/* End of Payshia GA4 Tag */}

        {/* iConn I/O Google Tag Manager */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KQD7LKXR');`,
          }}
        ></Script>

        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function () {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/675d382549e2fd8dfef7a595/1if226lbo';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        /> */}

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1773505783386013');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}

        {/* yotpo Reviews */}
        <Script
          strategy="lazyOnload"
          src="https://cdn-widgetsrepository.yotpo.com/v1/loader/M0ppSKiZbfWkar21UCB5gDwd5mOFhPRHoQ2cOZcL"
        />
      </head>
      <body
        className={`${interFont.className} scroll-smooth`}
        suppressHydrationWarning={true}
      >
        {/* iConn I/O Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQD7LKXR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <LoadingBar />
        <NavBar />
        {children}

        {/* ToastContainer to display the notifications */}
        <ToastContainer />
        <WhatsAppButton
                  phoneNumber="+94705508800" // Replace with your actual phone number with country code
                  message="Hi! I'm interested in your services." // Optional custom message
                  position="bottom-right"
                />
        <DetailedFooter />
      </body>
    </html>
  );
}

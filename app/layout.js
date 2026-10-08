import { Cinzel, Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTopButton from "./component/ScrollToTopButton";
import Script from "next/script";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});
export const metadata = {
  title:
    "Amantran Resorts | Luxury Hotel Across Bengal’s Most Iconic Destinations",
  description:
    "Stay at Amantran Resorts, a luxury hotel brand offering unforgettable stays across Bengal’s most iconic and scenic destinations.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PRH7SH58');
          `}
        </Script>

        {/* ✅ JSON-LD Schema for Amantran Resorts */}
        <Script
          id="hotel-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Amantran Resort",
              description:
                "Amantran Resort—where heritage meets comfort. Experience cultural richness, luxurious rooms, gourmet dining, and world-class amenities.",
              url: "https://www.amantranresorts.in/",
              logo: "https://www.amantranresorts.in/images/logo.png",
              image:
                "https://www.amantranresorts.in/images/kolkata-attractions.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "4, Dr Suresh Sarkar Road, Moulali, Amantran House (RTC House), 4th floor",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                postalCode: "700014",
                addressCountry: "IN",
              },
              telephone: "+91-91473 89029",
              email: "info@amantranresorts.in",
              starRating: {
                "@type": "Rating",
                ratingValue: "4",
                bestRating: "5",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Swimming Pool",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "WiFi",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Restaurant",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Gym",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Conference Hall",
                  value: true,
                },
              ],
              event: {
                "@type": "Event",
                name: "Banquet Weddings & Corporate Events",
                description:
                  "Celebrate in style with our elegant spaces, tailored for weddings, corporate functions, festivals, and private events.",
                eventAttendanceMode:
                  "https://schema.org/OfflineEventAttendanceMode",
                eventStatus: "https://schema.org/EventScheduled",
                location: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "4 TH FLOOR, AMANTRAN HOUSE, 4, Dr Suresh Sarkar Rd, Maula Ali, Entally,",
                  addressLocality: "Kolkata",
                  addressRegion: "WB",
                  postalCode: "700014",
                  addressCountry: "IN",
                },
              },
              sameAs: [
                "https://www.facebook.com/amantranresorts",
                "https://www.instagram.com/amantranresorts",
                "https://www.linkedin.com/company/amantran-resorts",
              ],
              foundingDate: "1996-09-15",
              founder: {
                "@type": "Person",
                name: "Amantran Resorts Private Limited",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${raleway.variable} ${openSans.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PRH7SH58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}

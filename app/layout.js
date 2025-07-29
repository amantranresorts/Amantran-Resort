import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import ScrollToTopButton from "./component/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - Amantran Resorts | Luxury Stays Across Bengal’s Most Iconic Destinations",
  description: "Experience soulful getaways with Amantran Resorts — premium hotels and retreats in Tarapith, Sundarban, Mandarmani, Darjeeling & more. Blending luxury, tradition, and serenity for unforgettable stays.",
  icons: {
    icon: "/images/logo.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTopButton />
      </body>
    </html>
  );
}

<<<<<<< HEAD
=======
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js App",
  description: "Project Starter Setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
>>>>>>> c2d4da9d81ea8039c8a6d53d6e11bf8326e387f6

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";

export const metadata = {
  title: "Arnold Aswani",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

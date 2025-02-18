import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import About_US from "./components/About_US";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Shortner -Your trusted url shortner",
  description: "Shortner - helps you shorten your URL easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-80`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}

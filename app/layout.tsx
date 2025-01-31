import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Razorpay } from "@/utils/razorpay";

const poppins = Poppins({ weight: "500", subsets: ["latin"], display: "swap" });
import Dialogs from "@/components/dialogs";


export const metadata: Metadata = {
  title: "Mr Asheem Sehgal",
  description: "Top Finance Expart In House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Dialogs />
      <Razorpay />
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

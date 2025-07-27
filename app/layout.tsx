import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Stonington HOA Community",
  description: "Welcome to the Stonington HOA Community in South Carolina. Discover our beautiful neighborhood and community amenities.",
  icons: {
    icon: [
      { url: '/favicon-16.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon-32.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

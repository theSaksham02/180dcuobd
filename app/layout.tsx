import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "180 Degrees Consulting | University of Birmingham Dubai",
  description: "The world's largest university-based branch consulting strategy. Building the next generation of social impact leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-[#0B0F19] text-[#F5F7FA] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

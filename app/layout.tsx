import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Stafona - Expert Software Development Services | 15 Years Experience",
  description:
    "Stafona is a distinguished software development service provider with 15 years of experience. Expertise in Java, React JS, React Native, Node JS, and Python. Delivering quality solutions globally.",
  keywords: "software development, Java, React JS, React Native, Node JS, Python, web development, mobile apps, quality assurance, QA testing, e-commerce solutions, SaaS development",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <body className={`bg-[#0D1117] text-white overflow-y-auto ${poppins.className}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

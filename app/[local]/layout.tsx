import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "@/components/HeroSection/NavBar";
import localFont from "next/font/local";
import FloatingChatButton from "@/components/ui/FloatingChatButton";
import Banner from "@/components/ui/banner";

const sequel100 = localFont({
  src: [
    {
      path: "../../public/fonts/Sequel100Black-65.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Sequel100Black-75.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sequel100Black-85.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Sequel100Black-95.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/Sequel100Black-105.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Sequel100Black-115.ttf",
      weight: "800",
      style: "black",
    },
  ],
  variable: "--font-sequel100",
  display: "swap",
});

const inter = Inter({
  variable: "--Intert",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "100", "200", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Kliker Group – Innovative Digital Agency for Custom Web Solutions & Growth",
  description:
    "Kliker Group specializes in cutting-edge web development, creative design, and strategic digital marketing to help your business accelerate growth and maximize online impact.",
  keywords: [
    "Digital Agency",
    "Web Development",
    "Creative Design",
    "Digital Marketing",
    "Business Growth",
    "Custom Web Solutions",
    "Strategic Marketing",
  ],
  openGraph: {
    title: "Kliker Group – Digital Innovation & Growth Experts",
    description:
      "Full-service digital agency delivering custom web solutions, innovative design, and strategic marketing to boost your brand’s success.",
    url: "https://kliker-group.vercel.app/en",
    siteName: "Kliker Group",
    images: [
      {
        url: "https://kliker-group.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kliker Group – Digital Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kliker Group – Digital Innovation & Growth Experts",
    description:
      "Custom web development, creative design, and strategic marketing crafted to drive your business forward.",
    images: ["https://kliker-group.vercel.app/og-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const massages = await getMessages();
  return (
    <NextIntlClientProvider messages={massages}>
      <html lang="en">
        <body className={`${sequel100.variable} ${inter.variable} antialiased`}>
          <Banner />
          <NavBar />
          {children}
          <FloatingChatButton />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GoToTop } from "@/components/go-to-top";
import { Toaster } from "@/components/ui/toaster";
import { ScrollProgress } from "@/components/scroll-progress";
import { Analytics } from "@vercel/analytics/react";
import { ChatBot } from "@/components/chat-bot";
import Banner from "../public/bannerp.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akhmad Faizal | Frontend Engineer",
  icons: {
    icon: "/My_logo.png", // Mengarah ke folder public/logo.png
  },
  description:
    "Professional portfolio of Akhmad Faizal, a software engineer specializing in front-end engineer",
  keywords: [
    "Akhmad Faizal",
    "software engineer",
    "full-stack developer",
    "web development",
    "portfolio",
    "frontend engineer",
    "frontend developer",
  ],
  authors: [{ name: "Akhmad Faizal" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faizal.com",
    title: "Akhmad Faizal | Frontend Engineer",
    description:
      "Portfolio of Akhmad Faizal, software engineer with expertise in web development, UI engineering, and building scalable digital solutions.",
    siteName: "Akhmad Faizal Portfolio",
    countryName: "Indonesia",
  },
  viewport: "width=device-width, initial-scale=1.0",
  abstract: "Professional portfolio of Akhmad Faizal",
  applicationName: "Akhmad Faizal Portfolio",
  category: "Software Engineer",
  colorScheme: "light dark",
  metadataBase: new URL("https://faizal.com"),
  themeColor: "#ea580c",
  creator: "Akhmad Faizal",
  alternates: {
    canonical: "https://v0.faizal.com",
  },
  publisher: "Akhmad Faizal",
  referrer: "no-referrer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Navbar />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
          <GoToTop />
          {/* <ChatBot /> */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

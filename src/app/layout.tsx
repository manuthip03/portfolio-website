import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Set NEXT_PUBLIC_SITE_URL in Vercel once the site has a real domain. Until
 * then social-preview URLs resolve against localhost, which is harmless.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const description =
  "Portfolio of P.M.N. Perera — full-stack developer and data science undergraduate, building web applications with React, Next.js and NestJS, and applying machine learning and time-series forecasting to real-world problems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "P.M.N. Perera",
    "full-stack developer",
    "data science",
    "Next.js",
    "React",
    "NestJS",
    "machine learning",
    "time-series forecasting",
    "software engineering internship",
    "Sri Lanka",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090c" },
    { media: "(prefers-color-scheme: light)", color: "#fcfdfe" },
  ],
};

/**
 * Runs before the browser paints anything. Without it, a visitor who chose
 * light mode would see a flash of the dark theme on every page load.
 */
const noFlashTheme = `(function(){try{if(localStorage.getItem("theme")==="light"){var e=document.documentElement;e.classList.remove("dark");e.classList.add("light")}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // The inline script below changes this class, which React would
      // otherwise flag as a server/client mismatch.
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}

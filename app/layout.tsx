import "./globals.css";
import "@upstash/claps/style.css";

import AnalyticsWrapper from "./analytics";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { ReactNode } from "react";
import cx from "@/utils/cx";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const interDisplay = localFont({
  variable: "--font-display",
  src: [
    { path: "./fonts/inter/Inter-Display.woff2", weight: "400" },
    {
      path: "./fonts/inter/Inter-DisplayMedium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/inter/Inter-DisplaySemiBold.woff2",
      weight: "600",
    },
  ],
});

const title = "Adem ilter";
const description = "Designer, developer, creator and photographer.";
const url = "https://ademilter.com";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(
        inter.variable,
        interDisplay.variable,
        "scroll-smooth bg-zinc-950 text-zinc-50 antialiased"
      )}
    >
      <body className="py-20">
        {children}

        <AnalyticsWrapper />
      </body>
    </html>
  );
}

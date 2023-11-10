import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sign In",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  h-screen`}>{children}</body>
    </html>
  );
}

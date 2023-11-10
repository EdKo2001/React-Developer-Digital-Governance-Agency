import type { Metadata } from "next";

import "./globals.css";

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
      <body className="h-screen">{children}</body>
    </html>
  );
}

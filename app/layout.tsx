import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "William Giammona's Resume",
  description: "William Giammona's Resume",
  icons: {
    icon: "@/public/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Saikan",
    template: "%s · Saikan",
  },
  description:
    "Saikan is a holding company focused on building profitable ventures and helping entrepreneurs turn ideas into real products.",
  metadataBase: new URL("https://saikan.com"),
  openGraph: {
    title: "Saikan",
    description:
      "A holding company focused on building profitable ventures and helping entrepreneurs turn ideas into real products.",
    url: "https://saikan.com",
    siteName: "Saikan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}

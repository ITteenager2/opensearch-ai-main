import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const milling = localFont({
  src: "./assets/milling.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AINEX Search GPT",
  description: "AINEX SearchGPT, but better.",
  icons: {
    icon: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={milling.className}>{children}</body>
    </html>
  );
}

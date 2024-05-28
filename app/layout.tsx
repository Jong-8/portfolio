import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "윻's 포트폴리오",
    template: "%s | 윻's 포트폴리오",
  },
  description: "윻's 포트폴리오",
  openGraph: {
    title: "윻's 포트폴리오",
    description:
      "윻's 포트폴리오",
    url: "https://chronark.com",
    siteName: "윻's 포트폴리오",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

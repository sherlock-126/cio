import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "MoMo Market Research",
  description:
    "MoMo Market Research — Khám phá thị trường, thấu hiểu khách hàng, dẫn đầu xu hướng.",
  keywords: [
    "MoMo",
    "Market Research",
    "Nghiên cứu thị trường",
    "UX Research",
  ],
  openGraph: {
    title: "MoMo Market Research",
    description:
      "Khám phá thị trường, thấu hiểu khách hàng, dẫn đầu xu hướng.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

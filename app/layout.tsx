import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ELICON AI Insights Lab - AI 도구 인사이트 연구소",
  description: "AI 도구 및 트렌드에 대한 전문적인 인사이트를 제공하는 엘리콘의 지식 플랫폼",
  keywords: ["AI", "인사이트", "트렌드", "AI 도구", "엘리콘"],
  authors: [{ name: "ELICON" }],
  openGraph: {
    title: "ELICON AI Insights Lab",
    description: "AI 도구 및 트렌드에 대한 전문적인 인사이트",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

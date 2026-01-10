import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://elicon-ai-insights.vercel.app'),
  title: {
    default: "ELICON AI Insights Lab - AI 도구 인사이트 연구소",
    template: "%s | ELICON AI Insights Lab",
  },
  description: "실전에서 검증된 AI 도구 분석과 트렌드 리포트. ChatGPT, Claude, Midjourney 등 10개 AI 도구 ROI 분석, 2026 AI 트렌드, 0원 PoC 사례. 서종원어록 기준 품질 검증.",
  keywords: [
    "AI 도구",
    "AI 트렌드",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Midjourney",
    "AI 에이전트",
    "멀티모달 AI",
    "RAG 시스템",
    "ROI 분석",
    "0원 MVP",
    "엘리콘",
    "ELICON",
    "서종원어록",
    "AI 인사이트",
  ],
  authors: [{ name: "ELICON", url: "https://elicon.ai" }],
  creator: "ELICON",
  publisher: "ELICON",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://elicon-ai-insights.vercel.app",
    siteName: "ELICON AI Insights Lab",
    title: "ELICON AI Insights Lab - AI 도구 인사이트 연구소",
    description: "실전에서 검증된 AI 도구 분석과 트렌드 리포트. 10개 AI 도구 ROI 분석, 2026 AI 트렌드, 0원 PoC 사례.",
    images: [
      {
        url: "https://elicon-ai-insights.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ELICON AI Insights Lab - AI 도구 인사이트 연구소",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELICON AI Insights Lab - AI 도구 인사이트 연구소",
    description: "실전에서 검증된 AI 도구 분석과 트렌드 리포트. 10개 AI 도구 ROI 분석, 2026 AI 트렌드, 0원 PoC 사례.",
    creator: "@elicon_ai",
    images: ["https://elicon-ai-insights.vercel.app/opengraph-image"],
  },
  verification: {
    google: "google-site-verification-code", // 실제 코드로 교체 필요
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

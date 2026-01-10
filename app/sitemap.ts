import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elicon-ai-insights.vercel.app';

  // AI 도구 인사이트 (10개)
  const aiToolInsights = [
    '001_chatgpt_deep_dive',
    '002_perplexity_ai_deep_dive',
    '003_claude_3_5_sonnet_deep_dive',
    '004_midjourney_v6_deep_dive',
    '005_notion_ai_deep_dive',
    '006_runway_gen2_deep_dive',
    '007_github_copilot_deep_dive',
    '008_canva_ai_deep_dive',
    '009_grammarly_deep_dive',
    '010_synthesia_deep_dive',
  ];

  // 트렌드 분석 (3개)
  const trendInsights = [
    '001_2026_ai_trends',
    '002_ai_agent_revolution',
    '003_multimodal_ai_trend',
  ];

  // PoC 결과 (2개)
  const pocInsights = [
    '001_youtube_automation_poc',
    '002_rag_system_zero_cost',
  ];

  // 모든 인사이트 URL 생성
  const insightUrls = [
    ...aiToolInsights.map((id) => ({
      url: `${baseUrl}/insights/${id}`,
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...trendInsights.map((id) => ({
      url: `${baseUrl}/insights/${id}`,
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...pocInsights.map((id) => ({
      url: `${baseUrl}/insights/${id}`,
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date('2026-01-10'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...insightUrls,
  ];
}

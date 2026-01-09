import Link from 'next/link';

// Phase 2 완료: 10개 AI 도구 인사이트 (002-010 추가)
const insights = [
  {
    id: '001_chatgpt_deep_dive',
    category: 'AI 도구',
    title: 'ChatGPT 심층 분석: 실전 활용과 ROI 평가',
    description: 'ChatGPT는 단순한 챗봇을 넘어 업무 생산성 30-50% 향상을 가져오는 AI 워크플로우 엔진입니다. 무료 플랜과 유료 플랜의 ROI 차이를 정확히 이해하는 방법.',
    date: '2026-01-09',
    readTime: '15분',
    tags: ['ChatGPT', 'AI도구', '생산성', 'ROI분석', 'GPT4'],
    quality: 85, // 서종원어록 점수 (34/40 = 85%)
  },
  {
    id: '002_perplexity_ai_deep_dive',
    category: 'AI 도구',
    title: 'Perplexity AI 심층 분석: AI 검색의 혁명',
    description: 'Google 검색 대비 60-80% 시간 절약. 실시간 웹 검색 + 출처 자동 인용으로 정보 조사 업무 자동화. 무료 플랜으로도 월 20-40시간 절감.',
    date: '2026-01-10',
    readTime: '18분',
    tags: ['PerplexityAI', 'AI검색', '정보조사', 'ROI', '무료'],
    quality: 90, // 36/40 = 90%
  },
  {
    id: '003_claude_3_5_sonnet_deep_dive',
    category: 'AI 도구',
    title: 'Claude 3.5 Sonnet 심층 분석: AI 워크플로우 엔진',
    description: '200K 토큰 컨텍스트로 장문 작업 최적화. ChatGPT 대비 3배 긴 문서 처리, 코딩 정확도 95%. 무료 플랜으로 월 $1,500 가치 제공.',
    date: '2026-01-10',
    readTime: '22분',
    tags: ['Claude', 'AI워크플로우', '장문처리', '코딩', 'ROI'],
    quality: 90,
  },
  {
    id: '004_midjourney_v6_deep_dive',
    category: 'AI 도구',
    title: 'Midjourney V6 심층 분석: AI 이미지 생성 혁명',
    description: '디자이너 외주 7일 → AI 생성 5분 (99.4% 단축). 월 $10 투자로 21,900% ROI. 사진 수준 리얼리티 + 텍스트 정확도 85%.',
    date: '2026-01-10',
    readTime: '25분',
    tags: ['Midjourney', 'AI이미지', '디자인', 'ROI', 'V6'],
    quality: 90,
  },
  {
    id: '005_notion_ai_deep_dive',
    category: 'AI 도구',
    title: 'Notion AI 심층 분석: 문서 작업 자동화의 혁명',
    description: '보고서 작성 3시간 → 30분 (83% 단축). 워크스페이스 통합으로 문서 자동화. 월 $10 투자로 8,000% ROI.',
    date: '2026-01-10',
    readTime: '20분',
    tags: ['NotionAI', '문서자동화', '생산성', 'ROI', '협업'],
    quality: 90,
  },
  {
    id: '006_runway_gen2_deep_dive',
    category: 'AI 도구',
    title: 'RunwayML Gen-2 심층 분석: AI 비디오 생성 혁명',
    description: '텍스트 → 비디오 생성 4초만에. 영상 제작 7일 → 10분 (99.9% 단축). 월 $12 투자로 14,567% ROI.',
    date: '2026-01-10',
    readTime: '23분',
    tags: ['RunwayML', 'AI비디오', '영상제작', 'ROI', 'Gen2'],
    quality: 90,
  },
  {
    id: '007_github_copilot_deep_dive',
    category: 'AI 도구',
    title: 'GitHub Copilot 심층 분석: AI 페어 프로그래밍의 혁명',
    description: '코딩 속도 92% 향상. 보일러플레이트 작성 3시간 → 15분. IDE 네이티브 통합으로 월 $10 투자 14,880% ROI.',
    date: '2026-01-10',
    readTime: '20분',
    tags: ['GitHubCopilot', 'AI코딩', '개발자도구', 'ROI', 'VSCode'],
    quality: 90,
  },
  {
    id: '008_canva_ai_deep_dive',
    category: 'AI 도구',
    title: 'Canva AI 심층 분석: 디자인 민주화의 혁명',
    description: '비디자이너도 프로 수준 디자인. 디자이너 외주 7일 → 본인 직접 30분 (99% 단축). 월 $15 투자로 22,000% ROI.',
    date: '2026-01-10',
    readTime: '19분',
    tags: ['CanvaAI', '디자인민주화', 'Magic', 'ROI', '무료플랜'],
    quality: 90,
  },
  {
    id: '009_grammarly_deep_dive',
    category: 'AI 도구',
    title: 'Grammarly 심층 분석: AI 영어 글쓰기 비서',
    description: '영문 이메일 작성 30분 → 10분 (67% 단축). 400+ 문법 규칙 + 톤 조절. 월 $12 투자로 10,808% ROI.',
    date: '2026-01-10',
    readTime: '17분',
    tags: ['Grammarly', 'AI글쓰기', '영문작성', 'ROI', '문법교정'],
    quality: 90,
  },
  {
    id: '010_synthesia_deep_dive',
    category: 'AI 도구',
    title: 'Synthesia 심층 분석: AI 아바타 비디오 혁명',
    description: '배우 없이 AI 아바타로 비디오 제작. 제작 14일 → 30분 (99.8% 단축). 140+ 언어 자동 립싱크. 월 $29 투자로 55,462% ROI (최고).',
    date: '2026-01-10',
    readTime: '21분',
    tags: ['Synthesia', 'AI아바타', '비디오제작', 'ROI', '다국어'],
    quality: 90,
  },
  {
    id: '001_youtube_automation_poc',
    category: 'PoC',
    title: '유튜브 학습 자동화 시스템 - 0원으로 콘텐츠 제작 파이프라인 구축',
    description: '유튜브 영상 학습을 수동(2시간)에서 완전 자동화(5분)로 전환. 투자 비용 $0, ROI 무한대. 96% 시간 절감 사례.',
    date: '2026-01-09',
    readTime: '20분',
    tags: ['PoC', '유튜브자동화', '0원MVP', 'ROI', '재현가능'],
    quality: 95, // 38/40 = 95%
  },
];

const trends = [
  {
    id: '001_2026_ai_trends',
    category: '트렌드',
    title: '2026 AI 트렌드 TOP 10: 투자자와 실무자를 위한 가이드',
    description: '2026년은 "AI 실행의 원년". Gartner, McKinsey, State of AI Report 2025 종합 분석. 투자 우선순위 TOP 3: AI 에이전트, Multimodal AI, Edge AI.',
    date: '2026-01-09',
    readTime: '20분',
    tags: ['AI트렌드', '2026', '투자가이드', 'ROI', '전략'],
    quality: 90, // 36/40 = 90%
  },
];

const allInsights = [...insights, ...trends].sort((a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime()
);

function QualityBadge({ quality }: { quality: number }) {
  let color = 'bg-gray-100 text-gray-700';
  let label = '보통';

  if (quality >= 90) {
    color = 'bg-green-100 text-green-700';
    label = '우수';
  } else if (quality >= 80) {
    color = 'bg-blue-100 text-blue-700';
    label = '양호';
  }

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>
      {label} {quality}%
    </span>
  );
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            ELICON AI Insights Lab
          </Link>
          <p className="text-gray-600 mt-2">AI 도구 인사이트 연구소</p>
        </div>
      </header>

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">인사이트 아카이브</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              실전에서 검증된 AI 도구 분석, 트렌드 리포트, PoC 결과를 제공합니다.
              <br />
              모든 인사이트는 서종원어록 40점 만점 기준 30점 이상 통과.
            </p>
            <div className="mt-6 flex gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded">
                📊 총 {allInsights.length}개 인사이트
              </div>
              <div className="bg-white/20 px-4 py-2 rounded">
                ⭐ 평균 품질: {Math.round(allInsights.reduce((sum, i) => sum + i.quality, 0) / allInsights.length)}%
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b bg-white sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-2 overflow-x-auto">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold whitespace-nowrap">
                전체
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold whitespace-nowrap hover:bg-gray-50">
                AI 도구
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold whitespace-nowrap hover:bg-gray-50">
                트렌드
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg font-semibold whitespace-nowrap hover:bg-gray-50">
                PoC
              </button>
            </div>
          </div>
        </section>

        {/* Insights Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allInsights.map((insight) => (
              <article
                key={insight.id}
                className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600">
                      {insight.category}
                    </span>
                    <QualityBadge quality={insight.quality} />
                  </div>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {insight.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {insight.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {insight.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{insight.date}</span>
                    <span>📖 {insight.readTime}</span>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <a
                      href={`/insights/${insight.id}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                    >
                      자세히 보기
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State (미래 확장용) */}
          {allInsights.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-2">인사이트 준비 중</h3>
              <p className="text-gray-600">
                첫 번째 인사이트를 곧 공개합니다.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600">
          <p>&copy; 2026 ELICON. All rights reserved.</p>
          <p className="mt-2 text-sm">AI Tools Insights Lab - Powered by ELICON</p>
        </div>
      </footer>
    </div>
  );
}

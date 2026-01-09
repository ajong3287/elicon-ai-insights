import Link from 'next/link';

const trends = [
  {
    id: '001_2026_ai_trends',
    title: '2026 AI 트렌드 TOP 10: 투자자와 실무자를 위한 가이드',
    description: '2026년은 "AI 실행의 원년". Gartner, McKinsey, State of AI Report 2025 종합 분석으로 투자 우선순위를 명확히 제시합니다.',
    date: '2026-01-09',
    readTime: '20분',
    impact: '높음',
    investmentPriority: [
      { name: 'AI 에이전트', score: 5, market: '$100B' },
      { name: 'Multimodal AI', score: 5, market: '$80B' },
      { name: 'Edge AI', score: 4, market: '$50B' },
    ],
    sources: ['Gartner', 'McKinsey', 'State of AI Report'],
    quality: 90,
  },
];

function ImpactBadge({ impact }: { impact: string }) {
  const colors = {
    높음: 'bg-red-100 text-red-700',
    중간: 'bg-yellow-100 text-yellow-700',
    낮음: 'bg-green-100 text-green-700',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold ${colors[impact as keyof typeof colors] || colors['중간']}`}>
      영향도: {impact}
    </span>
  );
}

export default function TrendsPage() {
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
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">📈 AI 트렌드 분석</h1>
            <p className="text-xl text-purple-100 max-w-3xl">
              Gartner, McKinsey, State of AI Report 등 글로벌 리서치를 종합 분석.
              <br />
              투자 우선순위와 ROI 중심의 의사결정 가이드.
            </p>
            <div className="mt-6 flex gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded">
                📊 {trends.length}개 트렌드 리포트
              </div>
              <div className="bg-white/20 px-4 py-2 rounded">
                📚 {trends.reduce((sum, t) => sum + t.sources.length, 0)}개 출처 검증
              </div>
            </div>
          </div>
        </section>

        {/* Trends List */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-8">
            {trends.map((trend) => (
              <article
                key={trend.id}
                className="bg-white border rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ImpactBadge impact={trend.impact} />
                    <span className="text-sm text-gray-500">{trend.date}</span>
                    <span className="text-sm text-gray-500">📖 {trend.readTime}</span>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{trend.title}</h2>

                  <p className="text-lg text-gray-700 mb-6">{trend.description}</p>

                  {/* Investment Priority */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                      💰 투자 우선순위 TOP 3
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {trend.investmentPriority.map((item, index) => (
                        <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-gray-900">{item.name}</span>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < item.score ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">시장 규모: {item.market}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sources */}
                  <div className="mb-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-2">
                      📚 출처 (신뢰도: ★★★★★)
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {trend.sources.map((source) => (
                        <span
                          key={source}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quality Badge */}
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">품질 점수:</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded font-bold text-sm">
                        {trend.quality}% (양호)
                      </span>
                    </div>
                    <a
                      href={`/insights/${trend.id}`}
                      className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
                    >
                      전체 리포트 보기
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200">
            <div className="text-center">
              <div className="text-5xl mb-4">🔜</div>
              <h3 className="text-2xl font-bold mb-2">다음 트렌드 리포트</h3>
              <p className="text-gray-600 mb-4">
                "AI 에이전트 실전 가이드: 10가지 활용 사례"
              </p>
              <p className="text-sm text-gray-500">
                예상 발행일: 2026-01-15
              </p>
            </div>
          </div>
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

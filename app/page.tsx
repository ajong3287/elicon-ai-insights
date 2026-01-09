export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">ELICON AI Insights Lab</h1>
          <p className="text-gray-600 mt-2">AI 도구 인사이트 연구소</p>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              AI 도구와 트렌드,<br />
              <span className="text-blue-600">전문가의 인사이트로</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              실전에서 검증된 AI 도구 분석과 트렌드 리포트를 제공합니다.<br />
              ROI 중심의 투자 의사결정을 지원합니다.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/insights"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                인사이트 보기
              </a>
              <a
                href="/trends"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                트렌드 분석
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10</div>
                <div className="text-gray-600">AI 도구 분석</div>
                <div className="text-sm text-gray-500 mt-1">평균 품질: 90%</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-gray-600">트렌드 리포트</div>
                <div className="text-sm text-gray-500 mt-1">5개 출처 검증</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-gray-600">PoC 프로젝트</div>
                <div className="text-sm text-gray-500 mt-1">재현 가능성: 100%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h3 className="text-3xl font-bold text-center mb-12">우리의 강점</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 border rounded-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h4 className="text-xl font-bold mb-2">실전 중심</h4>
              <p className="text-gray-600">
                실제 사용 후기를 기반으로 한 솔직한 분석
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">ROI 분석</h4>
              <p className="text-gray-600">
                투자 대비 효과를 정량적으로 평가
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">자동화</h4>
              <p className="text-gray-600">
                AI 학습부터 분석까지 자동화된 파이프라인
              </p>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">최신 인사이트</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <a href="/insights" className="bg-white p-6 rounded-lg border hover:shadow-lg transition">
                <div className="text-sm text-blue-600 font-semibold mb-2">AI 도구</div>
                <h4 className="text-xl font-bold mb-2">ChatGPT 심층 분석</h4>
                <p className="text-gray-600 mb-4">
                  업무 생산성 30-50% 향상. 무료 vs 유료 플랜 ROI 비교 분석.
                </p>
                <div className="text-sm text-blue-600 font-semibold">자세히 보기 →</div>
              </a>
              <a href="/trends" className="bg-white p-6 rounded-lg border hover:shadow-lg transition">
                <div className="text-sm text-blue-600 font-semibold mb-2">트렌드</div>
                <h4 className="text-xl font-bold mb-2">2026 AI 트렌드 TOP 10</h4>
                <p className="text-gray-600 mb-4">
                  Gartner, McKinsey 분석. 투자 우선순위: AI 에이전트, Multimodal AI, Edge AI.
                </p>
                <div className="text-sm text-blue-600 font-semibold">자세히 보기 →</div>
              </a>
              <a href="/insights" className="bg-white p-6 rounded-lg border hover:shadow-lg transition">
                <div className="text-sm text-blue-600 font-semibold mb-2">PoC</div>
                <h4 className="text-xl font-bold mb-2">유튜브 학습 자동화</h4>
                <p className="text-gray-600 mb-4">
                  0원 투자로 2시간 → 5분 (96% 단축). ROI 무한대. 재현 가능.
                </p>
                <div className="text-sm text-blue-600 font-semibold">자세히 보기 →</div>
              </a>
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

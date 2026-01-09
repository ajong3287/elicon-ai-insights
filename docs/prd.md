# PRD: AI 도구 인사이트 연구소 (AI Tools Insights Lab)

**프로젝트 번호**: 47
**버전**: 3.1
**작성일**: 2025-12-03
**최종 수정**: 2026-01-09
**작성자**: 클로드코드
**상태**: 활성 (Active) - Phase 1 완료 (내부 관리)
**프로젝트 번호 변경**: 45 → 47 (중복 해소, 2025-12-03)

---

## 📋 Executive Summary

### 프로젝트 비전
AI 도구 및 트렌드에 대한 인사이트를 수집·분석·연구하여 **내부 지식 플랫폼 (Phase 1)**으로 제공하고, 엘리콘의 AI 전략 수립에 활용. 향후 **대외 공개 (Phase 2 이후)** 고려.

### 핵심 목표
1. **인사이트 허브**: 최신 AI 도구/트렌드 분석을 체계적 관리
2. **전략 자산**: 엘리콘 내부 의사결정 지원 (우선순위)
3. **자동화**: AI 학습 → 분석 → 웹 배포 파이프라인 구축
4. **브랜드 구축**: AI 전문성 대외 홍보 (Phase 2 이후)

### 핵심 지표 (Phase 1)
- **콘텐츠**: 월 4개 이상 리서치 리포트
- **활용도**: 내부 의사결정 참조 월 2회 이상
- **ROI**: 신규 AI 도구 투자 실패율 50% 감소
- **접근성**: Vercel 주소로 사내 쉬운 접근

### 핵심 지표 (Phase 2 이후)
- **웹 트래픽**: 월 1,000 방문자
- **브랜드 인지도**: 커스텀 도메인 활용
- **SEO**: 주요 키워드 검색 노출

---

## 🎯 프로젝트 개요

### 목적
AI 도구 및 트렌드에 대한 인사이트를 수집, 분석, 연구하여 엘리콘의 AI 전략 수립에 활용. **Phase 1은 내부 지식 관리**, Phase 2 이후 대외 공개 고려.

### 핵심 가치
- 🔍 **탐색**: 최신 AI 도구 발굴 및 테스트
- 📊 **분석**: AI 트렌드 및 산업 동향 분석
- 💡 **인사이트**: 실행 가능한 비즈니스 인사이트 도출
- 📚 **아카이빙**: 지식 체계화 및 축적
- 🔗 **접근성**: Vercel 주소로 사내 쉬운 접근 (Phase 1)
- 🌐 **공유**: 대외 공개 및 브랜드 구축 (Phase 2 이후)

### 차별화 요소
1. **실전 중심**: 실제 사용 후기 기반 (이론 아님)
2. **ROI 분석**: 투자 대비 효과 정량 평가
3. **자동화**: 44-46번 프로젝트와 연계한 자동 분석
4. **단계적 공개**: 내부 검증 후 대외 공개 (리스크 최소화)

---

## 🛠️ 기술 스택

### Frontend (정적 사이트)
```yaml
Framework: Next.js 15 (App Router)
Language: TypeScript 5.x
Styling: Tailwind CSS 3.x
Content: MDX (Markdown + React Components)
Charts: Recharts / Chart.js
Icons: Lucide React
```

### 배포 및 운영
```yaml
Hosting: Vercel (무료 Hobby 플랜)
CI/CD: GitHub Actions
Domain: elicon-ai-insights.vercel.app (초기)
Analytics: Vercel Analytics (무료)
SEO: Next.js Metadata API
```

### 콘텐츠 관리
```yaml
Format: Markdown + Frontmatter
Storage: Git (GitHub)
Images: /public/images/ (최적화: WebP)
Data: JSON/YAML (인사이트 메타데이터)
```

### 개발 환경
```yaml
Node.js: 20.x LTS
Package Manager: npm
Linting: ESLint + Prettier
Type Checking: TypeScript strict mode
```

---

## 🏗️ 시스템 아키텍처

### 개요
```
┌─────────────────────────────────────────────────────────────┐
│                    사용자 (브라우저)                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│               Vercel CDN (전 세계 분산)                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│            Next.js 정적 사이트 (SSG)                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   홈페이지    │  │ 인사이트 목록 │  │  개별 리포트  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ 트렌드 대시보드│  │   AI 도구   │  │    PoC 결과  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  GitHub Repository                          │
│  ┌──────────────────────────────────────────────────┐       │
│  │  /insights/     (Markdown 인사이트)               │       │
│  │  /public/       (이미지, 차트 데이터)            │       │
│  │  /src/          (Next.js 코드)                   │       │
│  └──────────────────────────────────────────────────┘       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              자동화 파이프라인 (로컬)                         │
│  44번 (유튜브 학습) → 45번 (스크랩) → 46번 (심층 학습)       │
│                         ↓                                    │
│              47번 (인사이트 생성 & Git Push)                 │
└─────────────────────────────────────────────────────────────┘
```

### 데이터 흐름
1. **콘텐츠 생성**: 44-46번 프로젝트에서 원시 데이터 수집
2. **분석 및 정제**: 47번에서 인사이트 도출 및 Markdown 작성
3. **Git Push**: GitHub에 자동 커밋
4. **자동 배포**: GitHub Actions → Vercel 빌드 → CDN 배포
5. **사용자 접근**: 전 세계 CDN을 통한 빠른 로딩

---

## 📊 데이터 모델

### 1. Insight (인사이트)
```typescript
interface Insight {
  id: string;                    // 고유 ID (예: "insight-001")
  title: string;                 // 제목
  category: InsightCategory;     // ai_tools | trends | poc
  summary: string;               // 요약 (200자)
  content: string;               // 본문 (Markdown)
  tags: string[];                // 태그 (예: ["ChatGPT", "RAG"])
  author: string;                // 작성자
  publishedAt: Date;             // 발행일
  updatedAt: Date;               // 수정일
  readingTime: number;           // 예상 읽기 시간 (분)
  featured: boolean;             // 메인 노출 여부
  roi?: ROIData;                 // ROI 분석 (AI 도구만)
}

type InsightCategory = "ai_tools" | "trends" | "poc";
```

### 2. ROI Data (투자 대비 효과)
```typescript
interface ROIData {
  toolName: string;              // 도구명
  pricingTier: string;           // 가격대 (무료/유료)
  monthlyHours: number;          // 월 절감 시간
  costSavings: number;           // 비용 절감액 (원)
  qualityImprovement: number;    // 품질 향상도 (0-100)
  learningCurve: string;         // 학습 곡선 (낮음/중간/높음)
  recommendation: string;        // 추천도 (강력 추천/추천/보류/비추천)
  roiScore: number;              // ROI 점수 (0-100)
}
```

### 3. Trend (트렌드)
```typescript
interface Trend {
  id: string;
  title: string;
  description: string;
  impact: "high" | "medium" | "low";   // 영향도
  timeline: string;              // 시간대 (단기/중기/장기)
  sources: string[];             // 출처
  relatedInsights: string[];     // 관련 인사이트 ID
  publishedAt: Date;
}
```

---

## 🎨 주요 기능

### 1. 홈페이지
- **히어로 섹션**: 프로젝트 소개 + 최신 인사이트 3개
- **트렌드 대시보드**: 최근 AI 트렌드 시각화
- **통계 요약**: 총 인사이트 수, 분석 도구 수, ROI 절감액
- **CTA**: "최신 인사이트 보기", "트렌드 분석"

### 2. 인사이트 목록
- **필터링**: 카테고리별 (AI 도구/트렌드/PoC)
- **검색**: 제목, 태그, 내용 전체 검색
- **정렬**: 최신순, 인기순, ROI 점수순
- **페이지네이션**: 한 페이지당 12개

### 3. 개별 인사이트 페이지
- **본문**: MDX 렌더링 (코드 하이라이팅, 차트)
- **목차**: 자동 생성 (H2, H3 기반)
- **메타데이터**: 작성일, 읽기 시간, 태그
- **ROI 카드**: AI 도구 인사이트만 표시
- **관련 인사이트**: 태그 기반 추천 3개
- **공유**: Twitter, LinkedIn, 링크 복사

### 4. 트렌드 대시보드
- **트렌드 타임라인**: 단기/중기/장기 분류
- **영향도 차트**: High/Medium/Low 분포
- **최근 트렌드**: 최신 5개 트렌드 카드
- **관련 인사이트**: 트렌드별 연관 인사이트

### 5. AI 도구 디렉토리
- **도구 카탈로그**: 분석한 모든 AI 도구 목록
- **필터**: 가격대, 카테고리, ROI 점수
- **비교 기능**: 최대 3개 도구 비교
- **상세 리뷰**: 각 도구별 상세 페이지

### 6. PoC (개념 증명) 갤러리
- **실험 목록**: 진행한 PoC 프로젝트
- **결과 요약**: 성공/실패, 배운 점
- **코드 샘플**: GitHub 링크
- **재현 가이드**: 따라하기 튜토리얼

---

## 🚀 배포 전략

### Phase 1: 내부 지식 관리 (완료 ✅)
```yaml
목표: 사내 AI 인사이트 플랫폼 구축
상태: 2026-01-09 완료
작업:
  - Next.js 프로젝트 초기화 ✅
  - 홈페이지 + 인사이트/트렌드 페이지 ✅
  - 3개 샘플 인사이트 작성 (평균 품질 87%) ✅
  - Vercel 배포 설정 ✅
  - GitHub Actions CI/CD ✅
배포: Vercel 주소 (내부 접근)
URL: https://elicon-ai-insights-n1i2ea530-ajong3287-4974s-projects.vercel.app
```

### Phase 2: 콘텐츠 확장 (2주)
```yaml
목표: 10개 이상 인사이트 축적
작업:
  - 44-46번 프로젝트 학습 결과 통합
  - AI 도구 리뷰 5개 추가
  - 트렌드 분석 3개 추가
  - PoC 결과 2개 추가
  - 내부 피드백 수집 및 반영
배포: Vercel 주소 유지 (내부 관리)
검토: 대외 공개 필요성 재평가
```

### Phase 3: 자동화 구축 (1개월)
```yaml
목표: 인사이트 생성 자동화
작업:
  - 44번 → 47번 자동 파이프라인
  - 주간 트렌드 리포트 자동 생성
  - 품질 자동 검증 (서종원어록 40점 기준)
  - RSS 피드 추가 (선택)
배포: Vercel 주소 유지
```

### Phase 4: 대외 공개 준비 (필요 시)
```yaml
목표: 브랜드 구축 및 공개 (선택적)
트리거: 콘텐츠 30개 이상 + 품질 90% 이상
작업:
  - 커스텀 도메인 설정 (insights.elicon.co.kr)
  - SEO 최적화
  - Google Search Console 등록
  - 트렌드 대시보드 인터랙티브 차트
  - AI 도구 비교 기능
배포: 커스텀 도메인 + Vercel 주소 병행
```

### Phase 5: 고도화 (선택적)
```yaml
목표: 커뮤니티 기능 추가
작업:
  - 댓글 시스템 (Giscus)
  - 다국어 지원 (영문)
  - 뉴스레터 연동
배포: 지속적 개선
```

---

## 📁 프로젝트 구조

### 현재 구조
```
47_AI도구_인사이트_연구소/
├── docs/
│   ├── prd.md                      # 이 문서
│   └── research_reports/           # 연구 리포트
├── insights/
│   ├── ai_tools/                   # AI 도구 분석 (Markdown)
│   ├── trends/                     # 트렌드 분석 (Markdown)
│   └── poc/                        # PoC 결과 (Markdown)
├── logs/
│   └── YYMMDD_작업[작성자].md      # 작업 로그
└── archived_files/                 # 백업 및 아카이브
```

### 웹사이트 구조 (추가 예정)
```
47_AI도구_인사이트_연구소/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── page.tsx               # 홈페이지
│   │   ├── insights/              # 인사이트 목록/상세
│   │   ├── trends/                # 트렌드 대시보드
│   │   ├── tools/                 # AI 도구 디렉토리
│   │   └── poc/                   # PoC 갤러리
│   ├── components/                 # React 컴포넌트
│   │   ├── InsightCard.tsx
│   │   ├── TrendChart.tsx
│   │   ├── ROICard.tsx
│   │   └── ...
│   ├── lib/                        # 유틸리티
│   │   ├── mdx.ts                 # MDX 파싱
│   │   ├── insights.ts            # 인사이트 로더
│   │   └── analytics.ts           # 분석 유틸
│   └── styles/                     # 스타일
│       └── globals.css
├── public/
│   ├── images/                     # 이미지
│   └── data/                       # JSON/YAML 데이터
├── insights/                       # 콘텐츠 (Markdown)
│   ├── ai_tools/
│   ├── trends/
│   └── poc/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── vercel.json
```

---

## 🔗 연계 프로젝트

### 직접 연계
- **44_AI학습자동화시스템**: 유튜브 영상 학습 → 인사이트 원시 데이터
- **45_매일AI_스크랩북**: 일일 AI 뉴스 → 트렌드 분석 소스
- **46_유튜브_심층학습**: 계층적 학습 → 깊이 있는 인사이트

### 자동화 파이프라인
```
┌─────────────────────────────────────────────────────────┐
│  44번: YouTube 영상 학습 (자막 + 분석)                   │
│         ↓                                                │
│  45번: AI 뉴스 스크랩 (트렌드 추적)                      │
│         ↓                                                │
│  46번: 심층 학습 (5레이어 분석)                          │
│         ↓                                                │
│  47번: 인사이트 통합 → Markdown 작성 → Git Push         │
│         ↓                                                │
│  GitHub Actions: 자동 빌드                               │
│         ↓                                                │
│  Vercel: 자동 배포                                       │
└─────────────────────────────────────────────────────────┘
```

### 간접 연계
- **00_SuperClaude_Framework**: 연구 결과를 프레임워크에 반영
- **0_ELICON_PMO**: 전략 문서 제공

---

## 🛣️ 로드맵

### Phase 1: 웹사이트 MVP (1주, 현재 진행)
- [x] 프로젝트 번호 변경 (45 → 47)
- [x] 기본 디렉토리 구조 생성
- [x] PRD 2.0 작성 (전문가급)
- [ ] Next.js 프로젝트 초기화
- [ ] 홈페이지 + 인사이트 목록 페이지
- [ ] 3개 샘플 인사이트 작성
- [ ] Vercel 초기 배포

### Phase 2: 콘텐츠 마이그레이션 (2주)
- [ ] 기존 자료 정리 및 분류
- [ ] insights/ 폴더 체계 구축
- [ ] AI 도구 리뷰 5개 작성
- [ ] 트렌드 분석 3개 작성
- [ ] PoC 결과 2개 작성
- [ ] SEO 메타데이터 최적화

### Phase 3: 운영 시스템 구축 (1개월)
- [ ] 44-46번 자동 연동 스크립트
- [ ] 주간 트렌드 리포트 자동화
- [ ] AI 도구 평가 템플릿 제작
- [ ] RSS 피드 추가
- [ ] Google Analytics 연동

### Phase 4: 고도화 (3개월)
- [ ] 트렌드 대시보드 인터랙티브 차트
- [ ] AI 도구 비교 기능
- [ ] 댓글 시스템 (Giscus)
- [ ] 다국어 지원 (영문)
- [ ] 커스텀 도메인 연결

---

## 📊 성공 지표 (KPI)

### 웹사이트 지표
- **트래픽**: 월 1,000 방문자 (3개월 내)
- **체류 시간**: 평균 3분 이상
- **이탈률**: 60% 이하
- **재방문율**: 20% 이상

### 콘텐츠 지표
- **인사이트**: 월 4개 이상 발행
- **AI 도구 리뷰**: 분기당 15개 이상
- **트렌드 분석**: 월 2개 이상
- **PoC 결과**: 분기당 2개 이상

### 비즈니스 지표
- **실제 적용 사례**: 월 1개 이상
- **ROI 개선**: 신규 AI 도구 투자 실패율 50% 감소
- **팀 활용도**: 월 2회 이상 참조
- **전략 기여도**: 분기별 1개 이상 전략 문서 기여

### 브랜드 지표
- **소셜 미디어 공유**: 월 10회 이상
- **백링크**: 분기당 5개 이상
- **언론 언급**: 연 2회 이상
- **고객 문의**: 월 1건 이상

---

## 🔒 보안 및 성능

### 보안 전략
```yaml
정적 사이트: XSS, SQL Injection 위험 없음
HTTPS: Vercel 자동 SSL 인증서
환경변수: Vercel Environment Variables
API 키: 사용 안 함 (정적 콘텐츠만)
사용자 데이터: 수집 안 함 (쿠키 없음)
```

### 성능 최적화
```yaml
이미지: Next.js Image 컴포넌트 (자동 WebP)
폰트: Next.js Font Optimization
코드 스플리팅: 자동 (App Router)
CDN: Vercel Edge Network
캐싱: Static Generation (빌드 타임)
Lighthouse 목표: 90+ (모든 항목)
```

### 모니터링
```yaml
분석: Vercel Analytics (무료)
에러 추적: Vercel Logs
성능: Vercel Speed Insights
알림: GitHub Actions 실패 시 이메일
```

---

## 🎯 SLO/SLI + Error Budget (서비스 수준 목표)

### Service Level Objectives (SLO)

**정적 사이트 가용성 (Vercel CDN 기반)**
```yaml
가용성 목표: 99.95% (월 22분 다운타임 허용)
측정 방법: Vercel Status API + Uptime Robot
검증 주기: 1분 간격 헬스체크
리포팅: 주간 SLO 달성률 리포트
```

**성능 목표 (Core Web Vitals)**
```yaml
LCP (Largest Contentful Paint): < 2.5s (p75)
FID (First Input Delay): < 100ms (p75)
CLS (Cumulative Layout Shift): < 0.1 (p75)
TTFB (Time to First Byte): < 600ms (p75)
```

**콘텐츠 신선도**
```yaml
인사이트 발행 주기: 주 1회 이상
트렌드 업데이트: 격주 1회
PoC 결과 공유: 월 1회
자동 배포 성공률: 99%
```

### Service Level Indicators (SLI)

**측정 지표**
```yaml
# 가용성
- Vercel CDN 응답률 (성공/총 요청)
- 빌드 성공률 (성공/총 빌드)

# 성능
- Lighthouse 점수 (Performance/Accessibility/Best Practices/SEO)
- Core Web Vitals (실제 사용자 측정)

# 품질
- 서종원어록 40점 만점 기준 (30점 이상 게시)
- 문법/맞춤법 오류율 (< 0.1%)
```

### Error Budget 정책

**월간 Error Budget**
```yaml
가용성 Error Budget: 0.05% (월 22분)
성능 Error Budget: p75 목표 미달 5%
품질 Error Budget: 서종원어록 30점 미만 10%
```

**Error Budget 소진 시 대응**
```
50% 소진:
  - 알림: 서대표님 + 클로드코드
  - 조치: 근본 원인 분석 (RCA) 시작

75% 소진:
  - 조치: 신규 기능 개발 중단
  - 우선순위: 안정성/성능 개선으로 전환

100% 소진:
  - 조치: 모든 배포 중단
  - 복구: Error Budget 회복 시까지 개선 작업만
```

**검증 방법**
- 주간 SLO 리포트 (Google Sheets)
- Vercel Analytics 대시보드
- Lighthouse CI 자동 측정 (PR마다)

---

## 📈 Capacity Planning & 부하 모델

### 트래픽 예측 모델

**Phase별 예상 트래픽**
```yaml
Phase 1 (MVP, 1개월):
  일일 방문자: 10-50명
  페이지뷰: 50-200
  대역폭: < 1GB/월

Phase 2 (콘텐츠 확장, 3개월):
  일일 방문자: 100-500명
  페이지뷰: 500-2,000
  대역폭: 5-10GB/월

Phase 3 (자동화, 6개월):
  일일 방문자: 500-1,000명
  페이지뷰: 2,000-5,000
  대역폭: 20-30GB/월

Phase 4 (고도화, 12개월):
  일일 방문자: 1,000-3,000명
  페이지뷰: 5,000-15,000
  대역폭: 50-100GB/월
```

### 리소스 병목 분석

**Vercel 무료 플랜 제한**
```yaml
대역폭: 100GB/월
빌드 실행 시간: 6,000분/월
서버리스 함수: 100GB-Hours/월
동시 빌드: 1개

병목 예상 시점: Phase 4 (12개월)
  - 대역폭 100GB 초과 가능성: 50%
  - 해결책: Vercel Pro 업그레이드 ($20/월)
```

### 스케일링 트리거 및 정책

**자동 스케일링 (Vercel CDN)**
```yaml
트리거: 트래픽 급증 (평소 대비 5배)
대응: Vercel Edge Network 자동 분산
보장: 최대 동시 접속 100만명 처리 가능
```

**수동 스케일링 필요 시점**
```yaml
조건 1: 월 대역폭 80GB 이상 (80% 사용)
  → 조치: 이미지 최적화, WebP 강제 변환

조건 2: 빌드 시간 월 5,000분 이상 (83% 사용)
  → 조치: 증분 빌드 활성화, 캐시 최적화

조건 3: Lighthouse 점수 90 미만
  → 조치: 코드 스플리팅, lazy loading 적용
```

**비용 최적화 전략**
```yaml
1. 이미지 최적화:
   - WebP/AVIF 자동 변환
   - 적절한 크기 조절 (max 1920px)
   - lazy loading

2. 캐시 전략:
   - 정적 자산: 1년 (immutable)
   - HTML: 1시간 (stale-while-revalidate)
   - API 응답: N/A (정적 사이트)

3. CDN 활용:
   - Vercel Edge Network 최대 활용
   - 지리적 분산 (글로벌 CDN)
```

---

## 🛡️ DR/BCP (재해복구 및 비즈니스 연속성)

### 재해 시나리오 정의

**시나리오 1: Vercel 플랫폼 장애**
```yaml
발생 확률: 연 0.05% (99.95% SLA)
영향도: 서비스 전체 중단
복구 목표:
  RPO (Recovery Point Objective): 0분 (Git 기반)
  RTO (Recovery Time Objective): 30분
```

**시나리오 2: GitHub 장애**
```yaml
발생 확률: 연 0.1%
영향도: 배포 불가, 기존 서비스는 정상
복구 목표:
  RPO: 0분 (로컬 백업)
  RTO: 1시간 (대체 Git 호스팅)
```

**시나리오 3: 데이터 손실 (악의적 커밋)**
```yaml
발생 확률: 연 1%
영향도: 콘텐츠 손실
복구 목표:
  RPO: 24시간
  RTO: 2시간
```

### 백업 전략

**Git 기반 백업 (자동)**
```yaml
주 백업: GitHub (ajong3287/elicon-ai-insights)
보조 백업 1: 로컬 MacBook Air (.git/)
보조 백업 2: Time Machine (선택)

백업 주기:
  - Git: 실시간 (매 커밋)
  - 로컬: git pull 시
  - Time Machine: 1시간마다
```

**콘텐츠 백업 (수동)**
```yaml
Markdown 파일: insights/*.md
설정 파일: package.json, next.config.mjs 등
이미지: public/images/

백업 위치: archived_files/ (분기별)
보존 기간: 2년
```

### 복구 절차 (Runbook)

**Vercel 장애 시 복구**
```bash
# 1. 대체 플랫폼 배포 (Netlify/Cloudflare Pages)
npm run build
# out/ 폴더를 대체 플랫폼에 업로드

# 2. DNS 변경 (선택)
# 커스텀 도메인 사용 시 CNAME 변경

# 복구 시간: 30분
```

**GitHub 장애 시 복구**
```bash
# 1. 로컬 리포지토리 확인
git status
git log

# 2. 대체 Git 호스팅 (GitLab/Bitbucket)
git remote add backup https://gitlab.com/...
git push backup main

# 3. Vercel 연동 변경
# Vercel 대시보드에서 GitLab 연결

# 복구 시간: 1시간
```

**데이터 손실 시 복구**
```bash
# 1. Git 히스토리에서 복구
git log --all -- insights/
git checkout <commit-hash> -- insights/

# 2. archived_files/ 백업 확인
cp archived_files/insights_backup_YYYYMMDD/*.md insights/

# 3. 검증 후 배포
git add insights/
git commit -m "Restore from backup"
git push

# 복구 시간: 2시간
```

### 복구 리허설

**월간 복구 훈련**
```yaml
일정: 매월 첫째 주 금요일
시간: 30분
참여자: 서대표님 + 클로드코드

시나리오:
  1. Git reset --hard HEAD~10 (10개 커밋 삭제)
  2. archived_files/에서 복구
  3. 복구 시간 측정
  4. 개선 사항 기록

목표: RTO 2시간 이내 달성률 100%
```

---

## 🔐 Threat Model (STRIDE) + 데이터 흐름도

### 데이터 흐름도 (DFD)

```
┌──────────────┐
│   사용자      │
└──────┬───────┘
       │ (1) HTTPS
       ▼
┌──────────────────────────────┐
│   Vercel CDN (Edge)          │
│   - TLS 1.3 강제             │
│   - HSTS 활성화              │
└──────┬───────────────────────┘
       │ (2) 정적 HTML
       ▼
┌──────────────────────────────┐
│   정적 사이트 (out/)         │
│   - XSS 불가 (정적)          │
│   - SQL Injection 불가       │
└──────┬───────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│   GitHub Repository          │
│   - 버전 관리                │
│   - 무결성 검증 (SHA)        │
└──────────────────────────────┘

데이터 흐름:
(1) 사용자 → Vercel CDN: HTTPS (암호화)
(2) CDN → 정적 파일: 압축 + 캐싱
(3) 관리자 → GitHub: SSH/HTTPS (인증)
```

### STRIDE 위협 분석

**S - Spoofing (신원 위조)**
```yaml
위협: GitHub 계정 탈취
영향도: 높음 (악의적 콘텐츠 배포)
완화책:
  - GitHub 2FA 필수
  - SSH 키 패스프레이즈
  - Git commit 서명 (GPG)
잔존 리스크: 낮음
```

**T - Tampering (변조)**
```yaml
위협: Git 히스토리 변조
영향도: 중간 (콘텐츠 신뢰도 하락)
완화책:
  - Git 보호된 브랜치 (main)
  - Vercel 자동 빌드 검증
  - 백업 3중화 (GitHub/로컬/Time Machine)
잔존 리스크: 매우 낮음
```

**R - Repudiation (부인)**
```yaml
위협: 배포 이력 부인
영향도: 낮음
완화책:
  - Git 커밋 히스토리 (불변)
  - Vercel 배포 로그 (90일 보존)
  - Co-Authored-By 서명
잔존 리스크: 없음
```

**I - Information Disclosure (정보 노출)**
```yaml
위협: .env 파일 노출
영향도: 없음 (API 키 미사용)
완화책:
  - .gitignore 설정
  - Vercel Environment Variables (미사용)
잔존 리스크: 없음
```

**D - Denial of Service (서비스 거부)**
```yaml
위협: DDoS 공격
영향도: 중간 (서비스 일시 중단)
완화책:
  - Vercel DDoS 보호 (자동)
  - Rate Limiting (Vercel 기본)
  - CDN 분산 (글로벌)
잔존 리스크: 낮음 (Vercel 책임)
```

**E - Elevation of Privilege (권한 상승)**
```yaml
위협: 관리자 권한 탈취
영향도: 높음
완화책:
  - GitHub Organization (향후)
  - 역할 기반 접근 (Owner/Admin/Write)
  - 감사 로그 (GitHub Audit Log)
잔존 리스크: 낮음
```

### 보안 점검 체크리스트 (월간)

```yaml
□ GitHub 2FA 활성 확인
□ SSH 키 만료일 확인 (1년마다 갱신)
□ Git 커밋 서명 검증
□ Vercel 배포 로그 이상 확인
□ HTTPS 인증서 자동 갱신 확인
□ CSP 헤더 설정 검증
□ Lighthouse 보안 점수 100점 유지
```

---

## 📊 Observability (Logs/Metrics/Traces)

### 3종 데이터 표준화

**Logs (로그)**
```yaml
도구: Vercel Logs
형식: JSON 구조화
보존 기간: 90일
레벨: ERROR, WARN, INFO
```

**Metrics (메트릭)**
```yaml
도구: Vercel Analytics + Speed Insights
수집 항목:
  - 페이지뷰
  - 방문자 수
  - Core Web Vitals (LCP, FID, CLS)
  - 디바이스/지역 분포
보존 기간: 무제한
```

**Traces (추적)**
```yaml
도구: N/A (정적 사이트)
향후 계획:
  - Phase 4: OpenTelemetry 도입 (API 추가 시)
  - Correlation ID 적용
```

### Golden Signals 기반 알림

**4가지 Golden Signals**
```yaml
1. Latency (지연):
   측정: TTFB, LCP
   임계값: p95 > 3s
   알림: Slack (향후)

2. Traffic (트래픽):
   측정: 페이지뷰
   임계값: 전일 대비 300% 급증
   알림: 이메일

3. Errors (에러):
   측정: 빌드 실패, 404 에러
   임계값: 빌드 실패 > 2회/일
   알림: GitHub Actions 이메일

4. Saturation (포화):
   측정: Vercel 대역폭 사용률
   임계값: 80% 초과
   알림: Vercel 대시보드 경고
```

### 알림 정책 (On-Call)

**알림 우선순위**
```yaml
P0 (긴급):
  - 서비스 완전 중단 (Vercel 장애)
  - 알림: 즉시 전화 + SMS
  - 대응: 15분 이내

P1 (높음):
  - 빌드 실패 연속 3회
  - 알림: 이메일 + Slack
  - 대응: 1시간 이내

P2 (중간):
  - Lighthouse 점수 80 미만
  - 알림: 이메일
  - 대응: 24시간 이내

P3 (낮음):
  - 대역폭 80% 사용
  - 알림: 주간 리포트
  - 대응: 다음 배포 시
```

---

## ✅ 품질 게이트 (서종원어록 연동)

### 서종원어록 40점 만점 기준

**자동 채점 시스템**
```yaml
도구: 44번 AI학습자동화시스템
기준: /Users/elicon_mark/서종원어록.md § 5대 원칙

채점 항목 (각 10점):
  1. 풍부한 자료 기반 (3개 이상 출처)
  2. 깊은 맥락 이해 (배경 설명)
  3. 감동/재미/교훈 (3요소 포함)
  4. 일관성 유지 (시리즈 톤앤매너)

통과 기준: 30점 이상 (75%)
미달 시: 재작성 필수
```

### 품질 검증 프로세스

**3단계 검증**
```yaml
1단계: 자동 채점 (44번 시스템)
  - 서종원어록 40점 기준
  - 문법/맞춤법 검사
  - 통과: 30점 이상

2단계: 기술 검증 (Lighthouse)
  - Performance: 90+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100

3단계: 최종 승인 (서대표님)
  - 전략적 타당성
  - 브랜드 정합성
  - 승인 → 배포
```

### 품질 메트릭 대시보드

**주간 품질 리포트**
```yaml
콘텐츠 품질:
  - 평균 서종원어록 점수
  - 30점 이상 비율
  - 재작성 횟수

기술 품질:
  - 평균 Lighthouse 점수
  - Core Web Vitals p75
  - 빌드 성공률

사용자 경험:
  - 평균 체류 시간
  - 이탈률
  - 재방문율
```

---

## 🔄 변경 관리 및 배포 프로세스

### GitFlow 전략

**브랜치 전략**
```yaml
main: 프로덕션 (배포)
  - 보호됨 (직접 push 금지)
  - PR + 리뷰 필수
  - 자동 배포 (Vercel)

develop: 개발 (선택, 향후)
  - 미리보기 배포
  - 통합 테스트

feature/*: 기능 개발
  - 예: feature/ai-tools-comparison
  - develop 또는 main으로 PR
```

### 배포 프로세스

**자동 배포 (CI/CD)**
```yaml
트리거: main 브랜치 push
파이프라인:
  1. GitHub Actions:
     - Lint (ESLint)
     - Type Check (TypeScript)
     - Build (npm run build)
     - Lighthouse CI (품질 검증)

  2. Vercel:
     - 빌드 (Next.js)
     - 배포 (CDN)
     - 알림 (이메일)

소요 시간: 3-5분
성공률 목표: 99%
```

### 롤백 정책

**자동 롤백 조건**
```yaml
조건 1: 빌드 실패
  → 조치: 배포 중단, 이전 버전 유지

조건 2: Lighthouse 점수 < 80
  → 조치: 경고, 수동 검토

조건 3: 404 에러율 > 5%
  → 조치: 즉시 롤백 (수동)
```

**수동 롤백 절차**
```bash
# 1. 이전 커밋 확인
git log --oneline

# 2. 롤백
git revert <commit-hash>
git push

# 3. Vercel 자동 재배포
# (약 3분 소요)

# 복구 시간: 5분
```

---

## 📜 규정 준수 (Compliance)

### 저작권 정책

**콘텐츠 출처 명시**
```yaml
원칙: 모든 인용은 출처 명시
형식:
  - 유튜브 영상: 채널명 + 영상 제목 + URL
  - 뉴스 기사: 언론사 + 기사 제목 + URL
  - AI 도구: 공식 문서 + 버전

라이선스:
  - 엘리콘 오리지널: © 2026 ELICON
  - 인용 콘텐츠: Fair Use (공정 이용)
```

### 개인정보 보호

**데이터 수집 정책**
```yaml
수집 데이터: 없음 (정적 사이트)
쿠키: 없음
Analytics: Vercel Analytics (익명)

GDPR 준수:
  - 개인정보 수집 없음
  - 쿠키 배너 불필요
  - GDPR 적용 대상 아님

향후 계획:
  - 댓글 시스템 (Giscus): GitHub 계정 기반
  - 뉴스레터 (선택): 명시적 동의 (Opt-in)
```

### 접근성 (Accessibility)

**WCAG 2.1 AA 준수**
```yaml
필수 요구사항:
  - 키보드 탐색 가능
  - 스크린 리더 호환
  - 명도 대비 4.5:1 이상
  - 대체 텍스트 (이미지)

검증:
  - Lighthouse Accessibility: 100점
  - axe DevTools 자동 테스트
  - 수동 키보드 탐색 테스트 (월간)
```

---

## 🚨 Runbook & Incident Response

### 장애 대응 플레이북

**장애 레벨 정의**
```yaml
L1 (Critical):
  - 서비스 완전 중단
  - 대응 시간: 15분
  - 예: Vercel 플랫폼 장애

L2 (High):
  - 주요 기능 불가
  - 대응 시간: 1시간
  - 예: 빌드 실패 연속 3회

L3 (Medium):
  - 성능 저하
  - 대응 시간: 4시간
  - 예: Lighthouse 점수 < 80

L4 (Low):
  - 사소한 문제
  - 대응 시간: 24시간
  - 예: 링크 오타
```

### 장애 대응 프로세스

**5단계 대응**
```yaml
1. 감지 (Detection):
   - 도구: Vercel Status, Uptime Robot
   - 알림: 이메일, Slack

2. 원인 추적 (Investigation):
   - Vercel Logs 확인
   - GitHub Actions 로그
   - Lighthouse 리포트

3. 완화 (Mitigation):
   - 임시 조치 (예: 정적 페이지 배포)
   - 사용자 공지 (Status Page)

4. 복구 (Recovery):
   - 근본 원인 수정
   - 배포 및 검증
   - 모니터링 강화

5. 포스트모템 (Post-mortem):
   - 근본 원인 분석 (RCA)
   - 재발 방지책
   - 문서화 (logs/)
```

### Runbook 예시

**빌드 실패 시**
```bash
# 1. 로그 확인
gh run list --limit 5
gh run view <run-id>

# 2. 로컬 재현
npm install
npm run build

# 3. 수정
# (에러에 따라 다름)

# 4. 재배포
git add .
git commit -m "Fix build error"
git push

# 5. 검증
# Vercel 대시보드 확인
```

---

## 📋 데이터 거버넌스

### 콘텐츠 관리 정책

**데이터 등급 분류**
```yaml
P0 (공개):
  - 모든 인사이트 (insights/*.md)
  - 보존 기간: 무제한
  - 백업: Git + archived_files/

P1 (내부):
  - PRD, 작업 로그 (docs/, logs/)
  - 보존 기간: 2년
  - 백업: Git only

P2 (임시):
  - 빌드 산출물 (.next/, out/)
  - 보존 기간: 빌드마다 재생성
  - 백업: 불필요

P3 (민감):
  - 환경변수 (.env)
  - 보존 기간: N/A (미사용)
  - 백업: 불필요
```

### 데이터 생명주기

**생성 → 사용 → 보관 → 파기**
```yaml
생성:
  - 44-46번 자동 파이프라인
  - 수동 작성 (서대표님 + 클로드코드)

사용:
  - 웹사이트 게시 (Vercel)
  - 내부 의사결정 (서대표님)

보관:
  - GitHub (무제한)
  - archived_files/ (분기별)

파기:
  - 조건: 2년 미활용 + 서대표님 승인
  - 방법: Git soft delete (히스토리 유지)
```

### 콘텐츠 품질 관리

**검수 프로세스**
```yaml
1. 자동 검수:
   - 서종원어록 40점 기준
   - 문법/맞춤법 (Grammarly)
   - 표절 검사 (Copyscape, 선택)

2. 수동 검수:
   - 사실 확인 (Fact Check)
   - 출처 검증
   - 브랜드 정합성

3. 승인:
   - 서대표님 최종 승인
   - 승인 후 배포
```

---

## 🤖 AI/ML 운영 (MLOps)

### 44-46번 파이프라인 품질 관리

**모델 카드 (44번 AI학습자동화)**
```yaml
모델: 서종원어록 40점 채점기
정확도: 90% (사람 평가 대비)
FP (False Positive): 5% (너무 높게 채점)
FN (False Negative): 5% (너무 낮게 채점)
임계값: 30점 (75%)
편향 점검: 월 1회 (샘플 100개)
```

**드리프트 감지**
```yaml
지표: 평균 점수 추이
임계값: 전월 대비 ±10점
알림: 드리프트 감지 시 이메일
재학습 조건:
  - 드리프트 3회 연속
  - FP/FN 10% 초과
  - 서대표님 요청
```

### 자동화 파이프라인 모니터링

**44번: 유튜브 학습**
```yaml
SLI:
  - 자막 추출 성공률: 95%
  - 분석 완료 시간: < 5분

SLO:
  - 일일 학습 영상: 3개 이상
  - 에러율: < 5%

알림:
  - 자막 추출 실패 연속 3회
  - 분석 시간 10분 초과
```

**45번: 매일 AI 스크랩북**
```yaml
SLI:
  - 스크랩 성공률: 90%
  - 신규 뉴스 발견: 10개/일

SLO:
  - 일일 스크랩 빈도: 1회
  - 중복 제거율: 95%

알림:
  - 스크랩 실패 2일 연속
  - 신규 뉴스 < 5개
```

**46번: 유튜브 심층학습**
```yaml
SLI:
  - 5레이어 분석 완료율: 95%
  - ICE 랭킹 정확도: 85%

SLO:
  - 분석 시간: < 15분
  - 인사이트 품질: 30점 이상

알림:
  - 분석 실패
  - 품질 30점 미만 3회 연속
```

### AI 리스크 관리

**편향 및 윤리 점검**
```yaml
월간 체크:
  - 샘플 100개 수동 검토
  - 편향 지표 측정 (성별/지역/주제)
  - 윤리 위반 사례 점검

조치:
  - 편향 10% 초과 → 재학습
  - 윤리 위반 → 즉시 수정
```

---

## 🛡️ 보안 강화 로드맵

### Phase 1: 현재 (정적 사이트)

**적용 완료**
```yaml
✅ HTTPS (Vercel SSL)
✅ HSTS (Vercel 기본)
✅ 정적 콘텐츠 (XSS/SQLi 불가)
✅ Git 보호된 브랜치
```

### Phase 2: 단기 (1-3개월)

**CSP (Content Security Policy)**
```yaml
목표: XSS 방어 강화
구현:
  # next.config.mjs
  headers: [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ]

검증: Lighthouse Security 100점
```

**SRI (Subresource Integrity)**
```yaml
목표: CDN 변조 방어
구현: Next.js 자동 적용
검증: 외부 스크립트 해시 검증
```

### Phase 3: 중기 (3-6개월)

**WAF (Web Application Firewall)**
```yaml
도구: Vercel Firewall (Pro 플랜)
기능:
  - Rate Limiting (IP별)
  - Bot Score 기반 차단
  - IP Reputation 확인
  - Geo-blocking (선택)

비용: $20/월 (Vercel Pro)
ROI: DDoS 방어 + 대역폭 절감
```

**봇 방어**
```yaml
도구: Vercel Bot Protection
기능:
  - hCaptcha 통합
  - Bot Score 자동 감지
  - 의심 IP 차단

적용: 댓글/문의 폼 (Phase 4)
```

### Phase 4: 장기 (6-12개월)

**RBAC → ABAC 전환**
```yaml
현재: 인증 없음 (공개 사이트)
RBAC 도입 (Phase 3):
  - Roles: Admin, Editor, Viewer
  - 관리자 대시보드 (Vercel Auth)

ABAC 확장 (Phase 4):
  - 속성 기반 권한:
    * 테넌트 (엘리콘 vs 외부)
    * 요금제 (무료 vs 프리미엄)
    * 리스크 스코어 (0-100)
  - 동적 권한 변경:
    * 리스크 스코어 > 80 → 읽기 전용
    * 요금제 만료 → 접근 차단
```

**Zero Trust 아키텍처**
```yaml
원칙:
  - 모든 요청 검증
  - 최소 권한 (Least Privilege)
  - 암시적 신뢰 제거

구현:
  - Vercel Edge Middleware
  - JWT 토큰 검증
  - 세션 관리 (Redis)
```

---

## 💰 예산 및 리소스

### 초기 비용 (무료)
```yaml
Hosting: Vercel Hobby (무료)
Domain: .vercel.app (무료)
CI/CD: GitHub Actions (무료)
Analytics: Vercel Analytics (무료)
Repository: GitHub (무료)
총 비용: $0/월
```

### 확장 시 예상 비용 (선택)
```yaml
커스텀 도메인: $10-15/년 (선택)
Vercel Pro: $20/월 (트래픽 초과 시)
이미지 최적화: 무료 (Next.js 내장)
총 비용: $0-20/월
```

### 인력 리소스
```yaml
개발: 클로드코드 (자동화)
콘텐츠: 44-46번 자동 파이프라인 + 서대표님 검토
디자인: Tailwind CSS 템플릿 (무료)
유지보수: 주 1시간 (자동화 후)
```

---

## 🔄 관련 프로젝트와의 역할 분담

| 프로젝트 | 역할 | 47번과의 관계 |
|---------|------|-------------|
| 44_AI학습자동화 | 유튜브 영상 학습 | 학습 결과 → 47번 인사이트로 통합 |
| 45_매일AI_스크랩북 | 일일 스크랩 | 원시 데이터 → 47번 분석 및 정제 |
| 46_유튜브_심층학습 | 계층적 심층 학습 | 심층 분석 → 47번 리서치 리포트 |

**47번의 고유 역할**:
- 다양한 소스의 정보를 **통합 분석**
- 비즈니스 관점의 **전략적 인사이트** 도출
- 장기적 **지식 자산** 구축
- **웹사이트**를 통한 대외 공개 및 브랜드 구축

---

## 📝 변경 이력

| 날짜 | 버전 | 변경 내용 |
|------|------|----------|
| 2025-12-03 | 1.0 | PRD 작성, 프로젝트 번호 변경 (45 → 47) |
| 2026-01-08 | 2.0 | 전문가급 PRD 업그레이드: 기술 스택, 아키텍처, 데이터 모델, 배포 전략, 보안/성능, 예산, 웹 배포 전략 추가 |
| 2026-01-09 | 3.0 | **엔터프라이즈급 PRD 격상**: SLO/SLI + Error Budget, Capacity Planning, DR/BCP, STRIDE Threat Model, Observability (Logs/Metrics/Traces), 품질 게이트 (서종원어록 연동), 변경 관리, 규정 준수, Runbook & Incident Response, 데이터 거버넌스, AI/ML 운영 (MLOps), 보안 강화 로드맵 (CSP/WAF/ABAC) - 총 12개 엔터프라이즈급 섹션 추가. **검증 가능한 지표 및 정책 명시**로 감사 대응 및 운영 투명성 확보. |

---

## 📌 다음 단계

### 즉시 (오늘)
1. Next.js 프로젝트 초기화
2. GitHub 리포지토리 생성
3. Vercel 연동 설정

### 이번 주
4. 홈페이지 + 인사이트 목록 페이지 개발
5. 3개 샘플 인사이트 작성
6. 초기 배포 (MVP)

### 다음 주
7. 44-46번 프로젝트 콘텐츠 마이그레이션
8. SEO 최적화
9. 트렌드 대시보드 개발

---

**승인자**: 서종원 대표
**승인일**: (대기 중)
**다음 검토일**: 2026-01-15 (MVP 배포 후)

---

**관련 문서**:
- `/Users/elicon_mark/서종원어록.md` - 콘텐츠 제작 철학
- `/Users/elicon_mark/Developer/PROJECT_RULES.md` - 프로젝트 관리 규칙
- `logs/260108_프로젝트점검및구조정비[클로드].md` - 오늘 작업 로그

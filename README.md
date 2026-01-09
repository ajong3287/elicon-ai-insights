# ELICON AI Insights Lab

> AI 도구 및 트렌드에 대한 전문적인 인사이트를 제공하는 엘리콘의 지식 플랫폼

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)

## 🌐 배포 정보

| 항목 | 정보 |
|------|------|
| **Production URL** | https://elicon-ai-insights-n1i2ea530-ajong3287-4974s-projects.vercel.app |
| **Vercel Dashboard** | https://vercel.com/ajong3287-4974s-projects/elicon-ai-insights |
| **상태** | ✅ 활성 (Phase 1 완료) |
| **마지막 배포** | 2026-01-09 |
| **접근 권한** | 내부 (Vercel 주소) |
| **Phase** | Phase 1: 내부 지식 관리 ✅ |
| **커스텀 도메인** | Phase 4 이후 고려 (insights.elicon.co.kr) |

## 🎯 프로젝트 비전

AI 도구 및 트렌드에 대한 인사이트를 수집·분석·연구하여 **내부 지식 플랫폼 (Phase 1)**으로 제공하고, 엘리콘의 AI 전략 수립에 활용. 향후 **대외 공개 (Phase 2 이후)** 고려.

### 핵심 목표
1. **인사이트 허브**: 최신 AI 도구/트렌드 분석을 체계적 관리
2. **전략 자산**: 엘리콘 내부 의사결정 지원 (우선순위)
3. **자동화**: AI 학습 → 분석 → 웹 배포 파이프라인 구축
4. **브랜드 구축**: AI 전문성 대외 홍보 (Phase 2 이후)

## 🚀 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel (무료 Hobby 플랜)
- **CI/CD**: GitHub Actions

## 📁 프로젝트 구조

```
elicon-ai-insights/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 홈페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 글로벌 스타일
├── components/            # React 컴포넌트
├── lib/                   # 유틸리티
├── public/                # 정적 파일
├── insights/              # 인사이트 콘텐츠 (Markdown)
│   ├── ai_tools/         # AI 도구 분석
│   ├── trends/           # 트렌드 분석
│   └── poc/              # PoC 결과
├── docs/                  # 문서
│   └── prd.md            # 프로젝트 요구사항 정의서
└── logs/                  # 작업 로그
```

## 🛠️ 로컬 개발

### 필수 요구사항
- Node.js 20.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3000 열기
```

### 빌드

```bash
# 정적 사이트 생성 (SSG)
npm run build

# 빌드 결과 확인
npm run start
```

## 🌐 Vercel 배포

### 자동 배포 (권장)

1. **Vercel 가입** (GitHub 계정으로 로그인)
   - https://vercel.com/signup

2. **New Project 클릭**
   - Import Git Repository 선택
   - `elicon-ai-insights` 리포지토리 선택

3. **배포 설정**
   - Framework Preset: **Next.js** (자동 감지)
   - Root Directory: `./` (기본값)
   - Build Command: `npm run build` (기본값)
   - Output Directory: `out` (자동 설정)

4. **Deploy 클릭**
   - 약 1-2분 후 배포 완료
   - 배포 URL: `https://elicon-ai-insights.vercel.app`

### 환경 변수 (선택)

Vercel 대시보드에서 Environment Variables 설정:
- 현재는 필요 없음 (정적 사이트)
- 향후 API 연동 시 추가 예정

### 자동 배포 트리거

- `main` 브랜치에 푸시할 때마다 자동 배포
- Pull Request 생성 시 미리보기 배포 자동 생성

## 📊 주요 기능

### Phase 1 완료 ✅
- ✅ 홈페이지
- ✅ 인사이트 목록 페이지
- ✅ 트렌드 분석 페이지
- ✅ 3개 샘플 인사이트 (평균 품질 87%)
- ✅ Vercel 배포

### Phase 2: 콘텐츠 확장 (다음 단계)
- 📝 10개 이상 인사이트 축적
- 📝 44-46번 프로젝트 자동 연동
- 📝 개별 인사이트 상세 페이지 (/insights/[id])
- 📝 내부 피드백 수집

### Phase 3: 자동화 (1개월)
- 📝 인사이트 생성 자동화
- 📝 품질 자동 검증

### Phase 4: 대외 공개 (선택적)
- 📝 커스텀 도메인 (insights.elicon.co.kr)
- 📝 SEO 최적화
- 📝 트렌드 대시보드 고도화

## 🔗 연계 프로젝트

- **44_AI학습자동화시스템**: 유튜브 영상 학습 → 인사이트 원시 데이터
- **45_매일AI_스크랩북**: 일일 AI 뉴스 → 트렌드 분석 소스
- **46_유튜브_심층학습**: 계층적 학습 → 깊이 있는 인사이트

## 📝 라이선스

Copyright © 2026 ELICON. All rights reserved.

## 👥 기여자

- **서종원 대표** - 프로젝트 리더
- **Claude Code** - 개발 및 자동화

---

**GitHub**: https://github.com/ajong3287/elicon-ai-insights
**문의**: ELICON
**관리**: [총무]00_ELICON_PMO/DASHBOARD/deployed_projects.md

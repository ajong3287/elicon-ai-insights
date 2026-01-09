# 커스텀 도메인 설정 가이드

**작성일**: 2026-01-09
**대상**: 서종원 대표님
**소요 시간**: 약 15분 (DNS 전파 시간 제외)

---

## 추천 도메인

### Option 1: `insights.elicon.co.kr` ⭐ (추천)
- 짧고 기억하기 쉬움
- 브랜드 중심 (elicon 직결)
- SEO 친화적

### Option 2: `ai-insights.elicon.co.kr`
- 명확한 용도 표현
- AI 키워드 포함

---

## 설정 단계

### 1단계: Vercel 프로젝트 설정

1. **Vercel 대시보드 접속**
   ```
   https://vercel.com/ajong3287-4974s-projects/elicon-ai-insights/settings/domains
   ```

2. **도메인 추가**
   - "Add Domain" 버튼 클릭
   - 입력: `insights.elicon.co.kr` (또는 선택한 도메인)
   - "Add" 클릭

3. **DNS 설정 정보 확인**
   Vercel이 제공하는 DNS 레코드 정보를 확인합니다:
   - **CNAME 방식** (추천):
     ```
     Type: CNAME
     Name: insights (또는 ai-insights)
     Value: cname.vercel-dns.com
     ```

   - **A 레코드 방식** (대안):
     ```
     Type: A
     Name: insights
     Value: 76.76.21.21
     ```

---

### 2단계: DNS 설정 (elicon.co.kr 관리 업체)

**elicon.co.kr 도메인을 관리하는 곳에서 진행**

#### 가비아 기준 (예시)
1. 가비아 로그인 → My가비아
2. 서비스 관리 → 도메인 관리 → DNS 설정
3. `elicon.co.kr` 선택
4. "레코드 추가" 클릭
5. 다음 정보 입력:
   ```
   호스트명: insights
   레코드 타입: CNAME
   값/위치: cname.vercel-dns.com
   TTL: 3600 (1시간)
   ```
6. "추가" 버튼 클릭

#### Cloudflare 기준 (예시)
1. Cloudflare 대시보드 → elicon.co.kr 선택
2. DNS 탭 선택
3. "Add record" 클릭
4. 다음 정보 입력:
   ```
   Type: CNAME
   Name: insights
   Target: cname.vercel-dns.com
   Proxy status: DNS only (회색 구름)
   TTL: Auto
   ```
5. "Save" 버튼 클릭

---

### 3단계: 검증 및 확인

1. **Vercel에서 검증**
   - Vercel 대시보드로 돌아가기
   - 도메인 상태 확인 (보통 1-5분 소요)
   - 상태: "Valid Configuration" ✅

2. **DNS 전파 확인**
   ```bash
   # 터미널에서 확인
   nslookup insights.elicon.co.kr

   # 또는
   dig insights.elicon.co.kr
   ```

   결과 예시:
   ```
   insights.elicon.co.kr canonical name = cname.vercel-dns.com
   ```

3. **브라우저 테스트**
   - 브라우저에서 `https://insights.elicon.co.kr` 접속
   - 홈페이지 정상 표시 확인
   - SSL 인증서 자동 발급 확인 (🔒 자물쇠 아이콘)

---

## 예상 소요 시간

| 단계 | 소요 시간 |
|------|----------|
| Vercel 도메인 추가 | 2분 |
| DNS 레코드 추가 | 3분 |
| DNS 전파 대기 | 5분 ~ 24시간 |
| SSL 인증서 발급 | 자동 (1-5분) |

**일반적**: 10-30분 내 완료
**최대**: 24-48시간 (DNS 전파 지연 시)

---

## 문제 해결

### 1. "Invalid Configuration" 에러
**원인**: DNS 레코드가 아직 전파되지 않음
**해결**: 10-30분 대기 후 다시 확인

### 2. "Too Many Redirects" 에러
**원인**: Cloudflare Proxy 활성화 (주황색 구름)
**해결**: DNS only로 변경 (회색 구름)

### 3. SSL 인증서 미발급
**원인**: 도메인 검증 미완료
**해결**: Vercel에서 도메인 상태 확인 후 재시도

### 4. DNS 전파 확인 도구
- https://dnschecker.org
- 전 세계 DNS 서버에서 전파 상태 확인 가능

---

## 완료 후 작업

### README.md 업데이트
```markdown
**배포 URL**:
- 메인: https://insights.elicon.co.kr
- Vercel: https://elicon-ai-insights-n1i2ea530-ajong3287-4974s-projects.vercel.app
```

### Google Search Console 등록
1. https://search.google.com/search-console
2. 도메인 소유권 인증
3. Sitemap 제출

### Google Analytics 연동 (선택)
- Vercel Analytics는 이미 활성화
- GA4 추가 시 추적 코드 삽입

---

## 참고 링크

- **Vercel 도메인 가이드**: https://vercel.com/docs/concepts/projects/custom-domains
- **DNS 레코드 설명**: https://vercel.com/docs/concepts/projects/domains/dns-records
- **SSL 인증서**: https://vercel.com/docs/concepts/projects/domains/ssl-certificates

---

## 체크리스트

- [ ] 도메인 선택 (`insights.elicon.co.kr` 또는 `ai-insights.elicon.co.kr`)
- [ ] Vercel 대시보드에서 도메인 추가
- [ ] DNS 레코드 추가 (CNAME 또는 A 레코드)
- [ ] DNS 전파 확인 (nslookup 또는 dig)
- [ ] 브라우저에서 정상 접속 확인
- [ ] SSL 인증서 발급 확인 (🔒)
- [ ] README.md 업데이트
- [ ] 작업 로그 작성

---

**문의 사항이 있으시면 Claude에게 질문해주세요!**

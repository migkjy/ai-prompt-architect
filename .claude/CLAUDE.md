# ai-prompt-architect — PL 독립 세션 설정

## 프로젝트 개요
AI 프롬프트 아키텍트 — 프롬프트 판매/전시 웹 플랫폼
- GitHub: migkjy/ai-prompt-architect
- Vercel: ai-prompt-architect-nine.vercel.app
- 배포 브랜치: production, staging만 (main/master 배포 비활성)

## 기술 스택
- Next.js 16.1.6 / React 19 / TypeScript 5
- UI: Radix UI, Lucide, CVA, Tailwind CSS 4
- 결제: LemonSqueezy API
- 패키지 매니저: npm (package-lock.json)

## 프로젝트 경로
`/Users/nbs22/(Claude)/(claude).projects/business-builder/projects/ai-prompt-architect/`

## 빌드 & 실행
```bash
npm install && npm run dev    # 개발
npm run build                 # 프로덕션 빌드
npm run lint                  # ESLint
```

## 핵심 구조
```
src/app/           — App Router 페이지 (page.tsx, layout.tsx)
src/app/api/       — API Routes (checkout)
src/app/products/  — 개별 상품 페이지 ([slug])
src/app/bundle/    — 번들 페이지
src/app/checkout/  — 체크아웃
src/app/success/   — 결제 성공
src/lib/           — 유틸리티 (products.ts, utils.ts)
```

## 개발 규칙
- 타 프로젝트 파일 수정 금지
- 작업 완료 후 반드시 commit + push
- staging → production 순서 배포 (main→production 직행 금지)
- DB 없음 (정적 상품 데이터 + LemonSqueezy API)
- TDD 강제: 테스트 먼저 → 구현 → 통과

## 세션 간 소통
```bash
scripts/project-reply.sh "메시지" "ai-prompt-architect"
```

## 참고
- 환경변수: `.env.local` (gitignored)
- API 키 정보: `.claude/knowledge/api-keys.md` (gitignored)
- 아키텍처 상세: `.claude/knowledge/architecture.md`
- 제약사항: `.claude/knowledge/constraints.md`

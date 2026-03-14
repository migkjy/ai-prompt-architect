# Constraints — ai-prompt-architect

## 배포 제약
- Vercel 무료 플랜: 일일 배포 100건 제한 (전체 프로젝트 공유)
- production/staging 브랜치만 배포 활성 (vercel.json 설정)
- main → production 직행 PR 절대 금지 (main → staging → production)
- `vercel deploy` / `vercel --prod` CLI 배포 절대 금지

## 코드 제약
- 타 프로젝트 파일 수정 금지
- DB 없음 — 상품 데이터는 src/lib/products.ts 관리
- .env.local 파일 커밋 금지 (.gitignore 포함)

## 비즈니스 제약
- 결제: LemonSqueezy API 전용
- 콘텐츠 생성: 자비스/PL 직접 생성 금지 (게리비 에이전트 전담)
- 대량 더미 데이터 10개 초과 생성 금지
- .vercel.app 링크 외부 노출 금지

## Git 규칙
- 작업 완료 즉시 commit + push
- 커밋 형식: `chore: update {파일명} — {변경 요약}` (설정/스킬)
- push 전: `git pull --rebase origin main`
- production 브랜치 있으면 main push 후 PR 생성

## 안전장치
- DROP/TRUNCATE/파괴적 명령 금지
- 새 Vercel 프로젝트 생성 금지
- 서비스 간 크로스 프로모션 금지

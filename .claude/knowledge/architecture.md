# Architecture — ai-prompt-architect

## 시스템 아키텍처
정적 프롬프트 전시/판매 사이트. DB 없이 `src/lib/products.ts`에 상품 데이터 하드코딩.

## 라우팅 (App Router)
| 경로 | 용도 |
|------|------|
| `/` | 메인 랜딩 페이지 |
| `/products/[slug]` | 개별 상품 상세 |
| `/bundle` | 번들 상품 페이지 |
| `/checkout` | 체크아웃 페이지 |
| `/success` | 결제 완료 페이지 |
| `/api/checkout` | 체크아웃 API Route |

## 결제 플로우
1. 사용자가 상품 선택
2. `/checkout` 페이지에서 결제 정보 입력
3. `/api/checkout` → LemonSqueezy API 호출
4. 결제 완료 → `/success` 리다이렉트

## SEO
- `src/app/robots.ts` — robots.txt 동적 생성
- `src/app/sitemap.ts` — sitemap.xml 동적 생성

## 배포
- Vercel (Git 연동)
- vercel.json: production/staging 브랜치만 배포 활성
- main/master/preview 배포 비활성

## 의존성 구조
- UI 컴포넌트: Radix UI + CVA + clsx + tailwind-merge
- 아이콘: Lucide React
- shadcn: devDependency (컴포넌트 생성용 CLI)

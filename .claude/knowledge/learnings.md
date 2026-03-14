# Learnings — ai-prompt-architect

## 아키텍처 결정
- DB 미사용: 상품 수가 적어 src/lib/products.ts에 하드코딩으로 충분
- LemonSqueezy 선택: Paddle 대비 설정 간편, 소규모 디지털 상품 판매에 적합

## 배포
- vercel.json으로 main 배포 비활성화 — staging/production만 활성
- 이 설정은 Vercel 일일 배포 100건 제한 절약 목적

## 주의사항
- Next.js 16은 최신 버전 — 일부 커뮤니티 라이브러리 호환성 이슈 가능
- React 19 사용 중 — Server Components 기본, 클라이언트 컴포넌트는 'use client' 필수

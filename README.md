# 📘 Next.js 15 Deep Dive

## 🚀 Project Philosophy: Beyond the Tutorial

이 프로젝트는 zerocho님의 Next.js 14 강의를 기반으로 시작되었으나, **"단순한 기능 구현"을 넘어 "프로덕션 레벨의 디테일"을 잡는 것**을 목표로 **Next.js 15 (React 19)** 환경에서 새롭게 리팩토링할 것입니다.

### 🎯 Core Values

- **No More Copy-Paste**: 강의 코드를 맹목적으로 따라치지 않고, 각 라인의 의미와 동작 원리를 100% 이해한 뒤 작성합니다.
- **Deep Dive into Details**: 강의에서 다루지 않은 엣지 케이스(Edge Case), 웹 접근성(A11y), 성능 최적화, 보안 이슈를 스스로 발굴하여 해결합니다.
- **Future-Proof Engineering**: **Next.js 15**의 최신 스펙(Async Request APIs, Server Actions)을 준수하여, 향후 **Next.js 16** 등 메이저 업데이트 시에도 마이그레이션 비용이 없는 "표준(Standard) 아키텍처"를 지향합니다.

---

## 📝 Troubleshooting & Migration Log

개발 과정에서의 기술적 고민과 트러블슈팅, 매일의 학습 기록은 별도 문서로 관리합니다.

👉 [**See Full Development Log (TIL)**](./DEV_LOG.md)

- **Next.js 15 Async Params**: `params` 비동기 처리 적용.
- **Parallel Routes**: 딥링크 모달 구현을 위한 라우팅 구조 설계.

# 📝 Development Log (TIL)

## 2026-01-19: Next.js Advanced Routing & UX

### 1. Parallel & Intercepting Routes

- **Key Learning**: 복잡한 라우팅 패턴을 활용하여 'URL 공유가 가능한 딥링크 모달' 구현.
- **Detail**:
- **Parallel Routes (`@folder`)**:
- 하나의 레이아웃(`layout.tsx`) 안에서 모달과 메인 페이지를 병렬(Parallel)로 렌더링하도록 슬롯을 구성함.

- **Intercepting Routes (`(.)folder`)**:
- 내부 링크 이동 시 경로를 가로채서 모달을 띄우는 역할.
- 이를 통해 사용자는 현재 페이지의 맥락을 잃지 않으면서 상세 내용을 확인할 수 있음.

### 2. Deep Dive: Soft Navigation vs Hard Navigation

> Intercepting Routes가 "왜 새로고침하면 페이지가 되고, 클릭하면 모달이 되는지"를 이해하는 핵심 개념.

#### 💡 핵심 비유 (Analogy)

- **Soft Navigation**: PPT 쇼를 끄지 않고 **다음 슬라이드로 자연스럽게 넘기는 것**. (상태 유지)
- **Hard Navigation**: PPT 프로그램을 껐다가 **파일을 다시 더블클릭해서 켜는 것**. (완전 초기화)

#### 🔍 상세 비교표

| 구분             | Soft Navigation (부드러운 이동)       | Hard Navigation (딱딱한 이동)            |
| ---------------- | ------------------------------------- | ---------------------------------------- |
| **발동 조건**    | `<Link />` 클릭, `router.push()`      | 새로고침(F5), 주소창 입력, URL 직접 접속 |
| **동작 방식**    | 필요한 컴포넌트(JSON/RSC)만 부분 교체 | HTML 문서 전체를 서버에서 다시 받아옴    |
| **상태(State)**  | **유지됨** (Client State 보존)        | **초기화됨** (메모리 리셋)               |
| **Intercepting** | **✅ 작동함 (모달이 뜸)**             | **❌ 작동 안 함 (원래 페이지가 뜸)**     |

#### 🚀 왜 중요한가? (Deep Link UX)

이 차이를 활용해 **"하나의 URL"** 로 두 가지 최적화된 경험을 동시에 제공할 수 있다.

1. **사용자 경험 (Soft)**: 피드를 보던 중 끊김 없이 모달로 콘텐츠를 확인 (Context 유지).
2. **공유 가능성 (Hard)**: 링크를 공유받은 사람은 모달 뒤의 배경 없이 온전한 페이지로 콘텐츠 확인.

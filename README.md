# 그레이비랩

## 1. 프로젝트 소개

- 진단 결과 페이지 구현
- 기간: 22.02.24 ~ 22.02.25

## 2. 배포 링크

[✨ Demo Link ✨](https://gravylab.netlify.app/)

## 3. 팀원 소개

|  이름  |    Role     |
| :----: | :---------: |
| 손영산 | Team Leader |
| 서한석 | Team Member |
| 유송현 | Team member |
| 윤솔비 | Team member |
| 이지수 | Team member |
| 조영제 | Team member |

## 4. 기술 스택

<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=black"> <img src="https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=black"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=black">

<br/>

## 5.디렉토리 구조

```bash
src
│   ├── App.vue
│   ├── assets
│   │   ├── all.png
│   │   ├── cat.png
│   │   ├── corp.png
│   │   ├── logo.png
│   │   └── me.png
│   ├── components
│   │   ├── HeaderPage.vue
│   │   ├── HorizontalBar.vue
│   │   ├── ResultWrap.vue
│   │   ├── SearchBar.vue
│   │   ├── SearchBarModal.vue
│   │   ├── TabSection.vue
│   │   ├── TestTab.vue
│   │   └── chart
|   |           └── PentagonChart.vue
│   ├── mock
│   │   └── index.js
│   ├── main.js
└── vue.config.js


```

## 6. 실행 방법

```
git clone https://github.com/wanted-pre-onboarding-09/wanted-codestates-project-9-6.git

npm install

npm run serve
```

## 7. 구현

### 검색

#### 헤더

- 헤더의 다시 진단하기 클릭 시 페이지 reload

#### 검색

- 데이터에 존재하는 기업명 입력 시 `App.vue`에 `inpulVal`로 obejct 데이터 값 전달
  - index.js에 데이터를 `App.vue`에 `data`로 등록 - `inputVal`에 값을 할당하는 과정에서 `input value`를 `Object`와 비교하기 위해 `filter`사용
  ```
  let filtering = this.companies.filter((item) => [item.name](http://item.name/) === value);
  ```
  - 필터 적용된 `data` 값이 `inputVal`에 전달
  - 오른쪽 상단에 검색 결과 표시

#### 모달

- 존재하지 않는 데이터를 입력 시에는 모달창을 띄움

  - filter를 사용해 데이터값 비교

  ```
  if(this.companies.filter((item) => item.name === event.target.value).length === 0)
  ```

#### 펜타곤 차트

<img src="https://user-images.githubusercontent.com/84840032/155680381-b4492bb4-d850-49c6-a4a7-1bb7d04f9ae9.png">

- vue3 → vue-chart 프레임워크 사용 제한
- vue-chart-3 → `RadarChart`, `useRadarChart` 사용
  - `RadarChart`: 차트 컴포넌트
  - `useRadarChart`: `porps`와 `ref`를 반환하는 훅함수
- `chartData`, `options`, `plugin` 설정 → 오각형 차트 생성
- `props(chartValue)`의 변경 감지
  - `props`가 변경되면 차트를 리렌더 필요
    - 방법1 - 차트 인스턴스화 → 인스턴스 메서드 사용
    - 방법2 - `RadarChart extends`로 확장해 기능 추가

```
watch: {
    chartValue: function () {
			// 차트 리렌더 로직
      console.log('chartValue 변화');
    },
  },
```

#### 모두/본인/회사 탭

- `v-for` 로 `button` 태그 3개 생성
- `v-on:click`으로 클릭된 탭의 `active CSS` 적용
- `$emit` 메소드로 Tab index를 ‘자식 컴포넌트(`TabSection.vue`)’에서 ‘부모 컴포넌트(`App.vue`)’로 전달

<img src="https://user-images.githubusercontent.com/84840032/155681205-9bb59f03-5b56-416a-ad56-cce8e98db11c.png">

#### 바 차트

<img src="https://user-images.githubusercontent.com/84840032/155682042-f27a071c-98bf-480b-b3f8-ed250d64d928.png">

- 사용자 성향 데이터를 활용해 결과 동적 반영
- vue3와 vue-chartjs의 버전 문제로 초반 시간 소요 → vue-chart-3 추가해서 해결
- BarChart 가로로 구현
- BarChart에서 중앙을 기준으로 왼쪽으로 표시되는 부분을 위해서 `props`로 전달된 값을 음수로 변경해주는 작업
- 현재 `props`로 사용자 데이터 받아오는 부분까지 완료

## 8. 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |

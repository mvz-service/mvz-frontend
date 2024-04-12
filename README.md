# MOVIE ZOA(MVZ)

<p align="center">
    <img src="https://github.com/solo-service/mvz-frontend/assets/96280450/cea73c50-dc0e-49ee-bb00-00fbee73fec8">
</p>


## MVZ 1.0
>**개발기간** 2024.03 ~ 2024.04

## 배포주소
> https://mvz-lemon.vercel.app/

## 개발팀
|프론트엔드|
|:---------:|
|<img width=100 src="https://github.com/solo-service/mvz-frontend/assets/96280450/2f15aa41-a15c-4694-9c72-1e578973902b"/>|
|https://banal7.tistory.com/|

## 프로젝트 소개

영화진흥위원회 API를 활용하여 일주일간의 박스오피스 순위와 함께 영화 목록, 각 영화사, 영화인의 데이터를 가져오는 서비스를 제작하였습니다.<br/>
영화사 영화인 영화 등 여러 가지의 영화와 관련된 정보들을 사용자에게 제공하고 있고 사용자들은 해당 영화에 대한 리뷰를 작성할 수 있습니다.

## 시작 가이드
### 요구사항
+ Node.js 20.11.1^
+ Npm 10.5.0^

```
$ npm install
$ npm start
````

## 기술 스택
### Environment
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"> 
### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

### Communication
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">

### Design
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">


## 화면 구성
|메인페이지|영화목록|
|:---------:|:---------:|
|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/e7d96bd4-b3f7-41de-8682-9bbed8b9805b">|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/db912320-f5c0-4752-84c3-b1bd1856c0ee">
|영화사목록|영화인목록|
|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/75677b5c-724d-42e9-b4ab-3924dbebf975">|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/92ff1dd3-19e9-4236-bf26-41bb7bc005c6">
|영화 뷰페이지|리뷰 작성페이지|
|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/8e7cd6b5-4058-4468-8890-cfba49b0a7c6">|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/27bd9427-1381-47ad-abc8-518ecf2655e9">
|회원가입 페이지|로그인 페이지|
|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/a5215a47-5a71-40e7-a4ba-589a3afe1748">|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/a108f5bb-8cea-49e4-8f1a-93701a626887">
|마이페이지|
|<img src="https://github.com/solo-service/mvz-frontend/assets/96280450/24b82331-90e8-45d0-b054-353a23f83492">

## 주요 기능
### ⭐영화진흥원 API을 통한 영화 데이터 제공
+ 박스오피스, 영화목록, 영화사, 영화인의 정보를 제공합니다.
### ⭐ Firebase을 통한 회원관리
+ 이메일 패스워드를 통한 회원가입이 가능합니다
+ 깃헙 , 구글을 통한 OAuth 로그인이 가능합니다.
### ⭐ Firebase의 NoSQL을 데이터 저장
+ 리뷰작성
+ 유저 DisplayName 변경
+ Firebase의 Storage을 이용해 프로필 이미지의 변경

## 아키텍쳐

```
mvz-frontend
├─ .github
│  ├─ ISSUE_TEMPLATE
│  │  └─ issue-template.md
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ prettier.config.cjs
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.test.tsx
│  ├─ App.tsx
│  ├─ asset
│  │  └─ image
│  │     ├─ anonymous.jpg
│  │     ├─ company.jpg
│  │     ├─ g-logo.png
│  │     ├─ poster.jpg
│  │     └─ tistory.svg
│  ├─ components
│  │  ├─ auth
│  │  │  ├─ mypage
│  │  │  │  └─ TabBtn.tsx
│  │  │  ├─ PrivateRoute.tsx
│  │  │  ├─ PublicRoute.tsx
│  │  │  ├─ sign
│  │  │  └─ social
│  │  │     ├─ GitHubBtn.tsx
│  │  │     └─ GoogleBtn.tsx
│  │  ├─ common
│  │  │  ├─ Footer.tsx
│  │  │  ├─ form
│  │  │  │  ├─ Btn.tsx
│  │  │  │  ├─ Input.tsx
│  │  │  │  └─ Textarea.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ Layout
│  │  │     └─ Layout.tsx
│  │  ├─ company
│  │  │  └─ Card.tsx
│  │  ├─ main
│  │  │  ├─ MainSilde.tsx
│  │  │  └─ MovieCard.tsx
│  │  ├─ Modal
│  │  │  ├─ CustomModal
│  │  │  │  ├─ CustomModal.tsx
│  │  │  │  ├─ Privacy.tsx
│  │  │  │  └─ Service.tsx
│  │  │  ├─ MessageModal
│  │  │  │  └─ MessageModal.tsx
│  │  │  └─ Modals.tsx
│  │  ├─ movie
│  │  │  └─ Card.tsx
│  │  ├─ people
│  │  │  └─ Card.tsx
│  │  ├─ review
│  │  │  ├─ Btn.tsx
│  │  │  ├─ List.tsx
│  │  │  └─ Remove.tsx
│  │  └─ view
│  │     ├─ Poster.tsx
│  │     └─ SmallPoster.tsx
│  ├─ constants
│  │  ├─ api.ts
│  │  └─ error.ts
│  ├─ firebase.ts
│  ├─ hook
│  │  ├─ useGetSlideMoviePoster.ts
│  │  ├─ useGetUser.ts
│  │  ├─ useModals.ts
│  │  ├─ useMovieGetPoster.ts
│  │  └─ useReview.ts
│  ├─ index.css
│  ├─ index.tsx
│  ├─ page
│  │  ├─ 404
│  │  │  └─ NotFound.tsx
│  │  ├─ auth
│  │  │  ├─ login
│  │  │  │  └─ Login.tsx
│  │  │  ├─ mypage
│  │  │  │  └─ Mypage.tsx
│  │  │  └─ sign
│  │  │     └─ Sign.tsx
│  │  ├─ company
│  │  │  └─ Company.tsx
│  │  ├─ main
│  │  │  └─ Main.tsx
│  │  ├─ movie
│  │  │  └─ List.tsx
│  │  ├─ people
│  │  │  └─ People.tsx
│  │  ├─ review
│  │  │  ├─ Edit.tsx
│  │  │  └─ Write.tsx
│  │  └─ view
│  │     └─ View.tsx
│  ├─ provider
│  │  └─ ModalsProvider.tsx
│  ├─ react-app-env.d.ts
│  ├─ recoil
│  │  ├─ modal
│  │  │  └─ atom.ts
│  │  └─ review
│  │     └─ atom.ts
│  ├─ reportWebVitals.ts
│  ├─ setupProxy.js
│  ├─ setupTests.ts
│  ├─ types
│  │  ├─ CompanyListType.ts
│  │  ├─ DailyType.ts
│  │  ├─ movieInfoType.ts
│  │  ├─ MovieListType.ts
│  │  ├─ PeopleListType.ts
│  │  ├─ ReviewType.ts
│  │  └─ weeklyType.ts
│  └─ utils
│     ├─ fetch
│     │  ├─ company
│     │  │  └─ CompanyList.ts
│     │  ├─ main
│     │  │  ├─ day.ts
│     │  │  └─ movie.ts
│     │  ├─ movie
│     │  │  └─ MovieList.ts
│     │  ├─ people
│     │  │  └─ PeopleList.ts
│     │  ├─ poster
│     │  │  ├─ ListGet.ts
│     │  │  ├─ SlideGet.ts
│     │  │  └─ ViewGet.ts
│     │  ├─ review
│     │  │  ├─ getReview.ts
│     │  │  └─ remove.ts
│     │  └─ view
│     │     └─ movieInfo.ts
│     └─ MySwal.ts
├─ tailwind.config.js
└─ tsconfig.json

```
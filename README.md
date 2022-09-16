# 로그인 full-stack 구현


## 💡기술스택
```
[FE] React Native, MobX, TypeScript
[BE] Nest.js, MySQL, TypeORM
[+] bcrypt.js, jwt, passport 모듈
```

## 💡주요 기능
1. **회원가입 및 로그인**
    - 회원가입 시 필수 입력 항목에 대한 Validation 검사
    - 회원가입 시 아이디 중복 검사 기능
    - 자동 로그인 기능
    
2. **게시글 작성, 수정 및 삭제하기 기능(CRUD)**
    - 게시글의 제목과 내용을 입력하여 생성
    - 본인 게시글 수정 및 삭제
    
3. **댓글 기능**
    - 게시글에 댓글을 달 수 있음
    
## 💡화면
### <로그인>
<img src="https://user-images.githubusercontent.com/52418706/190531839-e2399e82-ab10-4c87-a258-aa961eb59b50.png" alt="signin" width="300">

### <회원가입>
<img src="https://user-images.githubusercontent.com/52418706/190531434-dd0c8d04-0d57-4f70-bc88-50dc030fae8b.png" alt="signup" width="600">

### <홈 & 글 작성>
<img src="https://user-images.githubusercontent.com/52418706/190532122-322fe2e6-078c-4127-8c0c-cf1577dc64ef.png" alt="home" width="600">

### <글 삭제 시>
<img src="https://user-images.githubusercontent.com/52418706/190532279-6781f9b3-2c2e-4884-94db-29543e6035a3.png" alt="delete" width="300">

### <게시글>
<img src="https://user-images.githubusercontent.com/52418706/190532314-cb55621f-b673-4872-b222-f9296a7344f3.png" alt="post" width="300">

## 💡ERD
<img src="https://user-images.githubusercontent.com/52418706/190532482-8f33a398-2763-4ccc-9471-db54aa1e4651.png" alt="erd" width="80%">

## 💡배운 부분
### 1. refreshToken과 accessToken을 통한 로그인 인증
### 2. AsyncStorage를 이용한 자동 로그인
### 3. NestJS의 사용 및 TypeORM의 사용

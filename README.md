### 백엔드 - 이진아

1. 앱에 대한 설명
- 주요 역할 : 책 데이터에 대한 CRUD API 제공
- 기술 스택 : Node.js, Express, TypeScript, MySQL
- 중요 구조
  ① Controller : 라우팅 및 요청/응답처리
  ② Service : 비즈니스 로직 처리
  ③ Repository : DB접근 (MySQL)

-----------------------------------------------------------------------


2. 소스 빌드 및 실행 방법
C:\web_gina\rgt-backend-test\online-bookstore-backend>
npm run dev

-----------------------------------------------------------------------


3. 주력으로 사용한 라이브러리에 대한 설명 및 사용 이유
- express : Node.js에서 가장 많이 사용되는 웹 프레임워크 (RESTful API 최적화)
- MySQL : DB 연결 및 쿼리 실행을 위해 사용
- dotenv : 환경변수를 쉽게 관리하기 위해 사용
- Typescript : 정적 타이핑을 통해 유지보수셩 향상 및 오류 사전 방지


-----------------------------------------------------------------------


4. DB 스키마 & 데이터
mysql> SHOW TABLES;        
+----------------------------+
| Tables_in_q1rpnfothvo3zycv |
+----------------------------+
| books                      |
+----------------------------+
1 row in set (0.19 sec)

mysql> SELECT * FROM books;
+----+------------------------+---------------------+----------+
| id | title                  | author              | quantity |
+----+------------------------+---------------------+----------+
|  1 | The Great Gatsby       | F. Scott Fitzgerald |        5 |
|  2 | To Kill a Mockingbird  | Harper Lee          |        5 |
|  3 | 1984                   | George Orwell       |        8 |
| 14 | 퓨처 셀프 30만         | 벤저민 하디         |       10 |
| 15 | 모순                   | 양귀자              |      100 |
| 16 | 초역 부처의 말         | 코이케 류노스케     |       88 |
| 17 | 해커스 토익            | 해커스              |       70 |
| 18 | 소년이 온다            | 한강                |       50 |
| 19 | 어른의 행복은 조용하다 | 태수                |      160 |
| 21 | 급류                   | 정대건              |       60 |
| 22 | 시간 고양이            | 박미연 이지북       |      135 |
| 23 | 미키 7                 | 에드워드 애슈턴     |      150 |
+----+------------------------+---------------------+----------+
12 rows in set (0.19 sec)


-----------------------------------------------------------------------


5. API 명세 예시
1. 책 목록 조회 (READ)
URL: /api/books?page=1&limit=10
요청: GET 요청
응답 예시:
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "quantity": 5
  },
  ...
]

2. 책 추가 (CREATE)
URL: /api/books
요청: POST 요청
요청 예시:
{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "quantity": 3
}
{
  "id": 25,
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "quantity": 3
}

3. 책 수정 (UPDATE)
URL: /api/books/:id
요청: PUT 요청
요청 예시:
{
  "title": "1984 (Updated Edition)",
  "author": "George Orwell",
  "quantity": 10
}
{
  "id": 3,
  "title": "1984 (Updated Edition)",
  "author": "George Orwell",
  "quantity": 10
}

4. 책 삭제 (DELETE)
URL: /api/books/:id
요청: DELETE 요청
응답 예시:
{
  "message": "책이 삭제되었습니다."
}

5. 책 검색 (Search)
URL: /api/books/search?query=1984
요청: GET 요청
응답 예시:
[
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "quantity": 8
  }
]
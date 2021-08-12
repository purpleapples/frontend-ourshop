# 구조
- super - sub 구조

- 상세 구현 1안
1. declarative api 구현
2. 각 pages에서 api import 후 상세 내역 구현 

- 상세 구현 2안
1. api 구현 후 내용은 받아서 실행하도록 변경
2. pages 의 api의 경우 function만 만들어서 던지는 방법으로 한번 더 포장

- 최초 구현 
1. 각 pages 안에 api.js 만들고 거기서 생성
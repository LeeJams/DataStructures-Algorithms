## Graphs

- 그래프가 무엇인지 설명하십시오.
- 실제 환경에서 다양한 유형의 그래프와 사용 사례 비교 및 대조
- 인접 목록을 사용하여 그래프 구현
- BFS 및 DFS를 사용하여 그래프 통과
- 그래프 통과 알고리즘 비교 및 대비

- 그래프 데이터 구조는 비방향 그래프에 대한 이러한 꼭짓점들의 순서 없는 쌍들의 집합 또는 방향 그래프에 대한 순서 없는 쌍들의 집합과 함께 유한한 (그리고 변동 가능한) 꼭짓점들의 집합으로 구성된다.

### 그래프에 대한 사용

- 소셜 네트워크
- 위치/매핑
- 라우팅 알고리즘
- 시각적 계층
- 파일 시스템 최적화
- 어디든지!

### 필수 그래프 용어

- 꼭짓점(Vertex) - 노드
- 에지(Edge) - 노드 간 연결
- 가중치/비가중치(Weighted/Unweighted) - 꼭짓점 사이의 거리에 할당된 값
- 방향 지정/방향 지정 안 함(Directed/Undirected) - 꼭짓점 사이의 거리에 할당된 방향

## GRAPH TRAVERSAL 그래프 순회

- 피어 투 피어 네트워킹
- 웹 크롤러
- "가장 가까운" 일치/권장 사항 찾기
- 최단 경로 문제
- GPS 내비게이션
- 미로풀기
- AI(게임을 이기는 지름길)

### 깊이 우선
- "역추적"을 하기 전에 가능한 한 한 지점 아래로 탐색
## Searching Algorithms

- 검색 알고리즘이란?
- 배열의 선형 검색 구현
- 정렬된 배열에 이진 검색 구현
- 단순 문자열 검색 알고리즘 구현
- KMP 문자열 검색 알고리즘 구현

### Linear Search 선형 검색

- 첫 부분에서 시작해서 끝 부분으로 한 번에 하나의 항목을 확인할 수 있는 검색 방법
  - indexOf
  - includes
  - find
  - findIndex

### Binary Search 이진 탐색

- 선형 검색의 개선된 알고리즘으로 속도가 훨씬 빠르다.
- 단, 정렬된 배열을 대상으로 사용할 수 있다.
- 중간점을 선택하고 중간점 기준으로 좌측에 정보가 있는지 우측에 정보가 있는지 확인한 후 나머지는 버린다.
- 이것을 반복해 결과 값을 찾는다.

- Worst and Average Case - O(log n) / Best Case O(1)

### Naive String Search 단순 문자열 검색

- 
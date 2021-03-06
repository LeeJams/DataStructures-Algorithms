## What is sorting?

정렬은 집합(예: 배열)의 항목을 정렬하여 항목이 어떤 순서로 정렬되도록 하는 프로세스입니다.

예)

- 가장 작은 것부터 가장 큰 것까지 숫자 정렬
- 알파벳 순으로 이름 정렬
- 개봉 연도를 기준으로 영화 정렬
- 수익에 따라 동영상 정렬

### 목표

- 버블 정렬 구현
- 선택 정렬 구현
- 삽입 정렬 구현
- 이러한 간단한 정렬 알고리즘을 배우는 것이 왜 중요한지 이해

### Bubble Sort 버블정렬

- 가장 큰 값을 맨 뒤로 보내며 정렬하는 알고리즘!
- 반복을 거듭함에 따라 정렬해야 하는 항목의 수가 감소함.
- Best - O(n)

### Selection Sort 선택정렬

- 버블 정렬과 비슷하지만 먼저 큰 값을 정렬된 위치에 배치하는 대신 작은 값을 정렬된 위치에 배치합니다.

### Insertion Sort 삽입정렬

- 항상 정렬되는 더 큰 왼쪽 절반을 점진적으로 생성하여 정렬을 구축합니다.

### Big O of Sorting Algorithms

| Algorithms     | Time Complexity(Best) | Time Complexity(Average) | Time Complexity(Worst) | Space Complexity |
| -------------- | --------------------- | ------------------------ | ---------------------- | ---------------- |
| Bubble Sort    | O(n)                  | O(n^2)                   | O(n^2)                 | O(1)             |
| Insertion Sort | O(n)                  | O(n^2)                   | O(n^2)                 | O(1)             |
| Selection Sort | O(n)                  | O(n^2)                   | O(n^2)                 | O(1)             |

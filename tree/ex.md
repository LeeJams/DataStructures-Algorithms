## Trees

### 트리란?

- 상위/하위 관계에 있는 노드로 구성된 데이터 구조로 비 선형이다.
- (Linked List - 선형)

### 트리 용어

- Root - 트리의 맨 위 노드입니다.
- Child - 루트에서 이동할 때 다른 노드에 직접 연결된 노드입니다.
- Parent - 자식에 대한 반대 개념입니다.
- Siblings - 동일한 부모를 가진 노드 그룹입니다.
- Leaf - 하위 노드가 없는 노드입니다.
- Edge - 한 노드와 다른 노드 간의 연결입니다.

### 종류

- Binary Tree(이진 트리) ...
- Ternary Tree. ...
- Binary Search Tree(이진 탐색 트리) ...
- Complete Binary Tree(완전 이진 트리) ...
- Full Binary Tree. ...
- Perfect Binary Tree.
- ...등등

### 예시

- HTML DOM
- 네트워크 라우팅
- 추상 구문 트리
- 인공지능
- 운영 체제의 폴더
- 컴퓨터 파일 시스템

### Big O of Binary Search Tree

- Insertion - O(lon n)
- Searching - O(lon n)
- 최악의 경우 O(n)

## TRAVERSING A TREE

- Two ways:
  - Breadth-first Search - 너비 우선 검색
  - Depth-first Search - 깊이 우선 검색

### 언제 사용하면 좋을까?

- 깊이 우선 탐색 - 깊이보다 너비가 넓은 트리의 경우
- 너비 우선 탐색 - 너비보다 길이가 깊은 트리의 경우

탐색은 모든 노드를 방문하기 때문에 시간 복잡도는 동일 하지만 보통 트리의 경우 너비가 넓다.
그러므로 깊이 우선 탐색이 조금 더 우위에 있다.

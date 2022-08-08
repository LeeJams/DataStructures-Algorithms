/* 
함수는 시작 노드를 수락해야 합니다.
최종 결과를 저장할 목록을 만들고 맨 마지막에 반환
방문한 정점을 저장할 객체 생성
정점을 허용하는 도우미 함수 만들기
정점이 비어 있으면 도우미 함수가 일찍 반환되어야 합니다.
도우미 함수는 방문한 객체에 수용하는 꼭짓점을 배치하고 결과 배열에 해당 꼭짓점을 밀어넣어야 한다.
해당 정점에 대한 인접 목록의 모든 값을 루프합니다.
해당 값 중 하나라도 방문하지 않은 경우 해당 꼭짓점으로 도우미 함수를 재귀적으로 호출합니다.
시작 정점으로 도우미 함수 호출
결과 배열을 반환합니다.
*/
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (n) => n !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (n) => n !== vertex1
    );
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (const item of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, item);
      }
      delete this.adjacencyList[vertex];
    }
  }

  depthFirstSearch(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        // console.log(visited);
        // console.log(neighbor);
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }
}

let gr = new Graph();

gr.addVertex("A");
gr.addVertex("B");
gr.addVertex("C");
gr.addVertex("D");
gr.addVertex("E");
gr.addVertex("F");

gr.addEdge("A", "B");
gr.addEdge("A", "C");
gr.addEdge("B", "D");
gr.addEdge("C", "E");
gr.addEdge("D", "E");
gr.addEdge("D", "F");
gr.addEdge("E", "F");

/* 
  {
    A: [ 'B', 'C' ],
    B: [ 'A', 'D' ],
    C: [ 'A', 'E' ],
    D: [ 'B', 'E', 'F' ],
    E: [ 'C', 'D', 'F' ],
    F: [ 'D', 'E' ]
  }
*/
console.log(gr.depthFirstSearch("A"));

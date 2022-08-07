class Graph {
  constructor() {
    // this.adjacencyList = {};
    this.adjacencyList = {
      Tokyo: ["Dallas", "Hong Kong"],
      Dallas: ["Tokyo", "Aspen", "Hong Kong", "Los Angeles"],
      Aspen: ["Dallas"],
      "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"],
      "Los Angeles": ["Hong Kong", "Dallas"],
    };
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
}

let gr = new Graph();
// gr.addVertex("Tokyo");
// gr.addVertex("Dallas");
// gr.addVertex("Aspen");

// gr.addEdge("Tokyo", "Dallas");
// gr.addEdge("Dallas", "Aspen");

// gr.removeEdge("Dallas", "Tokyo");
// gr.removeEdge("Dallas", "Aspen");

console.log(gr.adjacencyList);

gr.removeVertex("Hong Kong");
gr.removeVertex("Los Angeles");

console.log(gr.adjacencyList);

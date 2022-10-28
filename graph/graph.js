class Graph {
  adjacencyList = {};

  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );

      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (vertex in this.adjacencyList) {
      for (const v of this.adjacencyList[vertex]) {
        this.adjacencyList[v] = this.adjacencyList[v].filter(
          (v) => v !== vertex
        );
      }

      delete this.adjacencyList[vertex];
    }
  }
}

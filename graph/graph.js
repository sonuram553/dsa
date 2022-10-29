import Stack from "../stack/stack.js";

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

  depthFirstRecursive(vertex) {
    if (!vertex) return;

    const result = [];
    const visited = new Set();
    const adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      result.push(vertex);
      visited.add(vertex);

      adjacencyList[vertex].forEach((v) => {
        if (!visited.has(v)) dfs(v);
      });
    }

    dfs(vertex);
    return result;
  }

  depthFirstIterative(vertex) {
    if (!vertex) return;

    const result = [];
    const visited = new Set();
    const stack = new Stack();
    stack.push(vertex);

    while (stack.size()) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        this.adjacencyList[vertex].forEach((v) => stack.push(v));
        result.push(vertex);
        visited.add(vertex);
      }
    }

    return result;
  }
}

export default Graph;

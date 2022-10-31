import Queue from "../queue/queue.js";
import Stack from "../stack/stack.js";

class Graph {
  adjacencyList = {};

  // Returns array of all the vertices.
  vertices() {
    return Object.keys(this.adjacencyList);
  }

  // Returns all the neighbors of a vertex.
  neighbors(vertex) {
    return this.adjacencyList[vertex] || [];
  }

  hasVertex(vertex) {
    return vertex in this.adjacencyList;
  }

  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }
  }

  removeEdge(vertex1, vertex2) {
    if (vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        ({ vertex }) => vertex !== vertex2
      );

      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        ({ vertex }) => vertex !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (vertex in this.adjacencyList) {
      for (const v of this.adjacencyList[vertex]) {
        this.adjacencyList[v] = this.adjacencyList[v].filter(
          (node) => node.vertex !== vertex
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

      adjacencyList[vertex].forEach(({ vertex }) => {
        if (!visited.has(vertex)) dfs(vertex);
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
        this.adjacencyList[vertex].forEach(({ vertex }) => stack.push(vertex));
        result.push(vertex);
        visited.add(vertex);
      }
    }

    return result;
  }

  breadthFirstIterative(vertex) {
    if (!vertex) return;

    const result = [];
    const visited = new Set();
    const queue = new Queue();
    queue.add(vertex);

    while (queue.size()) {
      const vertex = queue.delete();

      if (!visited.has(vertex)) {
        this.adjacencyList[vertex].forEach(({ vertex }) => queue.add(vertex));
        result.push(vertex);
        visited.add(vertex);
      }
    }

    return result;
  }
}

export default Graph;

import PriorityQueue from "../heap/priority-queue/priority-queue.js";
import reverseArray from "../utils/reverse-array.js";

// Dijkstra's Shortest Path Algorithm

function shortestPath(graph, startVertex, endVertex) {
  if (!graph.hasVertex(startVertex) || !graph.hasVertex(endVertex))
    throw Error("Vertices don't exist!");

  const previous = {};
  const distances = {};
  const queue = new PriorityQueue();

  // Build initial state
  for (const vertex of graph.vertices()) {
    if (vertex === startVertex) {
      distances[vertex] = 0;
      queue.enqueue(vertex, 0);
    } else distances[vertex] = Infinity;

    previous[vertex] = null;
  }

  // Loop till queue becomes empty or the endVertex reached.
  while (queue.size) {
    const closest = queue.dequeue().value;

    if (closest === endVertex) return buildPath(previous, endVertex);

    for (const neighbor of graph.neighbors(closest)) {
      const newDistanceToNeighbor = distances[closest] + neighbor.weight;

      if (newDistanceToNeighbor < distances[neighbor.vertex]) {
        previous[neighbor.vertex] = closest;
        distances[neighbor.vertex] = newDistanceToNeighbor;
        queue.enqueue(neighbor.vertex, newDistanceToNeighbor);
      }
    }
  }
}

function buildPath(previous, endVertex) {
  const result = [endVertex];
  let currentVertex = endVertex;

  while (previous[currentVertex]) {
    currentVertex = previous[currentVertex];
    result.push(currentVertex);
  }

  return reverseArray(result);
}

export default shortestPath;

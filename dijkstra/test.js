import Graph from "../graph/graph.js";
import shortestPath from "./shortest-path.js";

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

let path = shortestPath(graph, "A", "E");
path = shortestPath(graph, "A", "C");
path = shortestPath(graph, "A", "F");
console.log(path);

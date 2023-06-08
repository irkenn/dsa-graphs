class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for( let vertex of vertexArray){
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let edge of vertex.adjacent){
      this.removeEdge(edge, vertex);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {

    let stack = [start];
    let seen = new Set(stack);
    let output = [];
    while(stack.length){
      let currentNode = stack.pop();
      output.push(currentNode.value);
      for(let adjacentNode of currentNode.adjacent){
        if(!seen.has(adjacentNode)){
          stack.push(adjacentNode);
          seen.add(adjacentNode);
        }
      }
    }
    console.log('output', output);
    return output;


  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    
    let queue = [start];
    let seen = new Set(queue);
    let output = [];
    while(queue.length){
      let currentNode = queue.shift();
      output.push(currentNode.value);
      for(let adjacentNode of currentNode.adjacent){
        if(!seen.has(adjacentNode)){
          queue.push(adjacentNode);
          seen.add(adjacentNode);
        }
      }
    }
    console.log('output', output);
    return output;

  }
}

module.exports = {Graph, Node}
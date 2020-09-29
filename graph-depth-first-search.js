// @ts-check

const Stack = require('./stack.js');
const Graph = require('./graph.js');

/**
 * @param {Graph} g 
 */

function dfsTraversal(g) {
    let result = "";
    let verticesNum = g.vertices;
  
    let stack = new Stack();
    stack.push(0)
  
    // keep track of visited vertices
    let visited = Array.from(new Array(verticesNum))
      .map(i => false);
  
    while (!stack.isEmpty()) {
        const curVertice = stack.pop();

        if (!visited[curVertice]) {
            result += String(curVertice);
            visited[curVertice] = true;
        }
        
        const curList = g.list[curVertice];
        let curNode = curList !== null ? curList.getHead() : null;

        // handle case of not connected graph
        if (curNode === null && curVertice + 1 < verticesNum) {
            stack.push(curVertice + 1);
        }
        
        // add to stack not visited vertices
        while(curNode !== null) {
            if (!visited[Number(curNode.value)]) {
                stack.push(curNode.value);
            }
            
            curNode = curNode.next;
        } 
    }
  
    return result;
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);

console.log(dfsTraversal(g) === '01342'); //Should output 01342 

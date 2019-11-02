
// There are a few way to show graph data. 

// Example Graph Data
/* 
        (2) ----- (0)
        / \
       /   \
      /     \
    (1)-----(3)

    How to show this graph 
*/


/* Edge List:
             Array simple states connections. For example [0,2] 0 is connected to 2
*/

const graph = [[0,2],[2,3],[2,1],[1,3]];

/*
    Adjacent List : 
                   In this list index is node and value is index neigbors value can be index, object, or linklist  

                   In the array index of 0 is value of node 0. For example in graph schema 0 is connected to 2 so 
                   index 0 has value of [2] or node 1 connected to 2 and 3 and because of that index 1 in the array
                   has two element which are [2,3]
*/

const ad_graph = [[2] , [2,3] , [0,1,3] , [1,2] ]

// Adjacent Matrix 

/*
    This matrix simply has 0s and 1s indicating whether node has connection. 1 means yes 0 means no 
    For example for index 0  row will be [0,0,1,0] that means 0 node has connection to node 2

*/

const ad_mt_graph = [
    [0,0,1,0], // Node 0 has connection to 2
    [0,0,1,1], // Node 1 has connection to 2,3
    [1,1,0,1], // Node 2 has connection to 1,3,0
    [0,1,1,0], // Node 3 has connection to 1,2
]








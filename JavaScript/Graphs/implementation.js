/// Implementation of Graph Theory. 
/// Graph Type : Undirectional unweighted graph
class Graph{
    constructor(){
        this.adjacentList = {}
        this.numberOfNodes = 0
    }

    addVertex(node){
        this.adjacentList[node] = [] 
        this.numberOfNodes++
    }

    addEdge(node1,node2){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }

    showConnections(){
        for(let i=0;i<this.numberOfNodes;i++){
            let conList = ""
            for(let con of this.adjacentList[i.toString()]){
                conList += " "+ con
            }
            console.log(`Node ${i.toString()} : has connections to ${conList}`)
        }
    }
}

const graph  = new Graph()
graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addEdge(0,1)
graph.addEdge(0,2)
graph.addEdge(1,2)
graph.addEdge(1,3)
graph.addEdge(2,4)
graph.addEdge(3,4)
graph.addEdge(4,5)
graph.addEdge(5,6)

graph.showConnections()




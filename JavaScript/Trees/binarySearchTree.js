// Implementation of Binary Search Tree 

class Node{
    constructor(value,left=null,right=null){
        this.value = value
        this.left = left
        this.right = right 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        // If root is not exist
        if(!this.root){
            this.root = new Node(value)
            return this.root 
        }
        
        const newNode = new Node(value)

        // If root exist
        let pointer = this.root
        while(true){
            if(value<pointer.value){
                if(!pointer.left){
                    pointer.left = newNode
                    return pointer.left
                }

                pointer = pointer.left
            }
            else{
                if(!pointer.right){
                    pointer.right = newNode
                    return pointer.right
                }

                pointer = pointer.right
            }
        }
    }
    lookup(value){
        if(!this.root)
            return null

        let pointer = this.root

        while(true)
        {
            if(value === pointer.value) return pointer
            else if(value < pointer.value && pointer.left) pointer = pointer.left
            else if (value>pointer.value && pointer.right) pointer = pointer.right
            else return null
        }

    }

    //remove 

}


const traverse = (node) =>{
    const tree = {value:node.value}
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null :traverse(node.right)
    
    return tree
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.lookup(333))
//console.log(JSON.stringify(traverse(tree.root)))


// This is an implementation of Link List Stack implementation.


class Node{
    constructor(value,next){
        this.value = value
        this.next = next
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    push(value){

        const newNode = new Node(value,null)
        this.length++

        if(this.length === 0){
            this.top = newNode
            this.bottom = newNode
            return this.top
        }

        const pointer = this.top
        this.top = newNode
        this.top.next = pointer
    }

    peek(){
        
        return this.top
    }

    pop(){
        if(this.top === this.bottom)
            this.bottom = null
        if(this.top){
            this.top = this.top.next
            return this.top
        }
        return null
    }
}

const stack = new Stack()

stack.push("Amazon")
stack.push("Google")
stack.push("Discord")
stack.pop()
stack.pop()
console.log(stack.peek())

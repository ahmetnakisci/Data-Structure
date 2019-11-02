/// This is an implementation of array stack 

class Stack {
    constructor(){
        this.data = []
    }

    push(value){
        this.data.push(value)
    }
    pop(){
        this.data.pop()
    }
    peek(){
        return this.data[this.data.length-1]
    }
}


const stack = new Stack()
stack.push("Amazon")
stack.push("Google")
stack.push("Netflix")
stack.pop()
console.log(stack.peek())
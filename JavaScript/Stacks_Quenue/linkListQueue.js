class Node{
    constructor(value,next){
        this.value = value
        this.next = next
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        return this.first
    }

    enqueue(value){

        const newNode = new Node(value,null)
        if(this.length===0)
        {
            this.first = newNode
            this.last = newNode
        }
        else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
    }

    dequeue(){
        if(this.first)
        {
            this.first = this.first.next
            this.length--
        }
        return null
    }

}

const queune = new Queue()
queune.enqueue("Ahmet")
queune.enqueue("Melike")
queune.enqueue("Martin")
queune.enqueue("John")
queune.dequeue()
queune.dequeue()
queune.dequeue()

console.log(queune.peek())
/// Implementation of Singly LinkList in Javascript

class LinkedList{
    constructor(value) {
        this.head = new Node(value,null)
        this.tail = this.head
    }
    append(value){
        const newNode = new Node(value,null)
        this.tail.next = newNode
        this.tail = newNode
    }
    print(){

        let pointer = this.head

        while(pointer)
        {
            console.log(pointer.value)
            pointer = pointer.next
        }
    }
    prepend(value){
        let newNode = new Node(value,this.head)
        this.head = newNode
    }
    insert(index,value){

        if(index===0)
            return this.prepend(value)

        let pointer = this.head
        let prevPointer
        for(let i=0;i<index;i++)
        {
            if(pointer.next){
            prevPointer = pointer
            pointer = pointer.next
            }
            else{
                return this.append(value)
            }
        }

        const newNode = new Node(value,pointer.next)
        prevPointer.next = newNode
    }
    delete(index){
        
        if(index === 0)
        {
            const head = this.head
            this.head = head.next
            return true
        }

        let prevNode
        let pointer = this.head
        for(let i=0;i<index;i++)
        {
           if(pointer.next){
                prevNode = pointer
                pointer = pointer.next
           }
           else{ throw new Error("Index does not exist.")}
        }

        prevNode.next = pointer.next
        
        return true
    }

}

class Node{
    constructor(value,next){
        this.value = value
        this.next = next
    }
}

const linkList = new LinkedList(10)
linkList.append(5)
linkList.append(20)
linkList.append(16)
linkList.prepend(33)
linkList.insert(0,99)
linkList.insert(10,31)
linkList.print()
console.log("------")
linkList.delete(0)
linkList.print()

//console.log(linkList)
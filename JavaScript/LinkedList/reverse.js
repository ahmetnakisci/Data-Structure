/// Example : Reversing singly link list 

class Node{
    constructor(value,next){
        this.value = value
        this.next = next
    }
}

class LinkList{
    constructor(value){
        this.head = new Node(value,null)
        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = new Node(value,null)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    print(){
        let pointer = this.head
        let list = []
        for(let i =0; i<this.length;i++)
        {
            list.push(pointer.value)
            pointer = pointer.next
        }

        return list
    }
    reverse(){
        if(!this.head.next)
            return this.head
        let firstPointer = this.head
        let secondPointer = firstPointer.next

        while(secondPointer){
            const temp = secondPointer.next
            secondPointer.next = firstPointer
            firstPointer = secondPointer
            secondPointer = temp
            console.log(this.print())
            console.log("==")
        }
        this.head.next =null
        this.head = firstPointer
        
        console.log(this.print())
    }
}

const linkList = new LinkList(10)
linkList.append(20)
linkList.append(30)
linkList.append(60)
console.log(linkList.reverse())
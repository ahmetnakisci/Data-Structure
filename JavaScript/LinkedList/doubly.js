/// Implementation of Dobuly LinkList in Javascript

class LinkedList{
    constructor(value) {
        this.head = new Node(value,null,null)
        this.tail = this.head
    }
    append(value){
        const newNode = new Node(value,null,this.tail)
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
        let newNode = new Node(value,this.head,null)
        this.head = newNode
    }
    insert(index,value){

        if(index===0)
            return this.prepend(value)

        let pointer = this.head
        for(let i=0;i<index;i++)
        {
            if(pointer.next){
            pointer = pointer.next
            }
            else{
                return this.append(value)
            }
        }

        //console.log(pointer)

        const newNode = new Node(value,pointer,pointer.prev)
        pointer.prev.next = newNode
        //console.log(pointer.prev)

    }
    delete(index){
        
        if(index === 0)
        {
            const head = this.head
            this.head = head.next
            this.head.prev = null
            return true
        }

        let pointer = this.head
        for(let i=0;i<index;i++)
        {
           if(pointer.next){
                pointer = pointer.next
           }
           else{ throw new Error("Index does not exist.")}
        }

        pointer.prev.next = pointer.next 
        pointer.next.prev = pointer.prev
                

        return true
    }

}

class Node{
    constructor(value,next,prev){
        this.value = value
        this.next = next
        this.prev = prev
    }
}

const linkList = new LinkedList(10)
linkList.append(5)
linkList.append(20)
linkList.append(33)
linkList.insert(1,999)
linkList.delete(1)
linkList.print()


//console.log(linkList)
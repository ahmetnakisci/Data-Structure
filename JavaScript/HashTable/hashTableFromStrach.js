class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let i=0;i<key.length;i++)
        {
            hash = (hash+key.charCodeAt(i) * i) % this.data.length
        }

        return hash
    }

    set(key,value){
        let address = this._hash(key)
        if(!this.data[address])
            this.data[address] = []
        
        this.data[address].push([key,value])
        return this.data
    }

    get(key){
        let address = this._hash(key)
        if(this.data[address])
        {
            for(let i=0;i<this.data[address].length;i++)
            {
                if(this.data[address][i][0] === key)
                {
                    return this.data[address][i][1]
                }
            }
        }

        return undefined
    }

    keys(){
        let keys = []

        for(let i =0;i<this.data.length;i++)
            if(this.data[i])
                for(let j=0;j<this.data[i].length;j++)
                    keys.push(this.data[i][j][0])
                
        return keys
    }// This is the cons of hash tables
}

const myHashTable = new HashTable(2)
myHashTable.set("apples",1000)
myHashTable.set("applew",1000)

console.log(myHashTable.keys())
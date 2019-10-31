const arr = ["ANKARA","ANKARA","ISTANBUL","BURSA"]

function getCities(cities){
    let hashTable = {}

    for(let i =0;i<cities.length;i++)
    {
        if(!(cities[i] in hashTable))
        {
            hashTable[cities[i]] = cities[i]
        }
    }
    return Object.keys(hashTable)
}

console.log(getCities(arr))




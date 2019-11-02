// Finding the first recuiring character 
// For example in an array [1,0,1,4,6,7,1] 1 is first recuring char. 

const findRecuring = (arr)=>{
    const hash = {}
    for(let i =0;i<arr.length;i++){
        if(arr[i] in hash)
            return arr[i]
        else
            hash[arr[i]] = arr[i]
    }

    return undefined
}

console.log(findRecuring([2,1,2,3,5,1]))
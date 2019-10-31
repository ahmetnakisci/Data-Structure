/*
    This is an example of in place array reverse
*/

let str = "ABCDEFG HIJKLMPQRSTU"

function reverseString(str){

    if(!str || str.length<2 || typeof str !== 'string')
        return "Please provide string"

    let arr = str.split('')

    for(let i =0; i<arr.length/2;i++)
    {   
        let last = arr.length-i-1
        let temp = arr[i]
        arr[i] = arr[last]
        arr[last] = temp
    }
    
    return arr.join('')
}

console.log(reverseString(str))

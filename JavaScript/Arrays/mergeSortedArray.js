/*
    This is an example of merge sorted arrays for example => 
    [1,2,10], [5,6,11]  => [1,2,5,6,10,11] 
*/

const {performance} = require('perf_hooks')

function mergeSortedArraysNaive(arr1, arr2){
    
    let t0 = performance.now()
    arr1 = arr1.concat(arr2)

    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1.length;j++)
        {
            if(arr1[i]<arr1[j]){
                swipe(arr1,i,j)
            }
        }
    }

    let t1 = performance.now()
    console.log(`Completed with : ${t1-t0}`)
    console.log(arr1)

}

function swipe(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// Better Way 
function mergeSortedArraysEfficient(arr1,arr2){
    
    let t0 = performance.now()

    // indexes
    let arr1Index = 0
    let arr2Index = 0
    const mergedArray = []


    while (arr1Index<arr1.length || arr2Index<arr2.length)
    {
        if(arr1[arr1Index] && arr1[arr1Index]<arr2[arr2Index])
        {
            mergedArray.push(arr1[arr1Index])
            arr1Index++
        }
        else
        {
            mergedArray.push(arr2[arr2Index])
            arr2Index++
        }
    }
    let t1 = performance.now()
    console.log(`Completed with : ${t1-t0}`)
    console.log(mergedArray)
}

// TODO: Check heap overflow error. 

mergeSortedArraysNaive([1,2,10], [5,6,11])
mergeSortedArraysEfficient([1,2,10], [5,6,11])
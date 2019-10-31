const array = new Array(1000000).fill("Nemo")
const {performance} = require('perf_hooks')

function findNemo(arr){
    let t0 = performance.now()

    for(let i =0;i<arr.length; i++)
    {
        if(arr[i]==="Nemo"){
            console.log("Founded")
        }

    }
    let t1 = performance.now()

    console.log(t1-t0);
}

findNemo(array)
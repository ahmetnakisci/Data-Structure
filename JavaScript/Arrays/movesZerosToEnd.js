// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


function moveZeroes(nums)  {
    
    let zeroCounter= 0;
    for(let i=0;i<nums.length;i++){
        // swipe 1 left
        if(nums[i]!==0){
            let zeroTemp = nums[i-zeroCounter]
            nums[i-zeroCounter] = nums[i]
            nums[i] = zeroTemp
        }
        else{
            zeroCounter++;
        }
    }
    
    return nums
};


console.log(moveZeroes([0,1,0,0,0,0,1,2]))

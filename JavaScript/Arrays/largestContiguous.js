// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function findLargestSubArray(nums){

    let largest = Number.MIN_VALUE
    let subsum = nums[0]
    for(let i=0;i<nums.length;i++){
        let temp = subsum + nums[i]
        if(temp>nums[i]){subsum = temp} else {subsum = nums[i]}
        if(subsum>largest) {largest=subsum}
    }

    return largest
}

//TODO: Divide and conqurer method

console.log(findLargestSubArray([-2,1,-3,4,-1,2,1,-5,4]))
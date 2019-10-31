// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function findTwoSum(nums, sum){
    const numberSet = {}

    for(let i=0;i<nums.length;i++){
        let target = sum - nums[i]

        if(target in numberSet){
            return [numberSet[target],i]
        }
        numberSet[nums[i]] = i
    }

    return null
}

let numSet = findTwoSum([2, 7, 11, 15],9)
console.log(numSet)

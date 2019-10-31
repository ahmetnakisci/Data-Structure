
function containsDuplicate(nums) {
    
    let duplicateMap = {}
    
    for(let i = 0; i<nums.length;i++)
    {
        if(nums[i] in duplicateMap){
            return true
        }
        
        duplicateMap[nums[i]] = true
    }
    
    return false 
};

console.log(containsDuplicate([1,2,3,1]))

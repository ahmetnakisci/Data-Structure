class TwoSum: 
    def findTwoSum(self,nums,target):
        set = dict()

        for i in range(0,len(nums)):
            comp = target - nums[i]
            print(set[comp])
            if comp in set:
                return [set[comp],i]

            set[comp] = i

        return None


test = TwoSum()
res = test.findTwoSum([2,7,10,11,23],9)
print(res)
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums_set = set()

        for i in range(len(nums)):
            nums_set.add(nums[i]) 
        
        return False if len(nums_set) == len(nums) else True
        
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        nums1[:] = nums1[:m]
        nums1.extend(nums2)
        nums1.sort()

        return nums1
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
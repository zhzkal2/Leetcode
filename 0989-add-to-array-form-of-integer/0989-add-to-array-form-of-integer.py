class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:

        result = []
        carry =0
        i = len(num)-1
        while i >= 0 or k>0 or carry:
        
            sum_value = k % 10 + (num[i] if i >= 0 else 0) + carry


            result.append(sum_value % 10)

            carry = sum_value // 10

            k = k//10
            i -= 1


        
        return result[::-1]
        
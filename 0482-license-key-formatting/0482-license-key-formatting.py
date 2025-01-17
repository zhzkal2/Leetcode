class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        s=s.upper().replace("-","")

        first_group_length = len(s) % k
        result = []

        if first_group_length:
            result.append(s[:first_group_length])

        for i in range(first_group_length, len(s), k):
            result.append(s[i:i+k])




        




        return "-".join(result)
        
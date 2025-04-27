function mySqrt(x: number): number {
    if(x<2)
    return x;

    let left =1;
    let right = x;
    let answer =0;

    while (left <= right){
        const mid = Math.floor((left + right)/2);
        if (mid*mid===x){
            return mid;
        }else if(mid * mid <x){
            answer = mid;
            left = mid +1;
        } else{
            right = mid -1;
        }
    }
    console.log(answer)

    return answer
    
};
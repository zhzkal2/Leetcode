type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {

    nums.forEach((number, i) => {
        init=fn(init,number)
    });
    return init
    
}
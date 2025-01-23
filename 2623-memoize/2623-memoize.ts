type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache : {[key: string]: number} = {};
    
    return function(...args) : number{
        const key = args.toString();
        if (cache[key] !== undefined){
            return cache[key]
        }else{
            const result = fn(...args);
            cache[key] = result
            return result
        }
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
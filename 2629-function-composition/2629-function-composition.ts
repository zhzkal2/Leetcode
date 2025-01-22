type F = (x: number) => number;

function compose(functions: F[]): F {
    if (functions.length === 0){
        return function(x){
            return x
        }
    }else{
        return function(x){
            let result : number =x 
            for (let i = functions.length -1; i>=0; i--){
                result = functions[i](result)
                console.log(result)
            }
            return result;
        }
    }
    
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
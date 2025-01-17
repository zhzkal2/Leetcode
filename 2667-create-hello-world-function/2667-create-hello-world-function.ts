function createHelloWorld() {
    
    return function(...args): string {
        console.log(args)

        return "Hello World"
        
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
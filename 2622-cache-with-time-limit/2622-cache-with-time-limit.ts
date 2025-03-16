class TimeLimitedCache {
     private cache: Map<number, { value: number, expiration: number }>;
    
    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const currentTime = Date.now();
        const expirationTime = currentTime + duration;

        if (this.cache.has(key)) {
            this.cache.set(key, { value, expiration: expirationTime });
            return true;
        }
        this.cache.set(key, { value, expiration: expirationTime });
        return false;
    }
    
    get(key: number): number {
        const currentTime = Date.now();

        if (this.cache.has(key)) {
            const { value, expiration } = this.cache.get(key)!;

            if (currentTime > expiration) {
                this.cache.delete(key);
                return -1;
            }

            return value;
        }

        return -1; 

        
    }
    
    count(): number {
        const currentTime = Date.now();
        let validCount = 0;

         for (const [key, { expiration }] of this.cache) {
            if (currentTime <= expiration) {
                validCount++;
            } else {
                this.cache.delete(key);  // 만료된 데이터는 삭제
            }
        }

        return validCount;
    }
        
    
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
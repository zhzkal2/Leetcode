type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {

    const pr1 = await promise1
    const pr2 = await promise2

    return pr1+pr2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
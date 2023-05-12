var createCounter = function(init) {
    let n = init
    return {
        increment:()=> ++n,
        decrement:()=> --n,
        reset:()=> n = init,
    }
};
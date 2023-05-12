var reduce = function(nums, fn, init) {
    let accumulator = init;
    for(const element of nums)
        accumulator = fn(accumulator, element);
    return accumulator;
};
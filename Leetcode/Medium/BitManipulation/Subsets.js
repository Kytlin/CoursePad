var subsets = function(nums) {
    var inner = [];
    var subset = [];
    
    for (var i = 0; i < Math.pow(2, nums.length); ++i) {
        for (var j = 0; j < nums.length; ++j) {
            if (i >> j & 1 == 1) {
                inner.push(nums[j]);
            }
        }
        subset.push(inner);
        inner = [];
    }
    
    return subset;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
console.log(subsets([5, 12, 13, 17, 21]));
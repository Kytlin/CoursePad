var hammingWeight = function(n) {
    let str = n.toString(2);
    var count = 0;

    for (var i = 0; i < str.length; ++i){
        if (n >> i & 1 == "1") {
            count++;
        }
    }

    return count;
};

console.log(hammingWeight(0b00000000000000000000000000001011));
console.log(hammingWeight(0b00000000000000000000000010000000));
console.log(hammingWeight(0b11111111111111111111111111111101));
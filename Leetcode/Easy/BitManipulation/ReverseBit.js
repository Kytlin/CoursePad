var reverseBits = function(n) {
    let str = n.toString(2);
    var padLength = 32 - str.length;
    var revN = 0;

    for (var i = 0; i < str.length; ++i){
        revN += str[i] << (padLength + i);
    }
    
    return revN >>> 0;
};

console.log(reverseBits(0b00000010100101000001111010011100));
console.log(reverseBits(0b11111111111111111111111111111101));
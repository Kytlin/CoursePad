var reverse = function(x) {
    var digits = ("" + x).split("");
    var rDigits = [];

    for (var i = 0; i < digits.length; ++i) {
        rDigits.push(digits[digits.length - i - 1]); 
    }

    if (parseInt(rDigits.join("")) > Math.pow(2, 31) || -parseInt(rDigits.join("")) <= -Math.pow(2, 31)){
        return console.log(0)
    }

    return ((digits[0] == '-') ? -parseInt(rDigits.join("")) 
                        : parseInt(rDigits.join("")));
}

reverse(123);
reverse(-123);
reverse(120)
reverse(0);
reverse(1534236469);
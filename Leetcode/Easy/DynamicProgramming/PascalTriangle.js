var generate = function(numRows) {
    var triangle = [];
    var triangleRow = [];

    if (numRows == 1) {
        return [[1]];
    }
    else if (numRows == 2){
        return [[1], [1, 1]];
    }
    else if (numRows > 2) {
        triangle = [[1], [1, 1]]

        for (var i = 2; i < numRows; ++i){
            triangleRow.push(1);

            for (var j = 0; j < i - 1; ++j){
                triangleRow.push(triangle[i - 1][j] + triangle[i - 1][j + 1]);
            }

            triangleRow.push(1);
            triangle.push(triangleRow);
            triangleRow = [];
        }
    }

    return triangle;
};

console.log(generate(0));
console.log(generate(1));
console.log(generate(2));
console.log(generate(3));
console.log(generate(6));
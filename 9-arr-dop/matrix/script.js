// row,col( например 3x5)
function matrix(row, col) {
  const arr = [];
  for (let i = 0; i < row; i++) {
    arr.push([]);
    for (let j = 1; j < col; j++) {
      arr[i].push(j);
    }
  }

  return arr;
}

console.log(matrix(3, 5));

const matrix = getMatrix(3, 5);

function getMatrix(row, col) {
  const arr = [];
  for (let i = 0; i < row; i++) {
    arr.push([]);
    for (let j = 1; j < col; j++) {
      arr[i].push(j);
    }
  }

  return arr;
}

function flatArr(arr) {
  const newArr = [];

  for (el of arr) {
    newArr.push(...el);
  }

  return newArr;
}

console.log(flatArr(matrix));

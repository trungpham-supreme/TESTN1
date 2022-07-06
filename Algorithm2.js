function permutation(nums, result) {
  function dfs(arr, brr) {
    if (arr.length === 0) {
      result.push([...brr]);
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (i + 1 < arr.length && arr[i] === arr[i + 1]) {
        continue;
      }
      brr.push(arr[i]);
      dfs(arr.slice(0, i).concat(arr.slice(i + 1)), brr);
      brr.pop();
    }
  }
  dfs(nums, []);
}

function timeTraining(x) {
  let result = [];
  let arr = [];
  let beginArr = [];
  for (let i = 0; i < x; i++) {
    arr.push(1);
    beginArr.push(1);
  }
  result.push(beginArr);
  for (let i = 0; i < Math.floor(x / 2); i++) {
    arr.splice(0, 2);
    arr.push(2);
    permutation(arr, result);
  }
  console.log(result);
}

timeTraining(30);

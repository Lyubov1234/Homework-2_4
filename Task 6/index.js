const arr = ["a", "b"];

const addItem = (arr, c) => {
  arr[arr.length] = c;
};

addItem(arr, "c");

console.log(arr);

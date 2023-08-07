//Задача 1
function maxNum(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let a = [4, 20, 18, 5, 10, 39, 14];
maxNum(a);
console.log("Самое большое число", maxNum(a));

//задача 2
function palindrom(str) {
  let clean = str.toLowerCase().replace(/[^a-zа-я0-9]/g, "");
  let reverse = clean.split("").reverse().join("");

  return clean === reverse;
}

let string = "А роза упала на лапу Азора";
palindrom(string);
if (palindrom(string)) {
  console.log(true);
} else {
  console.log(false);
}

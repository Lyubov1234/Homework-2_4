const numbers = [27, -3, 92, 0, -17, -2, 108];
const  plusNambers = [];
const minusNambers = [];
const zeroNambers = [];

for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > 0) {
        plusNambers.push(numbers[i]);
    }
    else if (numbers[i] < 0) {
        minusNambers.push(numbers[i]);
    }
    else if (numbers[i] == 0) {
        zeroNambers.push(numbers[i]);
    }
}

console.log("Положительные числа =>",  plusNambers);
console.log("Отрицательные числа =>", minusNambers);
console.log("Числа равные 0  =>",  zeroNambers);



// for (let twoNambers of numbers) {
// {
//         if (twoNambers > 0) {
//             plusNambers.push(twoNambers);
//         }
//        else if (twoNambers < 0) {
//             minusNambers.push(twoNambers);
//             }
//        else if (twoNambers == 0) {
//             zeroNambers.push(twoNambers);
//         }
//     }
// }

// console.log("Положительные числа =>",  plusNambers);
// console.log("Отрицательные числа =>", minusNambers);
// console.log("Числа равные 0  =>",  zeroNambers);

  
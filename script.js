
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

// Знайти суму та кількість позитивних елементів.
let sum = 0;
    arr
    .filter(function (num){
    return num > 0;
    })
    .forEach(function (num){
    sum += num;
    })
console.log(sum);

// Знайти максимальний елемент масиву та його порядковий номер.
let max = arr[0];
let indexMax = 0;
    arr.forEach(function (val, i,){
        if(val > max){
            max = val;
            indexMax = i;
        }
    });
    console.log(max, indexMax);

// Знайти мінімальний елемент масиву та його порядковий номер.
let min = arr[0];
let indexMin = 0;
arr.forEach(function (val,i){
    if(val < min){
        min = val;
        indexMin = i;
    }
});
console.log(min, indexMin);

// Визначити кількість негативних елементів.
let negativeElements =
    arr.filter(function (val){
        return val < 0;
    })
console.log(negativeElements.length);

// Знайти кількість непарних позитивних елементів
const odds = [];
arr
    .filter(function (val){
        return val > 0;
    })
    .forEach(function (val){
    if(val % 2 !== 0) {
        odds.push(val)
    }
});
console.log(odds.length);

// Знайти кількість парних позитивних елементів.

const edds = [];
arr
    .filter(function (val){
        return val > 0;
    })
    .forEach(function (val){
        if(val % 2 === 0) {
            edds.push(val)
        }
    })
console.log(edds.length);

// Знайти суму парних позитивних елементів.
let resultEdd = 0;
arr
    .filter(function (val){
        return val > 0;
    })
    .filter(function (val){
        return val % 2 === 0
    })
    .map(function (val){
        return resultEdd += val;
    })
console.log(resultEdd);

// Знайти суму непарних позитивних елементів.
let resultOdd = 0;
arr
    .filter(function (val){
        return val > 0;
    })
    .filter(function (val){
        return val % 2 !== 0
    })
    .map(function (val){
        return resultOdd += val;
    })
console.log(resultOdd);

// Знайти добуток позитивних елементів.
let resultProduct = 1;
arr
    .filter(function (val){
        return val > 0;
    })
    .map(function (val){
        return resultProduct *= val;
    })
console.log(resultProduct);

    // Знайти найбільший серед елементів масиву, остальні обнулити.
let maxValue = arr[0];
let maxArr =
arr.map(function (value){
        maxValue = maxValue < value ? value : maxValue;
        return value;
})
    .map(function (value, index){
        return value === maxValue ? maxValue : 0;
    })
console.log(maxArr);




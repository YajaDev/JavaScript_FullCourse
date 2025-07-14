const myArray = [21, 32, 90];
console.log(myArray);

console.log(myArray[1]);

myArray.push('bleh');

console.log(myArray);

myArray.splice(0, 1);

console.log(myArray);

myArray.splice(myArray.length - 1, 1);

console.log(myArray);

console.log(typeof(myArray));

//11d. Create a for loop that counts up from 5 to 10
console.log('Exercise 11d.');
for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}

//11e.  Create a for loop that counts down 5 to 10
console.log('Exercise 11e.');
for (let i = 5; i >= 0; i--) {
    console.log(i); 
}

//11f. Make Exercise 11d. and 11e. while loop
console.log('Exercise 11f.');
let i = 0;
while (i <= 10) {
    console.log(i);
    i+=2;
}

let i2 = 5;
while (i2 >= 0) {
    console.log(i2);
    i2--;
} 

//11g.
console.log('Exercise 11g.');
const nums = [1,2,3];
let newSetOfNums =[];

for (let i = 0; i < nums.length; i++) {
    newSetOfNums.push(nums[i] + 1);
}

console.log(newSetOfNums);

//11h.
console.log('Exercise 11h.');
function addOne(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + 1);
    }
    return newArray;
}

console.log(addOne(nums));
console.log(addOne([-2,-1, 0, 99]));

//11i.
console.log('Exercise 11i.');
function addNum(array, num) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] + num);
    }
    return newArray;
}

console.log(addNum([1,2,3], 2));
console.log(addNum([1,2,3], 3));
console.log(addNum([-2,-1,0, 99], 2));

//11j.
console.log('Exercise 11j.');
function addArray(array1, array2) {
    let arrayLength;
    let result = [];
    
    if (array1.length === array2.length || array1.length < array2.length) {
     arrayLength = array1.length;
    } else arrayLength = array2.length;

    for (let i = 0; i < arrayLength; i++) {
        const added = array1[i] + array2[i];
        result.push(added);
    }
    return result;
}
console.log(addArray([1,1,2], [1,1,3]));
console.log(addArray([1,1,3], [4,5,6]));

//11l. & 11m.
console.log('Exercise 11l. & 11m.');

function minMax(array) {
    const number = {
        min: null,
        max: null
    };
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] && !number.max && !number.min){
            number.max = array[i];
            number.min = array[i];
        }
        array[i] > number.max && (number.max = array[i]);
        array[i] < number.min && (number.min = array[i]);        
    };

    // for (let i = 0; i < number.length; i++) {
    //       const value = nums[i];

    //       // If the min is null OR the value is
    //       // less than the min, update the min.
    //       if (result.min === null || value < result.min) {
    //         result.min = value;
    //       }

    //       // If the max is null OR the value is
    //       // greater than the max, update the max.
    //       if (result.max === null || value > result.max) {
    //         result.max = value;
    //       }

    //       // We have to use 2 if-statements above instead of
    //       // an if-else statement. This makes sure both the
    //       // min and max are set if they are null.
    //     }

    console.log(number);
}

minMax([1,-3,5]);
minMax([-2,3,-5,7,10]);
minMax([]);
minMax([4]);

//11n.
console.log('Exercise 11n.');
console.log(countWords(['sad', 'sadfsa', 'sad', 'dsadffgds', 'sad']));



function countWords(arrayOfWord) {
    const result = {};
    for (let i = 0; i < arrayOfWord.length; i++) {
        const word = arrayOfWord[i];

        // my version
         if (result[word]) {
            result[word] = result[word] + 1; // or ++
        } else {
            result[word] = 1
        }

        // simple version
        // result[word] = (result[word] || 0) + 1;
    }

    return result;
}

//11o.
console.log('Exercise 11o.');

const searchTo = ['green', 'red', 'blue', 'red', 'search'];
const toSearch = 'red';
console.log(findIndex(searchTo, toSearch));

function findIndex(Array, toSearch) {
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] === toSearch) {
            return i;
        }
    } 
    return -1;
}

//11w.
console.log('Exercise 11w.');
function unique (array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        findIndex(result, array[i]) === -1 && 
        result.push(array[i])
    }
    return result;
}
console.log(unique(searchTo));

//11r.
console.log('Exercise 11r.');

const foods = ['egg', 'apple', 'egg',  'egg', 'ham'];
console.log(removeEgg(foods));


function removeEgg(food) {
let result = [];
let removedEgg = 0;
const reversedFood = food.slice().reverse();
    for (let i = 0; i < food.length; i++){
        if (reversedFood[i] === 'egg' && removedEgg < 2) {
            removedEgg ++;
            continue;
        } 
        result.push(reversedFood[i])
    }
    return result.reverse();   
}

//11v.
console.log('Exercise 11v.');
for (let i = 1; i <= 20; i++) {

    if (i % 5 === 0 && i % 3 === 0) {
        console.log('FizzBuzz');
        continue;
    }
    
    if (i % 3 === 0) {
        console.log('Fizz');
        continue;
    }

    if (i % 5 === 0) {
        console.log('Buzz');
        continue;
    }
    console.log(i);
}
// exercise a.
console.log('\nexercise a.');

const add = function() {
    console.log(2+3);
}
add();
add();

// exercise b.
console.log('\nexercise b.');

function runTwice(fun) {
    fun();
    fun();
}

runTwice(function() {
    console.log('12b');    
});

runTwice(add);

// exercise c. - d.
console.log('\nexercise c. to exercise d. is the Start button');

// exercise e. - f.
console.log('\nexercise e. to exercise  f. is the add to cart button');

document.getElementById('add_to_cart _btn')
    .addEventListener('click', () => addToCart());

let setTimeoutId;

function addToCart() {
    const addedDisplayElement = document.getElementById('added_display');

    addedDisplayElement.innerText = 'Added';

    clearTimeout(setTimeoutId);

    setTimeoutId = setTimeout(() => {
        addedDisplayElement.innerText = '';
    }, 2000);
}

// exercise g. - i.
console.log('\nexercise g. to exercise i. is the title messages');
console.log(document.title);

let messages = 0;
// SuperSimpleDev Answer
setInterval(() => {
    if (document.title === 'App' && (messages > 0)) {
        document.title = `(${messages}) New messages`;
        } else {
            document.title = 'App';
            return;
        }
    }, 1000);

// My Answer
// setInterval(function() {
//     if (messages) {
//         setTimeout(function() {
//             document.title = `(${messages}) New Messages`;
//         }, 1000); 
//     }
//     document.title = 'App';  
// }, 2000);

console.log('\narrowFunction exercise');
// My arrowFunction

const arrowFunction = () => {
    console.log('hello');
    return true; 
}

console.log(arrowFunction);

const value = arrowFunction();

console.log(value);

console.log('\narrowFunction on object exercise');
// My arrowFunction on object

// const object = {
//     Method: () => {
//     }
// };

const object = {
    Method() {
    }
};

// exercise j.
console.log('\nexercise j.');

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2,3));
console.log(multiply(7,10));

// exercise l.
console.log('\nexercise l.');

function countPositive(arr) {
    let result = 0; 
    arr.forEach(value => {
        value > 0 && result++
    });
    return result;
}
console.log(countPositive([1,-3,5]));
console.log(countPositive([-1,3,-5,7,10]));

// exercise m.
console.log('\nexercise m.');

function addNum(arr, num) {
    // Simplier
    // return arr.map((value) => value + num);
    
    const newArray = arr.map(value => value + num);
    return newArray;
}

console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));

// | Use case               | Method       |
// | ---------------------- | ------------ |
// | Change every item      | `.map()`     |
// | Keep only some items   | `.filter()`  |
// | Run some code per item | `.forEach()` |

// .map expect return new value
console.log([1,2,3].map((value) => value + 2));

// exercise n.
console.log('\nexercise n.');

const foods = ['egg','apple', 'egg', 'egg', 'ham'];

// function removeEgg(arrOfFood) { 
//     result = [];
//     for (let i = 0; i < arrOfFood.length; i++) {
//         const food = arrOfFood[i];
//         food !== 'egg' && result.push(food);
//     }
//     return result;
// }

// .filter return value if it's true
function removeEgg(arrOfFood) { 
    return arrOfFood.filter(food => food !== 'egg');
}

console.log(removeEgg(foods));

// exercise 0.
console.log('\nexercise o.');

function removeFirst2Egg(arrOfFood) { 
    let removedEgg = 0;
    return arrOfFood.filter(food => {
        if (food === 'egg') {
            if (removedEgg === 2) {
                return true
            } else {
                removedEgg++
            }
        } else {
            return true;
        }
        
    });
}

console.log(removeFirst2Egg(foods));

// exercise q.
console.log('\nexercise q.');

// start button
const startButtonElement = document.getElementById('start_btn');
startButtonElement.addEventListener('click', () => {
    startButtonElement.innerText = 'Loading...'
    setTimeout(() => {
        startButtonElement.innerText = 'finished!'
    }, 1000);
})
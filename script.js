// step 1 (L6)

// const timeMachine = {
//     name: 'DeLorean',
//     horsepower: 200,
//     timeTravel: true,
//     maxSpeed: 160,
//     age: 36
// }

// for (let key in timeMachine) {
//     // console.log(`Key - ${key}, value - ${timeMachine[key]}`);
//     if (!isNaN(timeMachine[key]) && typeof timeMachine[key] !== 'boolean') {
//         timeMachine[key] = timeMachine[key] * 2;
//     }
// };
// console.log('timeMachine', timeMachine);


// step 2 (L6)

// console.log('timeMachine', objToArr(timeMachine));

// function objToArr(obj) {
//     const arr = [];
//     let counter = 0;
//     for (let key in obj) {
//         arr[counter] = obj[key];
//         counter++;
//     }
//     return arr;
// }

// const name = 'horsepower';
// console.log(timeMachine[name]);


//генератор компліментів

const submit = document.getElementById('submit');
const result = document.getElementById('result');

let bodyPart = [];
let adjectives = [];
let words = [];

function getBodyPart(element) {
    bodyPart = setData(element);
    console.log(bodyPart);
}

function getAdjectives(element) {
    adjectives = setData(element);
    console.log(adjectives);
}

function getWords(element) {
    words = setData(element);
    console.log(words);
}

function setData(element) {
    const arr = element.value.split(',');
    if (element.value === '') {
        element.classList.add('error');
    } else {
        element.classList.remove('error');
    }
    return arr;
}

function generator() {
    result.classList.add('load');

    setTimeout(function () {
        if (bodyPart.length !== 0 && adjectives.length !== 0 && words.length !== 0) {
            result.innerHTML = `Your ${randomWords(bodyPart)} is like a ${randomWords(adjectives)} ${randomWords(words)}`
        } else {
            console.log('Error');
        }
        result.classList.remove('load');
    }, 2000)

}

function randomWords(array) {
    const index = randomNumbers(array);
    return array[index];
}

function randomNumbers(array) {
    const arrLength = array.length - 1;
    return (Math.random() * arrLength).toFixed();
}

window.onload = function () {
    const bodyPartId = document.getElementById('bodyPart');
    const adjectivesId = document.getElementById('adjectives');
    const wordsId = document.getElementById('words');

    bodyPart = bodyPartId.value.split(',');
    adjectives = adjectivesId.value.split(',');
    words = wordsId.value.split(',');

    submit.addEventListener('click', generator);
}
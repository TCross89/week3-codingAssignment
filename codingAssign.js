//create an array called ages that contains the following values: 
//3, 9, 23, 64, 2, 8, 28, 93

const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// programmatically subtract the value of the first element 
//in the array from the value of the last element of the array

let lastIndex = ages.length - 1;
let newAge = ages[lastIndex] - ages[0];
console.log(newAge);

//add a new age to your array and repeat the step above to ensure
//it is dynamic(works for arrays of different lengths)

ages.push(33);
console.log(ages);

let lastIndex2 = ages.length - 1;
let newAge2 = ages[lastIndex2] - ages[0];
console.log(newAge2);

//use a loop to iterate through the array and calculate the
//average age.

var sumOfNums = 0;
for (let i = 0; i < ages.length; i++) {
    sumOfNums = ages[i] + sumOfNums;
} 
let averageAge = sumOfNums / ages.length;
console.log(averageAge);

//

//create an array called names that contains the following values:
//'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

//use a loop to iterate through the array and calculate the average 
//number of letters per name. 

var totalCharacters = 0;
for (let i = 0; i < names.length; i++) {
    totalCharacters = names[i].length + totalCharacters;
} 
let averageCharacters = totalCharacters / names.length;
console.log(averageCharacters);

//use a loop to iterate through the array again and concatenate all
//the names together, separated by spaces.

var totalNames = "";
for(let i = 0; i < names.length; i++) {
    totalNames = totalNames + " " + names[i];
}
console.log(totalNames);

// how do you access the last element of any array?
// array.length-1

// how do you access the first element of any array?
// array[0];

//create a new array called nameLengths. Write a loop to iterate over
// the previously created names array and add the length of each name
// to the nameLengths array.

let nameLengths = names.map(function(element) {
    return element.length;
});
console.log(nameLengths);

// write the loop to iterate over the nameLengths array and calculate
// the sum of all the elements in the array.

let sumOfAllNames = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfAllNames = nameLengths[i] + sumOfAllNames;
} 
console.log(sumOfAllNames);

// write a function that takes two parameters, word and n, as arguments
// and returns the word concatenated to itself n number of times

function repeat(word, n) {
    let helpMe = "";
    for (let i = 0; i < n; i++) {
        helpMe = word + helpMe;
    }   return(helpMe);
}
console.log(repeat("CatDog", 3));

// write a function that takes two parameters, firstName and lastName,
// and returns a full name(separated by a space)

function fullName(firstName, lastName) {
    let fName = firstName + " " + lastName;
    return fName; 
}
console.log(fullName("Tyler", "Stenquist"));

// write a function that takes an array of numbers and returns true
// if the sum of all the numbers in the array is greater than 100

function allNumbs(valueOfNumbers) {
    let sum = 0;
    console.log(valueOfNumbers);
    for (let i = 0; i < valueOfNumbers.length; i++) {
        sum = sum + valueOfNumbers[i];
     }
    if(sum > 100) {
        return ('True');
    }   else {
        return('False');
    }
}
var result = allNumbs(ages);
console.log(result); 
var results = allNumbs(nameLengths);
console.log(results);

// write a function that takes an array of numbers and returns the 
// average of all the elements in the array

function avgNums(averageOfAll) {
    let sum = 0;
    console.log(averageOfAll);
    for (let i = 0; i < averageOfAll.length; i++) {
        sum = sum + averageOfAll[i];
     }
    return sum / averageOfAll.length;
}
var ageAverage = avgNums(ages);
console.log(ageAverage);
var lengthAverage = avgNums(nameLengths);
console.log(lengthAverage);

// write a function that takes two arrays of numbers and returns true if
// the average of the elements in the first array is greater than
// the average of the elements in the second array

function greaterThan(arr1, arr2) {
    var avgArr1 = avgNums(arr1);
    var avgArr2 = avgNums(arr2);
    if(avgArr1 > avgArr2) {
        return true;
    } else {
        return false;
    }
}
var firstGreater = greaterThan(ages, nameLengths);
console.log(firstGreater);

// write a function called willBuyDrink that takes a boolean isHotOutside
// and a number moneyInPocket, and returns true if it is hot outside and
// if moneyInPocket is greater than 10.50

function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
        
}
var iWillBuyDrink = willBuyDrink(true, 12);
console.log(iWillBuyDrink);

// create a function of your own that solves a problem. In comments, 
// write what the function does and why you created it

function passedExam(ifStudied, answeredAllCorrect) {
    if(ifStudied === true && answeredAllCorrect === true) {
        return "Passed";
    } else {
        return "Failed";
    }
}
var iPassed = passedExam(true, true);
console.log(iPassed);

// I just did one that was very similar to this 
// so it was fresh in my head.

// I created a function that runs through 2 boolean parameters
// to tell me whether I passed or failed the exam
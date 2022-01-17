// let myName = "Bill";
// let favouriteDrink = "coffee";

// console.log(myName);
// console.log(myName.length);
// console.log("Bill Cann".length);
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());

// console.log(Math.random());

// let grid =     `   
//                 |  |
//                 |  |
//                 |  |
//             ------------
//                 |  |
//                 |  |
//                 |  |
//             ------------
//                 |  |
//                 |  |
//                 |  |`;


// console.log(grid);

// console.log("All around the world".charAt(7).toUpperCase());
// console.log("All around the world".charAt(8).toUpperCase());
// console.log("All around the world".charAt(0).toUpperCase());

// let array = ["A", "l", "l", " ", "a", "r", "o", "u", "n", "d"];

// console.log(favouriteDrink);
// console.log("My favourite drink is " + favouriteDrink);
// console.log(`My favourite drink is ${favouriteDrink} because it's nice`);

// console.log("-----------");

// let myAge = "24";
// let favouriteColour = "blue";

// console.log("My name is " + myName + ", I am " + myAge + ", my favourite colour is " + favouriteColour);

// let myBreakfast = "Weetabix";
// let myLunch = "toasties";
// let myDinner = "spag bol";

// console.log("For breakfast I have " + myBreakfast + ", for lunch I have " + myLunch + " and for dinner I have " + myDinner);

// const date1 = new Date('11/01/2022');
// const date2 = new Date('04/09/2022');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

// console.log("There are " + diffDays + " days until my birthday");

// const date3 = new Date ('04/09/1997');
// const diffTime2 = Math.abs(date3 - date2);
// const diffDays2 = Math.ceil(diffTime2 / (1000 * 60 * 60 * 24));

// console.log("I was born " + diffDays2 + " days ago.");

// console.log("-----------");

// let music = "classical";

// if(music == "classical") {
//     console.log("Classical");
// } else {
//     console.log("Default");
// }

// console.log("------------");

// let day = "Saturday";

// if (day == "Saturday" || day == "Sunday"){
//     console.log("It's the weekend!");
// }
// else {
//     console.log("When's the weekend?");
// }

// let car = "Peugeot";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case "Honda":
//     case "Peugeot":
//         console.log("You've got a French car");
//         break
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese cars are quiet!");
// }

// console.log("------------");

// const grade = 87;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// }

// const grade2 = 49;

// if (grade2 >= 70){
//     console.log("Distinction");
// }
// else if (grade2 >= 60){
//     console.log("Merit");
// }
// else if (grade2 >= 50){
//     console.log("Pass");
// }
// else if (grade2 < 50){
//     console.log("Failed")
// }

// console.log("-----------");

// const age = 21;
// let country = "USA";

// if (age >= 18 && country != "USA"){
//     console.log("Yes I can serve you.");
// }
// else if (age < 21 && country == "USA"){
//     console.log("You aren't old enough.");
// }
// else if (age >= 21 && country == "USA"){
//     console.log("Yes I can serve you.");
// }
// else if (age <= 17){
//     console.log("You aren't old enough.");
// }

// console.log("-----------");

// //challenge 1
// let password = " ";

// if (password.length < 8){
//     console.log("Password is too short.");
// }
// else if (password.length >= 8){
//     console.log("Password accepted.");
// }

// //challenge 2
// let num = (5);

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log ("This number is divisible by 3 or 5");
// } 
// else {
//     console.log ("This number is not divisible by 3 or 5");
// } 

// switch(num){
//     case (num % 3 == 0 || num % 5 == 0):
//         console.log("This number is divisble by 3 or 5.");
//         break;
//     case (num % 3 == 0 || num % 5 != 0):
//         console.log("This number is not divisible by 3 or 5.")
// }

// //challenge 3
// let numB = (3);

// if (numB % 3 == 0 && numB % 5 == 0){
//     console.log("fizz buzz");
// }
// else if (numB % 3 == 0){
//     console.log("fizz");
// }
// else if (numB % 3 == 5){
//     console.log("buzz");
// }
// else if (numB % 3 != 0 && numB % 5 != 0){
//     console.log(numB);
// }

// //challenge 4

// let numC = (""); 

// let numReverse = numC.split("").reverse().join("");

// if (numC === numReverse) {
//     console.log("Your number is a palindrome");
// } 
// else {
//     console.log("Your number is not a palindrome");
// }

// function pal

// //challenge 5

// let time = ("");
// let placeOfWork = "work"
// let townOfHome = "home"

// if (time == 8){
//     console.log(`Time is ${time} and I'm commuting to ${placeOfWork}`);
// } 
// else if (time == 9){
//     console.log(`Time is ${time} and I'm at ${placeOfWork}`);
// } 
// else {
//     console.log(`Time is ${time} and I'm at ${townOfHome}`);
// }

// //challenge 6

// let str = ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi");

// str.lastIndexOf("i");

// //challenge 7

// let word = (" ");
// let firstLetter = word.charAt(0);
// let lastLetter = word.charAt(-1);

// if (firstLetter == lastLetter){
//     console.log("True")
// }
// else if (firstLetter != lastLetter){
//     console.log("False")
// }

// //challenge 8

// let num1 = ("");
// let num2 = ("");
// let ((num1 + num2) / 2) = Int

// if (Int % 1 == 0){
//     console.log("Even")
// }
// else if (Int % 1 != 0){
//     console.log("Odd")
// }

// console.log("-------------");

// let theGrid = [["o", "x", "o"],
//                ["o", " ", "o"],
//                ["x", " ", "o"]];

// if (theGrid[0][0] && theGrid[0][1] && theGrid[0][2] == "x") {
//     console.log("You won!")
// } 
// else if (theGrid[0][0] && theGrid[0][1] && theGrid[0][2] == "o"){
//     console.log("You won!")
// }

// console.log("-------------");

// let coffeeIsGrinding = true;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();
// pressGrindBeans();

// console.log("-------------");

// let accnumber = 50449921;
// let amount = 100;
// let balance = 1000;


// const cashWithdrawal = (amount, accnum) => {
//     balance -= amount;
//     console.log(`Withdrawing ${amount} from account ${accnum}.`);
//     console.log(`You now have ${balance} in your account.`);
// }

// cashWithdrawal(amount, accnumber);
// cashWithdrawal(amount, accnumber);
// cashWithdrawal(amount, accnumber);


// const takeOrder = (size, drinkType) => {
//     console.log(`Order received: ${size} ${drinkType}`);
// }

// let size = ("Tall");
// let drinkType = ("Latte");

// const factorial = (n) => {
//     if ((n===0) || (n===1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1))
//     }
// }

// console.log(factorial(33));


const power = (para1, para2) => {
    return para1**para2;
}
console.log(power(4, 3));

console.log("---------------");

let coffeeOrder = ["cappucino", "americano", "flat white"];

coffeeOrder[1] = "vanilla latte" // This overrides americano.
coffeeOrder.push("espresso"); 
coffeeOrder.pop();

console.log(coffeeOrder);
console.log(coffeeOrder.length);
console.log(coffeeOrder[1].length);
console.log(coffeeOrder[1]);

console.log("---------------");

let favWebsites = ["www.google.com", "www.bing.com", "www.askjeeves.com"];

favWebsites.push("www.ecosia.com");
favWebsites.push("www.yahoo.com");
favWebsites.pop();

console.log(favWebsites);

console.log("---------------");

const sub = (topping1, topping2, topping3, topping4, topping5) => {

console.log(`We are preparing your sandwich order: ${topping1}, ${topping2}, ${topping3}, ${topping4}, ${topping5}`)
}  

console.log("---------------");

let favDrinks = [
    "Coke",
    "Fanta",
    "Tonic",
    "Red Bull"
];
for(let drinksIndex=0; drinksIndex<favDrinks.length; drinksIndex++){
    console.log(favDrinks[drinksIndex]);
}
// i used instead of drinksIndex typically used because it stands for index.
console.log("---------------");

let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`); // this is a loop.

console.log("---------------");

let age = 15;

while( age < 18){
    console.log("You're a child!");
    age++;
}
console.log("You're an adult!");

console.log("---------------");

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);








console.log("--------------");

let drinksArray = ["Coke", "Pepsi", "Sprite"];
let drinkCost = [1.20, 1.10, 1.00];
let userBalance = 2.00;

const checkDrinks = () => {
    for (let i = 0; i < drinksArray.length; i++){
        console.log(drinksArray[i]);
    }
}

const checkBalance = () => {
    for (let i = 0; i < drinksArray.length; i++){
        console.log(`${drinksArray[i]}: £${drinkCost[i]}`)
    }
    console.log(`Your available balance is £${userBalance}`);
}

const checkSelection = (choice) => {
    if (userBalance >= drinkCost[choice]){
        console.log(`Enjoy your ${drinksArray[choice]}, you've got good taste`);
    }
}

checkDrinks();
checkBalance();
checkSelection(2);
checkSelection(1);
checkSelection(0);

console.log("--------------");

const person = {
    firstName: "Bill",
    lastName: "Cann",
    age: 24,
    looks: {
        eyeColour: "Blue",
        hairColour: "Blonde",
        array: ["1", "2", "3"]
    }
};

console.log(person.looks.array[0]);

console.log("--------------");

let offer = "none";
let time = 1200;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinnks: [
        "Cappucino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Chocolate"
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisngly priced sandwich",
    noOffer: "Sorry no offer"
};

if (time < 1100){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} else if (time < 1500){
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
}

console.log("--------------");

let day = "Monday";
let theDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const clock = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
};

if (day == "Saturday" || day == "Sunday"){
    console.log(clock.weekendAlarm);
} else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
    console.log(clock.weekdayAlarm);
};

console.log("--------------");

const pet = {
    name: " ",
    typeOfPet: " ",
    age: 6,
    colour: " ",
    eat: () => {
        console.log(`${this.name} is eating.`);
    },
    drink: () => {
        console.log(`${this.name} is drinking.`);
    }
    };

    pet.eat();
    pet
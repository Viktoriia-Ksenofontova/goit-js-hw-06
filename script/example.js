// Array.prototype.forEach()

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (element, index, array) {
//   console.log(element);
//   console.log(index);
//   console.log(array);
// });


// Array.prototype.map()
// const numbers = [5, 10, 15, 20, 25];

// const mappedNumbers=numbers.map(function (element, index, array) {
//   console.log(element);
 
//   return element * 2;
// });

// console.log(mappedNumbers);

// задача 1
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
// ];
// получаем массив имен
// const playerNames = players.map(function (player) {
//   return player.name;
// });

// console.log(playerNames);
// увеличиваем количество поинтов всех игроков
// const updatedPoints = players.map(function (player) {
//   return {
//     ...player,
//     points: Math.ceil(player.points * 1.1)
//   }
// });

// console.log(updatedPoints);

// увеличиваем количество часов игрока по id
// const playerIdToUpdate = "player-2";
// const updatedPlayers = players.map(function (player) {
//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50
//     };
//   }
//   return player;
// });

// console.table(updatedPlayers);


// Array.prototype.filter()

// задача 2
// const players = [
// { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
// ];

// получаем массив всех онлайн игроков
// const onlinePlayers = players.filter(function (player) {
//   return player.online;
// });
// console.log(onlinePlayers);

// получаем массив всех офлайн игроков
// const offlinePlayers = players.filter(function (player) {
//   return !player.online;
// });
// console.log(offlinePlayers);

// получаем массив игроков со временем больше 250 часов
// const hardcorePlayers = players.filter(function (player) {
//   return player.timePlayed>250;
// });
// console.log(hardcorePlayers);

// Array.prototype.find()
// задача 3
// const players = [
// { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
// ];

// // ищем игрока по id
// const playerIdToFind = "player-2";
// const player = players.find(function (player) {
//   return player.id === playerIdToFind;
// });

// console.log(player);

// Array.prototype.every()
// задача 4
// const players = [
// { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
// { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
// { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: false },
// ];

// const isAllOnline = players.every(function (player) {
//   return player.online;
// });
// console.log("isAllOnline:", isAllOnline);

// const averagedInPlayTime = players.every(function (player) {
//   return player.timePlayed > 100;
// });
// console.log("averagedInPlayTime:", averagedInPlayTime);


// Array.prototype.reduce()
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce(function (accumulator, number, index, array) {
//   return accumulator + number;
// }, 0);
// console.log(total);

// ------
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(function (total,item) {
//   return total + item.price * item.quantity;
// }, 0);
  
// console.log(totalAmount);


// Setup ---freeCodeCamp
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop) {
// // Only change code below this line
//   for (let contact of contacts) {
//     if (contact.firstName === name) {
//       for (let key in contact) {
//         if (key === prop) {
//           return contact[key];
//         }
//       }
//       return "No such property";
//     }
//   }
//   return "No such contact";
// // Only change code above this line
//   }

// console.log(lookUpProfile("Akira", "likes"));

// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Harry", "likes"));
// console.log(lookUpProfile("Bob", "number"));
// console.log(lookUpProfile("Akira", "address"));



// -------рекурсия
// function countdown(n){
//   if (n<1){
//     return [];
//   } else {
//      const countArray=countdown(n-1);
//      countArray.unshift(n);
// return countArray;
//   }
  
// }
// console.log(countdown(10));
//----------------
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
    return [startNum];
  } else {
     const numbers=rangeOfNumbers(startNum,endNum-1);
     numbers.push(endNum);
  
     
return numbers;
  }
  
};

console.log(rangeOfNumbers(6, 9));
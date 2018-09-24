/*
* exercises are given in the website URL https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
* Date Functions.
* To access segments of Date and Time, We have separate functions. 
* where Month and Day are used as Array.
* There is no built in functions for 12 hrs time format 
*    |
*    --override locales and options in toLocalTimeString()
* toLocaleString
* toLocaleDateString
* toLocaleTimeString
* toLocaleFormat (depricated)
*/

//get the current date
let todayDate   = new Date();

//e.g 1534719360879 (in ms).
let Time        = todayDate.getTime();

//1 - Monday. It uses array list.
let Day         = todayDate.getDay();

// 20 7 2018. 7 refers to Month (array list).
let Dat         = todayDate.getDate();
let Month       = todayDate.getMonth();
let FullYear    = todayDate.getFullYear();



//let local = todayDate.toLocaleFormat(); --deprecated



// 4 26 0 879. 
let Hours       = todayDate.getHours();
let Min         = todayDate.getMinutes();
let Sec         = todayDate.getSeconds();
let Ms          = todayDate.getMilliseconds();

//displayed using console 
console.log("Time"+ Time);

console.log("Day"+ Day);

console.log("Dat"+ Dat);
console.log("Month"+ Month);
console.log("FullYear"+ FullYear);

console.log("Hours"+ Hours);
console.log("Min"+ Min);
console.log("Sec"+ Sec);
console.log("Ms"+ Ms);

//let OffsetTZ    = todayDate.getTimezoneOffset();

// let UDay        = todayDate.getUTCDay();

// let UDat        = todayDate.getUTCDate();
// let UMonth      = todayDate.getUTCMonth();
// let UYear       = todayDate.getUTCFullYear();

// let UHrs        = todayDate.getUTCHours();
// let UMin        = todayDate.getUTCMinutes();
// let USec        = todayDate.getUTCSeconds();
// let UMs         = todayDate.getUTCMilliseconds();

// console.log("OffsetTZ"+ OffsetTZ);

// console.log("UDay"+ UDay);

// console.log("UDat"+ UDat);
// console.log("UMonth"+ UMonth);
// console.log("UYear"+ UYear);

// console.log("UHrs"+ UHrs);
// console.log("UMin"+ UMin);
// console.log("USec"+ USec);
// console.log("UMs"+ UMs);             
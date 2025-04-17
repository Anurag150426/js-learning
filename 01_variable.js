const accountId= 123458
//accountId=2// not allowed
let accountEmail="kumaranu8975@gmail.com"
var accountPassword="123456"// we dont use var often in js due to scope issues
accountCity="Bangalore"
accountEmail="ak@hc.com"
accountPassword="1234567"
accountCity="Chennai"
/*prefer let and const over var as they have block level scope and var has function level scope
const is used for constant values which are not supposed to change
*/

console.log(accountId);
console.table({accountEmail,accountPassword,accountCity})



const  accountId = 123456
let accountEmail = "shubham@gmail.com"
var accountPassword = "23546"
accountCity = "Delhi"
let accountState;
accountBook = "geeta"

//accountId = 2 // not allowed

accountEmail = "dobhal@gmail.com"
accountPassword = "7896"
accountCity = "Jaipur"
bankTime = "10:00 - 04:00"

/* prefer not to use var
 because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState,accountBook,bankTime])
console.log(accountId);

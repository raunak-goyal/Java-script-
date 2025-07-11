const accountId = 144553
let accountEmail="Raunak@google.com"
var accountPassword ="12345"
accountCity = "Jaipur"

// accountId=2 //not allowed
accountEmail="hc@google.com"
accountPassword="2121212"
accountCity="indore"
let accountState;
console.log([accountId,accountEmail,accountPassword,accountId,accountState]);

console.log(accountId);
/*
prefer not to use var
because of issue in block and functional scope
if variable value not defined so by default it prints undefined 
*/
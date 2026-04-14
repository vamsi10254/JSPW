// ATM Withdrawal
// Scenario

// Check pin, then check balance.

let pin = 1234, balance = 5000, enteredPin = 1234, withdraw = 3000;

if(enteredPin === pin){
    if(withdraw <= balance){
        console.log("Withdraw successful");
    }else{
        console.log("Insufficient balance");
    }
}else{
    console.log("Incorrect PIN");
}
// Voting Eligibility
// Scenario
// Person must be 18+ and must be citizen.

let age = 16;
let isCitizen = true;

if (age >= 18) {
  if (isCitizen) {
    console.log("Eligible to vote");
  } else {
    console.log("Not a citizen");
  }
} else {
  console.log("Age less than 18");
}




function getTotal(price, qty) {
  return price * qty;
}

let total = getTotal(100, 2);

if (total === 200) {
  console.log("Test Passed");
} else console.log("Test Failed");


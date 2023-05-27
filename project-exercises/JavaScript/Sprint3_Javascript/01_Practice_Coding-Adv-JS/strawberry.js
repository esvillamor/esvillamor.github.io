const Strawberry = (orders, cash) => {
const singleJarPrice = 40;
const discountedPrice = 100;

const totalPrice = Math.floor(orders / 3) * discountedPrice + (orders % 3) * singleJarPrice;
const change = cash - totalPrice;

  if (change >= 0) {
    return `Change: ${change}`;
  } else {
    return "Insufficient Funds";
  }
}

  console.log(Strawberry(5, 200)); // Output: Change: 20
  console.log(Strawberry(2, 80)); // Output: 0
  console.log(Strawberry(3, 80)); // Output: Insufficient Funds

//Using reduce method to fin the total
const prices = [6.75, 3.10, 4.00, 8.12];
const total = prices.reduce(
  (sum, price) => sum + price, 0);

console.log(total);

//How many names in array start with G
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNames = names.reduce((count, name) => {
    if (name[0] === 'G') {
      return count + 1;
    }
    return count;
  }, 0);

console.log(gNames);

//return numbers with 503 area code
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503 = phoneNumbers.reduce((amount, numbers) => {
  if (numbers.slice(0, 5) == '(503)') {
    return amount + 1;
  }
  return amount;
}, 0);
console.log(numberOf503);
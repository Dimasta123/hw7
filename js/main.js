const ukraine = {tax: 0.195, middleSalary: 1789, vacancies: 11476};
const latvia = {tax: 0.25, middleSalary: 1586, vacancies: 3921};
const litva = {tax: 0.15, middleSalary: 1509, vacancies: 1114};

function getTaxes(salary) {
  return +(this.tax * salary).toFixed(2);
}
console.log(
  `На Украине ты заплатишь столько налогов ${getTaxes.call(ukraine, 1900)}`,
);
function getMiddleTaxes(country) {
  return +(this.tax * this.middleSalary).toFixed(2);
}
console.log(
  `В Латвии айшники платят налог по средней зп ${getMiddleTaxes.call(latvia)}`,
);
function getTotalTaxes(country) {
  return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log(
  `В литве всего со всей айти сферы набигает такая сумма налогов ${getTotalTaxes.call(litva)}`,
);

setInterval(function getMySalary(ukraine) {
  const myMaxSalary = 2000;
  const myMinSalary = 1500;
  const salary = +(Math.random() * (myMaxSalary - myMinSalary + 1) +
    myMinSalary).toFixed(2);
  const myProfit = +(salary - this.tax * salary).toFixed(2);
  return console.log({
    mysalary: salary,
    taxes: this.tax,
    profit: myProfit,
  },)
},10000);



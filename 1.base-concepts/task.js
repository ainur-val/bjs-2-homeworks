"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d == 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) ) / (2 * a), (-b - Math.sqrt(d) ) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentInDecimal = percent / 100;
  let monthlyRate = percentInDecimal / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
  let sum = monthlyPayment * countMonths;


  return ( Math.round(sum * 100) / 100 );
}
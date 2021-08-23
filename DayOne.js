// Find the best times to buy and sell a stock. You have an array for which the ith element is the price of a given stock on day "i". If you are only allowed to buy one share of the stock and sell one share of the stock, make a program to find the best times to buy and sell.

let testArr = [7,1,5,3,6,4];

const bestStockTradeTime = (arr) => {
    let profit = 0;
    let minPrice = 10000;
    let optimalBuyingDay = 0;
    let optimalSellingDay = 0;
    for(let i = 0; i < arr.length; i++){
     if (arr[i] < minPrice){
       minPrice = arr[i];
       optimalBuyingDay = i;
     }
      if (arr[i] - minPrice > profit){
       profit = arr[i] - minPrice;
       optimalSellingDay = i;
     }
  }
    return console.log(`The best day to buy is day ${optimalBuyingDay + 1} and to sell is day ${optimalSellingDay + 1} which will result $${profit} profit`);
}


bestStockTradeTime(testArr);
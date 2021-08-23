// #1 Find the best times to buy and sell a stock. You have an array for which the ith element is the price of a given stock on day "i". If you are only allowed to buy one share of the stock and sell one share of the stock, make a program to find the best times to buy and sell.

let testArr = [7,2,5,1,3,6,4];

const bestStockTradeTime = (arr) => {
    let profit = 0;
    //we can make initial minPrice to any number, but since we dont have upper limit we will make it any value from the array
    let minPrice = arr[0];
    let optimalBuyingDay = 0;
    let optimalSellingDay = 0;
    
    for(let i = 0; i < arr.length; i++){
    //Here we check if there is a value lower than declared minPrice
     if (arr[i] < minPrice){
       minPrice = arr[i];
       optimalBuyingDay = i;
     }
     //We wil only check and update profit if the diff b/w current value in iteration and minPrice is greater that profit
      if (arr[i] - minPrice > profit){
       profit = arr[i] - minPrice;
       optimalSellingDay = i;
     }
  }
    return console.log(`The best day to buy is day ${optimalBuyingDay + 1} and to sell is day ${optimalSellingDay + 1} which will result $${profit} profit`);
}

bestStockTradeTime(testArr);


// #2 Find if a word can be formed by two words in a dictionary. For example, find that "newspaper" can be made by "news" and "paper." Write an effective program to do this assuming you have an array of words as a dictionary in ascending order?

// You will have a dictionary (list of words) (you have create it and maintain it, your choice of words) like news, paper, scissor, gate, chocolate, chip, desk, top, lap etc.
// If someone enters a word like newspaper (since news and paper are in the dictionary it should be a match)
// desktop => correct match
// laptop => correct match
// palmtop => no match
// colgate => no match


const dictioNarray = ["news", "paper", "tele", "phone", "walk", "man", "water", "park"]
const word = "newspaper";

const checkWords = (word,dictionary) => {
  let wordLength = word.length;
  let matchLength = 0;

  //Edge Case
  if(wordLength === 0){
    return console.log("Not a Match");
  }
  //Looping through dictionary and checking substring
  for(let val of dictionary){
    if(word.includes(val)){
      matchLength = matchLength + val.length;
    }
  }
  //Once two dictionary words are substring of the word in question we match length of both  
  if (matchLength === wordLength) {
    return console.log("Match");
  }
  else{
    return console.log("not a match");
  }
}

checkWords(word,dictioNarray);
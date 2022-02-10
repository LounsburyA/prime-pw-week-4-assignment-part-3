console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const maxItems = 5;
let basket = [];
function addItem(item){
  basket.push(item);
  return true;
}
addItem(`chese`)
addItem(`wine`)
addItem(`bread`)
console.log('Item added', addItem(`taco`));
console.log('basket is now contains', basket);

function listItems(){
  for (var i = 0; i < basket.length; i++) {
  (basket[i])
}return basket;
}
 listItems()
 console.log('Items in list: ', listItems());

//for (var i = 0; i < basket.length; i++) {
  //console.log(basket[i])
//}
//just making sure this works

function empty(){
  let basket = []
  return basket;
}
//return 'basket empty';
empty()
console.log('The basket is now empty', empty());


// Stretch
// put const maxItems at Topics

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

//test 1
// function isFull(){
//   if (basket <= maxItems) {
//     return true;
//   } else {
//     return false;
//   }
// }
//test 2
// function isFull(){
//   if (basket <= maxItems) {
//     return true;
//   }
//
// isFull()
// console.log(isFull());

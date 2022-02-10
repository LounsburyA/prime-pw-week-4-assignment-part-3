console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = []
function addItem(item){
  basket.push(item);
  return true;
}
addItem(`chese`)
addItem(`wine`)
addItem(`bread`)
console.log(addItem(`taco`));
console.log(basket);

function listItems(){
  for (var i = 0; i < basket.length; i++) {
  (basket[i])
}return basket;
}
 listItems()
 console.log(listItems());

//for (var i = 0; i < basket.length; i++) {
  //console.log(basket[i])
//}
//just making sure this works

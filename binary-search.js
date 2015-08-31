/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function(array, targetValue){
  var max = array.length - 1;
  var min = 0;
  var guess;
  while (max >= min) {
    // set the guess equal to the average of the max and min, round down.
    guess = Math.floor( (max + min) / 2 );
    if (array[guess] === targetValue){ return guess; }
    else if (array[guess] < targetValue){ min = guess + 1; }
    else { max = guess - 1; }
  }
  return -1; // if nothing is found, return -1
};

var nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

var result = doSearch(nums, 18);
console.log(result);

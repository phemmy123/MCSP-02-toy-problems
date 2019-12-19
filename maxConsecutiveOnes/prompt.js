// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4

function maxConsecutiveOnes(array) {
  let count = 0;
  let result = 0;
  //loop through the array
  for(let i = 0; i < array.length; i++){
    // reset count whenever 0 is found in the array
    if(array[i]=== 0){
      count = 0;
      // if 1 is found increment count and update the result 
    }else if( array[i]=== 1){
        count++;
    }
  }
     return result;
}





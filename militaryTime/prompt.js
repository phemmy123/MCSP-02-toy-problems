// Write a function that takes in a string of the time and returns the time in military format.
// Ex: militaryTime('7:47pm') returns '19:47'

// converting 12 hours to 24 hours program
// input is a single string containing a time in 12-hour
// output Convert and print the given time in 24-hour format
// time zone

function militaryTime(timeStr) {
  // check if last two elements of time is AM and first two elements is 12
  //remove the AM
  // check if last 2 elements of time is PM and first two elements are 12
  // add 12 to hours and remove pm
  // return military time
  var result = '',
  if(timeStr === AM && timeStr === 12){
    return(result('00'))
  }else{
    if(timeStr === 12 && timeStr === PM){
      return(result('12'))
    }
  }
}



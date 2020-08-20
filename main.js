const makeRunOn = function(str){
  // new given str
  let result = '';
// //loop through the given string
for(let i = 0; i < str.length; i++){
//if the string ends with a period, replace it with a comma
  if (str[i]==="." && i!== str.length-1){
    result = result + ","
  }//otherwise leave it alone (the last period)
  else {
    result = result + str[i]
  }
}
return result
}

// const totalScore = function(score){
//   return score + score

// }








if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}

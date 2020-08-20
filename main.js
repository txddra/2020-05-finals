const makeRunOn = function (str) {
  // new str
  let result = '';
  // //loop through the given string
  for (let i = 0; i < str.length; i++) {
    //if the string ends with a period, replace it with a comma
    if (str[i] === "." && i !== str.length - 1) {
      result = result + ","
    }//otherwise leave it alone (the last period)
    else {
      result = result + str[i]
    }
  }
  return result
}

const totalScore = function(scores){
  // new total
  let sum = 0
  //loop through the array of scores
  for (let i = 0; i < scores.length; i++){
 //if multiplier is undefined
    if (scores[i].multiplier === 1 || scores[i].multiplier === undefined){
    sum = sum + scores[i].score

  }// can't figure this one out
  // else if (scores[i].multiplier !== 1){
  //  sum = scores[i].multiplier* scores[i].score
  // }
  else if (scores[i].multiplier > 1)
  {
    sum = sum + (scores[i].score * scores[i].multiplier)
  }

}
  return sum
}
  
// }
// const totalScore = function (array) {
//   //new total
//   let result = 0;
//   //loop through given array
//   for (let i = 0; i < array.length; i++) {

//     if (array[i].multiplier !== 1) {
//       result += array[i];

//     }
//     else if (array[i].multiplier) {


//     }
//   }
//   return result;
// }

const getToBed = function (people){
  //new array
  let nightPeople =[];
  //loop through the array of people
  for(person of people) {
    //if the given person's local time is between 1 am awake/ 4am asleep
    if(person.localTime >= 100 && person.localTime <= 400 && !person.asleep) {
      
    }
  }

  return nightPeople;
}

// const getToBed = function (array){
//   let result = []
//   result = array.slice()
//     for(let i = 0; i < result.length; i++){

//       }
//     }

//   return result
//   }

// const nightOwls = function(people){

//   return people
//}





const findIndices = function (array, callback) {
  //new array
  const newArr = [];
  //a holder for the map of the given array
  let holder = array.map(callback)
  //loop through the holder
  for (let i = 0; i < holder.length; i++) {
    if (holder[i]) {
      //push the indices into the new array if true
      newArr.push(i); 
    }
  }
  return newArr;
}

const Faqtory = function () {
  return {
    questions: [],
    //defaults to 'unanswered'
    addQuestion(str, answered = false) {
      this.questions.push({
        text: str,
        answered: answered,
        id: this.questions.length
      })
    },
    answerQuestion(id, answer){
      //if the question wasn't answered
    if(this.questions[id].answered === false){
//add the text to the answer of the question with
this.questions[id].answer =answer;
this.questions[id].answered = true;
    }
    }

  }
}

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

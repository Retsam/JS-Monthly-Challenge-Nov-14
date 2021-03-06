function QuestionModel (questionObject) { 
var question = {};

// turn every snake_case property into camelCase 
Object.keys(questionObject)
.forEach(veryUppercase);

question.postQuality = ko.computed(veryQuestionScore);
question.link = ko.computed(veryLink);

function veryQuestionScore () { 
if (question.score  > 7 ) {
            rating = 'good'
} else if (question.score  >= 0 ) {
            rating = 'neutral'
} else {
            rating = 'bad'
} 
return rating;
} 

function veryLink () { 
return 'https://stackoverflow.com/q/' + question.questionId;
} 

function veryUppercase (key) { 
var saneKey = key.replace(/_(.)/g, uppercaseKey);
question[saneKey] = questionObject[key] 
} 

function uppercaseKey (match, letter) { 
ret = letter.toUpperCase();
return ret;
} 

console.log(question);
return question;
} 


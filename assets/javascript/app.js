// display directions to user(alert)
// display timer
// display questions
// capture user answer and determine if correct
// when complete display final number of correct and worng ansers
// game restart without refresh

var question = [{
    "question": "What is Sherlock's brothers name?",
    "option1": "Mylock",
    "option2": "Mycroft",
    "option3": "Watson",
    "option4": "Shercroft",
    "answer":"Mycroft",
},
{
    "question": "What was Sherlock's vice when bored and not on a case?",
    "option1": " A tobacco pipe",
    "option2": "Cocaine",
    "option3": "Cigarettes",
    "option4": "Cigars",
    "answer":" A tobacco pipe",

},
{
    "question": "Who was Sherlock's mortal enemy?",
    "option1": "Dr. Watson",
    "option2": "Professor Moriarty",
    "option3": "Mycroft Holmes",
    "option4": "Mrs. Baker",
    "answer":"Professor Moriarty",

},
{
    "question": "Finish the phrase: _____ my dear Watson",
    "option1": "Science",
    "option2": "Trivial",
    "option3": "Elementary",
    "option4": "Easily",
    "answer":"Elementary",

},
{
    "question": "Who are The Baker Street Irregulars?",
    "option1": "A group of Holmes' friends who drop by at odd hours",
    "option2": "A group of street children Holmes uses to solve cases",
    "option3": "A group that consists of anyone who has ever roomed with Holme",
    "option4": "What Holmes calls people who bring him a new case",
    "answer":"A group of street children Holmes uses to solve cases",

},
{
    "question": "Holmes never falls in love - but he does admire one woman. To Holmes who is always the woman?",
    "option1": "Violet Hunter",
    "option2": "Ms Cushing",
    "option3": "Irene Adler",
    "option4": "Mrs. Baker",
    "answer":"Irene Adler",

},
{
    "question": "Where did Holmes and Watson live?",
    "option1": "221B Baker Street",
    "option2": "22B Baker Street",
    "option3": "210B Baker Street",
    "option4": " 22B Bond Street",
    "answer":"221B Baker Street",

},
{
    "question": "What did Dr Watson do before he met Holmes?",
    "option1": "He had a private practice",
    "option2": "Army sergeant",
    "option3": "Naval officer",
    "option4": "Army surgeon",
    "answer":"Army surgeon",

},
{
    "question": "How does Sherlock Holmes greet Dr Watson at their first meeting?",
    "option1": "Your housemaid is sloppy and you've lately been in bad weather.",
    "option2": "I am in need of a good doctor.",
    "option3": " How are you my good Doctor?",
    "option4": "You have been in Afghanistan, I perceive.",
    "answer":"You have been in Afghanistan, I perceive.",

},
]
var currentQuestion = 0;
var score = 0;

var container = document.getElementById('quiz-container');
var questionsEL = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var totQuestions = question.length
var nextButton = document.getElementById('next ');
var resultCont = document.getElementById('result');


function loadQuestion( questionIndex){
var q = questions[questionIndex];
// questionsEL.textContent = (questionIndex + 1 ) = '. ' + q.question;
opt1.textContent = q.option1
opt2.textContent = q.option2
opt3.textContent = q.option3
opt4.textContent = q.option4
};

function loadNextQuestion (){
    var selectedOption = document.querySelector('input [type=radio]: checked')
    if (!selectedOption){
        alert('please selesct you answer')
        return;
    }
var answer = selectedOption.value;
if (questions[currentQuestion].answer == answer){
    score ++;
} 
selectedOption.checked = false;
 currentQuestion ++;
 if (currentQuestion == totQuestions-1){
nextButton.textContent = 'Finish';
}
}

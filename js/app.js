//variables 
let currentQuestion = {};
let acceptAns = false;
let score = 35;
let questionCounter = 0;
let availableQuestions = [];

//questions array
let questions = [
    {
      question: "Who is the strongest avenger",
      choice1: 'Captain America',
      choice2: 'Hulk',
      choice3: 'Thor',
      choice4: 'Captain Marvel',
      answer: 3
    },
    {
      question:
      "Who is the most skilled fighter of the Avengers",
      choice1: 'Black Panther',
      choice2: 'Black Widow',
      choice3: 'Captain America',
      choice4: 'Hawkeye',
      answer: 2
    },
    {
      question: "Who is Ronin",
      choice1: 'Black Widow',
      choice2: 'Hawkeye',
      choice3: 'Task Master',
      choice4: 'TChalla',
      answer: 2
    }

  ];

//document required objects I will need 
//create variable for choice of user
let choices = Array.from($('.choice-text'));
console.log(choices);
let question = $('#question');


//constants for app 
const score_bonus = 10;
const max_questions = 3; 

// functions for application 

function init(){
    questionCounter = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNextQuestion();
}

function getNextQuestion(){
    //condition to check question counter and array 

    // update question
    questionCounter++;

    //hud update text
    $('#questionCounter').html(questionCounter+ "/" + max_questions)

    //random question picker
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    $('#question').html(currentQuestion.question);

    //loop thru choices dataset number
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    //remove question from array
    availableQuestions.splice(questionIndex, 1);

    //accept anwer update
    acceptAns = true;
}

function incrementScore(num){
    score += num;
    $('#score').html(score); 
};


$(init());
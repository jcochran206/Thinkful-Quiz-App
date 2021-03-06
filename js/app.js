//variables 
let currentQuestion = {};
let acceptAns = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const mostRecentScore = localStorage.getItem('mostRecentScore');

//questions array
let questions = [
    {
      question: "Who is the strongest avenger?",
      choice1: 'Captain America',
      choice2: 'Hulk',
      choice3: 'Thor',
      choice4: 'Captain Marvel',
      answer: 3
    },

    {
      question:
      "Who is the most skilled fighter of the Avengers?",
      choice1: 'Black Panther',
      choice2: 'Black Widow',
      choice3: 'Captain America',
      choice4: 'Hawkeye',
      answer: 2
    },

    {
      question: "Who is Ronin?",
      choice1: 'Black Widow',
      choice2: 'Hawkeye',
      choice3: 'Task Master',
      choice4: 'TChalla',
      answer: 2
    },

    {
        question: "Who is the smartest Avenger?",
        choice1: 'Shuri',
        choice2: 'Tony Stark',
        choice3: 'Bruce Banner',
        choice4: 'Nick Fury',
        answer: 2
    },

    {
        question: "Who is the Tactical Leader of the Avengers?",
        choice1: 'Captain America',
        choice2: 'Nick Fury',
        choice3: 'Iron Man',
        choice4: 'Falcon',
        answer: 1
    }

  ];

//document required objects I will need 
//create variable for choice of user
let choices = Array.from($('.choice-text'));
//console.log(choices);
let question = $('#question');
// display correct answer
let correctDisplay = $('.choice-correct');
let wrongDisplay = $('.choice-wrong');



//constants for app 
const score_bonus = 10;
const max_questions = questions.length; 

// functions for application 
function start(){
    $('#home').on('click', function(e){
        e.preventDefault();
        return window.location.assign("game.html");
    });
    //console.log('hit submit to start');
}

function init(){
    questionCounter = 0;
    availableQuestions = [...questions];
    //console.log(availableQuestions);
    start();
    getNextQuestion();
    correctDisplay.hide();
    wrongDisplay.hide();
    endGame();
    
}

function getNextQuestion(){
    //condition to check question counter and array 
    if(availableQuestions === 0 || questionCounter >= max_questions){
        
        //conditional to go to finalscore page
        //use local storage to store score 
        localStorage.setItem('mostRecentScore', score);
        // goes to end game page 
        return window.location.assign('end.html');
    }
    // update question
    questionCounter++;

    //hud update question text
    $('#questionCounter').html(questionCounter + " of " + max_questions)

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

    //remove inputs by user
    reset();
};


$('#game').on('submit', function(e){
    e.preventDefault();
    
         
        if(!acceptAns) return;

        const selectedChoice = $("input[type='radio']:checked").val();
        const selectedAnswer = selectedChoice;

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct'){
                   incrementScore(score_bonus);
                   setTimeout(() => {
                    correctDisplay.show().addClass(classToApply);
                    wrongDisplay.hide();
                   }, 500);

               }else{
                   $('.choice-text').removeClass(classToApply);
                   wrongDisplay.show().addClass(classToApply);
                   correctDisplay.hide();
               }
        


       getNextQuestion();

});

function incrementScore(num){
    score += num;
    $('#score').html(score); 
};

function reset(){
    $('input[type="radio"]').prop('checked', false);
}


function endGame(){
    $('#end').on('click', function(e){
        e.preventDefault();
        return window.location.assign("index.html");

        acceptAns = false;
    });

    $('#finalScore').html(mostRecentScore);

    //console.log('hit end of game');
}

$(init());

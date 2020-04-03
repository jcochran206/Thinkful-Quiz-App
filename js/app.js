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
    }

  ];

//document required objects I will need 
//create variable for choice of user
let choices = Array.from($('.choice-text'));
//console.log(choices);
let question = $('#question');


//constants for app 
const score_bonus = 10;
const max_questions = questions.length; 

// functions for application 
function start(){
    $('#home').on('click', function(e){
        e.preventDefault();
        return window.location.assign("game.html");
    });
    console.log('hit submit to start');
}

function init(){
    questionCounter = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNextQuestion();
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
};

//choices loop thru with a listener for licks to choose 
// player choice will then apply a class to dom dymanically
choices.forEach( choice => {
    choice.addEventListener('click', e => {
        
        if(!acceptAns) return;
        console.log(e.target);

        acceptAns = false;
        const selectedChoice = e.target; 
        const selectedAnswer = selectedChoice.dataset['number'];

        //apply class (tenary)
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //update score if correct
        if(classToApply === 'correct'){
            incrementScore(score_bonus);
        }

        //apply class to choice of player 
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(function(){
            selectedChoice.parentElement.classList.remove(classToApply);
            getNextQuestion();

        }, 1500);

        console.log(selectedAnswer == currentQuestion.answer);
    });

});

function incrementScore(num){
    score += num;
    $('#score').html(score); 
};

function endGame(){
    $('#end').on('click', function(e){
        e.preventDefault();
        return window.location.assign("index.html");
    });

    $('#finalScore').html(mostRecentScore);

    console.log('hit end of game');
}

$(init());
$(endGame());
$(start());
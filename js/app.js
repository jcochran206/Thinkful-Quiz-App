const Store = [
{
    question: "Who is the strongest avenger", 
    questionChoices: ['Captain America','Hulk','Thor'],
    correctAnswer: 'Thor',

},

{
    question: "Who is the most skilled fighter of the Avengers", 
    questionChoices:['Black Panther','Black Widow','Captain America'],
    correctAnswer: 'Black Widow',

},

{
    question: "Who is Ronin", 
    questionChoices:[ 'Black Widow','Hawkeye','Task Master'],
    correctAnswer: 'Hawkeye'

},

{
    question: "Who is the tactical leader of the avengers", 
    questionChoices: [ 'Captin America','Tony Stark','Nick Fury'],
    correctAnswer: 'Captain America'

},

{
    question: "Who is the smartest avenger", 
    questionChoices: ['Shuri','Bruce Banner','Tony Stark'],
    correctAnswer: 'Tony Stark'

},

];

let score = 0;
let questionNumber = 0;

//initialize quiz
function init(){
    $('#start').on('click', function(){
        $('#start').hide();
        $("#questions").show();
        $('.correct').hide();
        $('.wrong').hide();
        $('#score').hide();
        renderQuestions()
        console.log('started quiz');
    })


    $('#quiz').on('submit', function(event){
        event.preventDefault();

        $('#start').hide();
        $("#questions").hide();
        $('.correct').show();
        $('.wrong').hide();
        $('#score').hide();
        checkAns()
        console.log('submitted ans to question');
    })

    $('.ans-feedback').on('click', function(){
        $('#start').hide();
        $("#questions").hide();
        $('.correct').hide();
        $('.wrong').hide();
        $('#score').show();
        renderQuestions()
        nextQuestion()
        console.log('submitted time to get total');
    })

    $('#reset').on('click', function(){
        $('#start').show();
        $("#questions").hide();
        $('.correct').hide();
        $('.wrong').hide();
        $('#score').hide();
        resetQuiz()
        console.log('go to beginning');
    })

}

//this functions loads the questions into the question page
function renderQuestions() {
    console.log('inside render question');

}

//this function handles when the user clicks the submit
function checkAns() {
    console.log('inside check answer');
    nextQuestion()
}

//listen to the click on next btn if answer is correct 
    // user is taken to next question 
function nextQuestion(){
    console.log('inside next question');
}

// func will see if ans is correct and then update score
function updateScore(){
    console.log('inside update score');
}


//this will reset the score of the app and takes user to the beginning
function resetQuiz(){
    
}

$(init());



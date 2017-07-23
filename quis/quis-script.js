var currentQuestion = 0; 
var score =0; 
var totQuestions = questions.length; 
var container = document.getElementById('quizContainer'); 
var questionEl = document.getElementById('question'); 
var opt1 = document.getElementById('opt1'); 
var opt2 = document.getElementById('opt2'); 
var opt3 = document.getElementById('opt3'); 
var opt4 = document.getElementById('opt4'); 
var nextButton = document.getElementById('nextButton'); 
var backButton = document.getElementById('backButton'); 
var resultCont = document.getElementById('result'); 

function loadQuestion (questionindex){ 
	var q = questions[questionindex]; 
	questionEl.textContent = (questionindex + 1) + '. ' + q.question; 
	opt1.textContent = q.option1; 
	opt2.textContent = q.option2; 
	opt3.textContent = q.option3; 
	opt4.textContent = q.option4; 
} 
/*
function loadBackQuestion() { 
	history.back();

} 
*/

function loadNextQuestion () { 
	var selectedOption = document.querySelector('input[type=radio]:checked'); 
	if(!selectedOption){ alert('SILAHKAN JAWAB PERTANYAANNYA !!'); 
	return; 

} 
var answer = selectedOption.value; 
if(questions[currentQuestion].answer == answer){ 
	score += 20; 
} 
selectedOption.checked = false; 
currentQuestion++; 
if(currentQuestion == totQuestions - 1) { 
	nextButton.textContent = 'SELESAI'; 
} 
if(currentQuestion == totQuestions){ 
	container.style.display = 'none'; 
	resultCont.style.display = ''; 
	resultCont.textContent = 'NILAI KAMU = ' + score; 
	return; 
} 
loadQuestion(currentQuestion); 
} 
loadQuestion(currentQuestion); 

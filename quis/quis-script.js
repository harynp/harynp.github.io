
//deskripsi variabel
var currentQuestion = 0;  //SIMPAN VAR currentQuestion
var score =0; 				//SIMPAN VAR score = 0
var totQuestions = questions.length; //SIMPAN VAR totQuestions 
var container = document.getElementById('quizContainer'); //SIMPAN VAR container yang berisikan data document pada id = quizContainer
var questionEl = document.getElementById('question'); //SIMPAN VAR container yang berisikan data document pada id = question
var opt1 = document.getElementById('opt1'); //SIMPAN VAR container yang berisikan data document pada label dengan id = opt1
var opt2 = document.getElementById('opt2'); //SIMPAN VAR container yang berisikan data document pada label dengan id = opt2
var opt3 = document.getElementById('opt3'); //SIMPAN VAR container yang berisikan data document pada label dengan id = opt3
var opt4 = document.getElementById('opt4'); //SIMPAN VAR container yang berisikan data document pada label dengan id = opt4
var nextButton = document.getElementById('nextButton'); //SIMPAN VAR container yang berisikan data document pada id = nextButton
var resultCont = document.getElementById('result'); //SIMPAN VAR container yang berisikan data document pada id = result

//membuat tammpilan kuisnya
function loadQuestion (questionindex){ 			//membuat fungsi loanQuestion berdasarkan questionindex array
	var q = questions[questionindex]; 			//SIMPAN VAR q = questions[questionindex] pada question.js yang berisikan data pertanyaannya
	questionEl.textContent = (questionindex + 1) + '. ' + q.question; 
	opt1.textContent = q.option1; //opt1 diambil pada question.js yang berisikan option1
	opt2.textContent = q.option2; //opt2 diambil pada question.js yang berisikan option1
	opt3.textContent = q.option3; //opt3 diambil pada question.js yang berisikan option1
	opt4.textContent = q.option4; //opt4 diambil pada question.js yang berisikan option1
} 
//membuat fungsi radio pada jawaban dan memberikan fungsi alert untuk pengisian jawabannya
function loadNextQuestion () { 							//membuat fungsi loadNextQuestion 
	var selectedOption = document.querySelector('input[type=radio]:checked'); //SIMPAN VAR selectedOption berisikan query selector untuk memberikan inputan radio
	if(!selectedOption){ alert('SILAHKAN JAWAB PERTANYAANNYA !!');  //JIKA selectedOption tidak disi maka akan muncul alert SILAHKAN JAWAB PERTANYAANNYA !!!
	return; //kembali

} 
//mengecheck hasil pertanyaan dan jawaban dan memberikan value 20
var answer = selectedOption.value;  // TAMPUNG semua pertanyaannya kita di var answer 
if(questions[currentQuestion].answer == answer){ //JIKA pertanyaan benar dengan jawaban kita
	score += 20; 	// MAKA score akan bertambah sebesar 20
} 
selectedOption.checked = false; //kalo salah maka check berisikan false
currentQuestion++;  //currentQuestion bertambah
//membuat tombol finish diakhir pertanyaan
if(currentQuestion == totQuestions - 1) { //JIKA PERTANYAAN SAMA DENGAN JUMLAH AKHIR PERTANYAAN
	nextButton.textContent = 'SELESAI'; //MAKA BUTTON AKAN BERISIKAN SELESAI
} 
//membuat hasil score tampilan akhir
if(currentQuestion == totQuestions){ //JIKA PERTANYAAN SAMA DENGAN JUMLAH PERTANYAAN
	container.style.display = 'none'; //STYLE DIDESIGN NONE
	resultCont.style.display = ''; 
	resultCont.textContent = 'NILAI KAMU = ' + score; //MENCETAK HASIL SCORE SEMENTARA
	return; 
} 
//tampilin quis di html
loadQuestion(currentQuestion); //MENAMPILKAN PERTANYAAN
} 
loadQuestion(currentQuestion); //MENAMPILKAN PERTANYAAN

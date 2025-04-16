let score = 0;
let time = 10;
let timer;
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const submitButton = document.getElementById('submit');

function generateQuestion() {
    const num1 = Math.floor(Math.random() * (score + 1) * 10);
    const num2 = Math.floor(Math.random() * (score + 1) * 10);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = eval(question);
    return { question, answer };
}

function startGame() {
    time = 10;
    score = 0;
    scoreEl.textContent = score;
    generateNewQuestion();
    timer = setInterval(() => {
        time--;
        timeEl.textContent = time;
        if (time === 0) {
            clearInterval(timer);
            feedbackEl.textContent = 'Tempo esgotado!';
            feedbackEl.classList.remove('correct', 'incorrect');
            feedbackEl.classList.add('incorrect');
            submitButton.disabled = true;
        }
    }, 1000);
}

function generateNewQuestion() {
    const { question, answer } = generateQuestion();
    questionEl.textContent = question;
    questionEl.dataset.answer = answer;
    feedbackEl.textContent = '';
    answerEl.value = '';
    answerEl.focus();
}

submitButton.addEventListener('click', () => {
    const userAnswer = parseInt(answerEl.value, 10);
    const correctAnswer = parseInt(questionEl.dataset.answer, 10);
    if (userAnswer === correctAnswer) {
        score++;
        time = 10;
        feedbackEl.textContent = 'Correto!';
        feedbackEl.classList.remove('incorrect');
        feedbackEl.classList.add('correct');
        generateNewQuestion();
    } else {
        feedbackEl.textContent = 'Errado!';
        feedbackEl.classList.remove('correct');
        feedbackEl.classList.add('incorrect');
    }
    scoreEl.textContent = score;
});

window.onload = startGame;

const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const showError = () => {
    if(input.value === "") {
        error.textContent = "Musisz zadać jakieś pytanie!"
    } else if(input.value.slice(-1) !== "?") {
error.textContent = "Pytanie musi być zakończone znakiem '?'"
    }
};

const showAnswer = () => {
	const answers = [
		'It is certain.',
		'Yes definitely',
		'As I see it, yes',
		'Yes',
		'Ask again later',
		'Better not tell you now.',
		'Cannot predict now',
		"Don't count on it.",
		'Very doubtful.',
	];

    let randomAnswer;

    const generateAns = (max) => {
        return Math.floor(Math.random() * max)
    }
    randomAnswer = answers[generateAns(answers.length)];
    answer.textContent = randomAnswer;
};

const checkInput = () => {
	ball.classList.remove('shake-animation');
	if (input.value === '' || input.value.slice(-1) !== '?') {
		showError();
	} else {
		showAnswer();
	}
};

const ballAnimation = () => {
    answer.textContent = '';
    error.textContent = '';
	ball.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
};

ball.addEventListener('click', ballAnimation);

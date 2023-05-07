const ball = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [
	'To pewne.',
	'Zdecydowanie tak.',
	'Bez wątpienia.',
	'Zdecydowanie tak.',
	'Możesz na tym polegać.',
	'Jak ja to widzę, tak.',
	'Najprawdopodobniej.',
	'Perspektywy dobre.',
	'Tak.',
	'Znaki wskazują na tak.',
	'Odpowiedź mglista, spróbuj ponownie.',
	'Zapytaj ponownie później.',
	'Lepiej ci teraz nie mówić.',
	'Nie można teraz przewidzieć.',
	'Skoncentruj się i zapytaj ponownie.',
	'Nie licz na to.',
	'Moja odpowiedź brzmi: nie.',
	'Moje źródła twierdzą, że nie.',
	'Perspektywy nie tak dobre.',
	'Bardzo wątpliwe',
];

const shakeBall = () => {
	error.textContent = '';
	answer.textContent = '';

	ball.classList.add('shake-animation');
	setTimeout(getAnswer, 1000);
};

const getAnswer = () => {
	ball.classList.remove('shake-animation');
	if (question.value === '' || question.value === '?') {
		error.textContent = 'Musisz zadać pytanie';
	} else if (question.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie kończy się znakiem "?"';
	} else {
		const number = (Math.floor(Math.random(answersArr.length) * answersArr.length));
		answer.textContent = answersArr[number];
	}
};

ball.addEventListener('click', shakeBall);

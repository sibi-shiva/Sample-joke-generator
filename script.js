const jokeText = document.querySelector('.joke-text');
const a = document.querySelector('#tweet-quote');
const loader = document.getElementById('loader');

async function getJoke() {
	jokeText.innerHTML = '';
	const response = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json',
		},
	});
	const joke = await response.json();
	console.log(joke, 'res');
	jokeText.innerHTML = joke.joke;
}

a.addEventListener('click', () => {
	a.setAttribute(
		'href',
		'https://twitter.com/intent/tweet?hashtags=dadJokes&text=' +
			jokeText.innerText +
			'.'
	);
});
document.addEventListener('DOMContentLoaded', getJoke());

import React from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import allWords from '../assets/words.json'

const Home = () => {
	var words5 = [];
	allWords.words.map((word, i) => {
		if (word.length === 5) {
			words5.push(word)
		}
	})
	const randomWord = Math.floor(Math.random() * words5.length);
	return (
		<div className="App">
			<Header />
			<Content wordToPlay={words5[randomWord]} />
		</div>
	);
}

export default Home;

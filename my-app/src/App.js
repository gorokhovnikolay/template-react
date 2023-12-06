import logo from './logo.svg';
import './App.css';

// App.js имеет декларативный стиль. Императивного стиля не нашел

export const App = () => {
	const data = new Date();
	const nowYear = data.getFullYear();
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span>{nowYear}</span>
			</header>
		</div>
	);
};

import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

// App.js имеет декларативный стиль. Императивного стиля не нашел

export const App = () => {
	const data = new Date();
	const nowYear = data.getFullYear();

	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', {
				src: logo,
				className: 'App-logo',
				alt: 'logo',
			}),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					lassName: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('span', null, nowYear),
		),
	);
};

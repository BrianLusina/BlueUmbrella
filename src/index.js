import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/styles.css';
import './styles/weather_card.css';

// entry point of application
render(<App />, document.getElementById("app"), () => console.timeEnd('anga-app'))

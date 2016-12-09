import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './styles/styles.css'

render(<App />, document.getElementById("app"), () => console.timeEnd('anga-app'))

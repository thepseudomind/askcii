import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Home from './pages/home/home';

const App = ()=>(<Home/>);

ReactDOM.render(<App/>, document.getElementById('app'));
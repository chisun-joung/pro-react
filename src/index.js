import React from 'react';
import ReactDOM from 'react-dom';
import App, {GroceryList} from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<GroceryList />, document.getElementById('root'));
registerServiceWorker();

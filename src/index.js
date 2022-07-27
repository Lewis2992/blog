import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './style/sass/main.scss';
import reducers from './reducers';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducers, applyMiddleware(thunk));

root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);
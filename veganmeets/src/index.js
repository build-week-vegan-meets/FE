import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
=======
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {signup as signupReducer, login as loginReducer} from './reducer/index';
>>>>>>> 4bcfe64ee1217d1ef2bb45f405c572b6b90aa98d
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));
=======
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    signup: signupReducer,
    login: loginReducer,
}), composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
 <Provider store={store}> 
<Router>
 <App store={store} />
</Router>
</Provider>
, document.getElementById('root'));
>>>>>>> 4bcfe64ee1217d1ef2bb45f405c572b6b90aa98d

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
// imported Login.css for Login.js
import './Components/login.css';
// imported signup.css for signup.js
import './Components/signup.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCoffe} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free-solid'
import { Login } from './Components/Login';

ReactDOM.render(

  <App />,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Boostrap Libs
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//SB Admin 2 style
import './assets/css/sb-admin-2.css';

ReactDOM.render(<App />, document.getElementById('root'));
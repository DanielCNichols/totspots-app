import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { VenuesProvider } from './VenuesContext'
import 'font-awesome/css/font-awesome.min.css'; 



ReactDOM.render(
	<BrowserRouter>
		<VenuesProvider>
				<App />
		</VenuesProvider>
	</BrowserRouter>, 
	document.getElementById('root'));


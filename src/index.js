import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { VenuesProvider } from './VenuesContext'


ReactDOM.render(
	<BrowserRouter>
		<VenuesProvider>
				<App />
		</VenuesProvider>
	</BrowserRouter>, 
	document.getElementById('root'));


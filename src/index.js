import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { VenuesProvider } from './VenuesContext'
import {ReviewProvider} from './ReviewContext'


ReactDOM.render(
	<BrowserRouter>
		<VenuesProvider>
		 <ReviewProvider>
				<App />
		 </ReviewProvider>
		</VenuesProvider>
	</BrowserRouter>, 
	document.getElementById('root'));


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

{/* [INICIO] COMPONENTS */}
import Main from './../containers/main/main';
{/* [FIN] COMPONENTS */}

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './../configureStore';

const store = ConfigureStore();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<div className="App">
						<Main />
					</div>
				</HashRouter>
			</Provider>
		);
	}
}
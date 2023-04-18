import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import '../styles/global.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
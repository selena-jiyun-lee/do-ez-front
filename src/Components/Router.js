/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from 'Routes/Home';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Redirect from="*" to="/" />
		</Switch>
		<Footer />
	</Router>
);

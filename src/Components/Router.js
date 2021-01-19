/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import Footer from 'Components/Footer';

import Home from 'Routes/Home';
import Post from 'Routes/Post';
import Write from 'Routes/Write';

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/post/:id" exact component={Post} />
			<Route path="/write" exact component={Write} />
			<Redirect from="*" to="/" />
		</Switch>
		<Footer />
	</Router>
);

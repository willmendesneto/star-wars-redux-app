import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import StarWarsWrapper from './containers/StarWarsWrapper';
import StarWarsDetailsWrapper from './containers/StarWarsDetailsWrapper';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={StarWarsWrapper} />
		<Route path="/details/:personId" component={StarWarsDetailsWrapper} />
		<Route path="*" component={StarWarsWrapper} />
	</Route>
);

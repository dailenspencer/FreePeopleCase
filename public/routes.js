import React from 'react'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'


import App from './src/components/App'
import Home from './src/components/Home'
import Checkout from './src/components/Checkout/Checkout';
import hashHistory  from 'react-router'

export default (
	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home}/>
  			<Route path="/Checkout" component={Checkout}/>
  		</Route>
    </Router>
)
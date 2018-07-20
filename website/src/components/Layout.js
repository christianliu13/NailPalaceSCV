import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Router from './Router';



export default class Layout extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Nav />
				<Router />
				<Footer />
			</div>
			);
	}
}
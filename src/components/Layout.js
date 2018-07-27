import React from 'react';
import Header from './Header/Header';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';
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
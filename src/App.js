/** @format */

import React, { Component } from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Committees from './pages/Committees';
import Category from './pages/Category';
import ConDet from './pages/ConDet';
import DetComm from './pages/DetComm.js';
import Home from './pages/Home';
import Sec from './pages/Secretariat/EB';
import Resources from './pages/Resources';
import About from './pages/About';
import PropTypes from 'prop-types';

export class App extends Component {
	state = {
		drop: false,
		height: '5',
		committeename: '',
		hoverImage: false,
	};

	static propTypes = {
		dropDown: PropTypes.func,
		dropOver: PropTypes.func,
		dropbool: PropTypes.func,
	};

	dropDown = (bool) => {
		if (bool) {
			this.setState({ drop: true });
		} else {
			this.setState({ drop: false });
		}
	};

	height = (h) => {
		this.setState({ height: h });
	};

	name = (n) => {
		this.setState({ committeename: n });
	};

	render() {
		return (
			<BrowserRouter>
				<div>
					<div>
						<Switch>
							<Route
								exact
								path='/'
								component={() => (
									<Home
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/committees'
								render={(props) => (
									<Committees
										{...props}
										dropDown={this.dropDown}
										commStuff={this.state.commStuff}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/conference-details'
								render={() => (
									<ConDet
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/executive-board'
								render={() => (
									<Sec
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/resources'
								component={Resources}
							/>
							<Route
								exact
								path='/about-us'
								render={(props) => (
									<About
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/committees/:category'
								render={(props) => (
									<Category
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
							<Route
								exact
								path='/:committee'
								render={(props) => (
									<DetComm
										{...props}
										dropDown={this.dropDown}
										drop={this.state.drop}
										height={this.height}
										name={this.name}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

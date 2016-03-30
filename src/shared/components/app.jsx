import React from "react";
import {Link} from "react-router";

let styles = {
	color: "white",
	backgroundColor: "red",
	minHeight: 100
};

class App extends React.Component {
	render() {
		//console.log(this.props.children);
		return (
			<div>
				<div style={styles}>
					<h1> React template with Webpack, react-router and react-hot-loader </h1>
				</div>

				{/*Rendu des composants des routes enfants*/}
				{this.props.children}

				<div>
					<Link to="/">Go back</Link>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.element.isRequired
};

//render par défaut sans react-router:
//render(<App/>, document.getElementById("app"));

export default App;

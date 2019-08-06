import React from 'react';
import 'whatwg-fetch';

class Login extends React.Component {
	constructor(props) {
	  super(props);
	}

	handleClick(event) {
		window.location ='https://github.com/login/oauth/authorize?client_id=e08ae3c85ac84e4379aa';

	}
	render() {
		return(
	        	<input type='submit' value='Sign In with GitHub' onClick={this.handleClick}/>
		);
	}
}

export default Login;

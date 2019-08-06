import React from 'react';
import 'whatwg-fetch';

/*

const Login = () => <>
	 <a href="https://github.com/login/oauth/authorize?client_id=e08ae3c85ac84e4379aa"> Sign In with github</a>
</>

*/

class Login extends React.Component {
	constructor(props) {
	  super(props);
	}

	handleClick(event) {
		console.log('Event :', event);
		fetch('https://github.com/login/oauth/authorize?client_id=e08ae3c85ac84e4379aa')
		.then(res=>res.json())
		.then(data=>console.log(data));
	}
	render() {
		return(
			<>

	 			<a href="https://github.com/login/oauth/authorize?client_id=e08ae3c85ac84e4379aa"> Sign In with github</a>
			<input type='submit' value='Sign In with GitHub' onClick={this.handleClick}/>
			</>
		);
	}
}

export default Login;

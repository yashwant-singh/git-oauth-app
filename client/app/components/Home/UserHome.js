import React from 'react';

class UserHome extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);	
		this.state = {
			loading: true,
			code: '',
			auth_key:'',
			profile: '',
			history: '',
			search_text:''
		};
	}

	componentDidMount() {
		const code = this.props.location.search.split('?')[1].split('=')[1];
		const url = 'http://127.0.0.1:8080/fetch_access_token?code='+ code;
		fetch(url)
		.then(resp=>resp.json())
		.then(data=>{
		   this.setState({'auth_key': data})
		   const profileUrl = 'http://127.0.0.1:8080/fetch_profile?access_token='+ data.access_token;
		   fetch(profileUrl)
		   .then(resp=>resp.json())
		   .then(data=>{
			this.setState({'profile': data});
		   });
		
		});
		this.setState({
			code: code,
			loading: false
		});
	}
	handleSearch(event) {
		if(this.state.search_text) {

			fetch('https://api.github.com/search/users?q='+ this.state.search_text)
			.then(resp=>resp.json())
			.then(data=>{
				this.setState({'history': data.items});
			})
		}else {
			alert('Search box is empty');
		}
	}
	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]:value});
	}
	render() {
		const { loading, code, auth_key, profile, history } = this.state;

		if(!profile) {
			return(<p>Profile Details :
				Loading...	
				</p>
			  )
		}
		return (
			<div>
			   <div>
			       Profile Details :<br/>
			       Name : {profile.name}<br/>
			       UserID: {profile.login}<br/>	
			       E-mail : {profile.email}<br/>
			       Blog: {profile.blog}
		          </div>
			  <hr />
			  <div>
			  	<input type='text' name='search_text' value={this.state.search_text} onChange={this.handleChange}/>
				<button name='SearchUser' onClick={this.handleSearch}>Search User</button>
			  </div>
			  <hr />
			  <div>
				Search History :<br />
				{JSON.stringify(history)}
			  </div>
			</div>
		);
	}
}

//const UserHome = () => (
//  <p>User Home</p>
//);

export default UserHome;

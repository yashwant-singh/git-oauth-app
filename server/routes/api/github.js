const request = require('superagent');
module.exports = app => {
    app.get('/user/home', (req, res, next)=>{
        const { query } = req;
        const { code } = query;
	console.log("Code :", code);
        if(!code) {
            return res.send({success: false, message: 'Error no code'});
        }

    // POST
    request
    .post('https://github.com/login/oauth/access_token')
    .send({
        client_id: 'e08ae3c85ac84e4379aa',
        client_secret: 'e55bbce0d31af0d1213bd18a4adb8f33a0d6cef8',
        code: code, 
    })
    .set('Accept', 'application/json')
    .then(result => {
        const data = result.body;
        res.send(data);
    });
    });

    app.get('/searchUser', (req, res, next) => {
    	request
	.get('https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000')
	.then(function(result){
		const data = result.body;
		console.log('Data :', data);
		res.send(data);
	});
    });

    app.get('/userDetails', (req, res, next) => {
    	const accessToken = 'f08a5a98088866ba24f222c8fd6b1a17fee9cca2';

	request
	.get('https://api.github.com/users/yashwant-singh')
	//.get('https://api.github.com/user')
	// .set('Authorization', 'token ', + accessToken)
	 .then(function(result)	{
		 console.log('result :', result);
	      // res.send(result.body);
	 });
    });

   
 };

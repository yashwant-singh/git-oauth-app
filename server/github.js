const request = require('superagent');
module.exports = app => {
    app.get('signin/callback', (req, res, next)=>{
        const { query } = req;
        const code = query;
        if(!code) {
            return res.send({success: false, message: 'Error no code'});
        }
    });

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
        result.send(data);
    });
}
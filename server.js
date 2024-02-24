const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say',(req,res)=>{
	let result = req.query.keyword;
	axios.get('https://yy7j4dcdm3tmd5zlnubghbyqzm0hibia.lambda-url.us-east-2.on.aws/',{
		params: {
			'keyword': result
		}
	})
	.then(answer => res.status(200).send(answer.data))
	.catch(err => {
		res.status(500).send(err.message);
	});
});

app.listen(port,() => {
	console.log(`API listening at http://198.211.105.38:${port}`);
});

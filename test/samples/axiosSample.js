const axios = require('axios')
axios.get('https://www.google.com.au')
	 .then(response => console.log(response))
	 .catch(err => console.log(err))
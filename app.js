const express= require('express')
const saveData = require('./testJson')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
	//Test for the root call
	//res.send('Hello World!')
	console.log('Connected to user');
	res.render('index', saveData.testJson());
})

app.post('/', function(req, res) {
	console.log('Post achieved');
	res.render('index', {"message": "potato"})
})


app.listen(8080, function() { 
	console.log('TestNode Server is listening on Port: 8080')
});
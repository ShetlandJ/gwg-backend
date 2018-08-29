var express = require("express");
var app = express();
var path = require("path");
var parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

const cors = require('cors')

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));



app.get('/', (req, res) => res.send('Hello World!'))

app.post('/donate', function(req,res){
  console.log('########################')
  console.log(req.body);
  console.log('########################')
  res.status(200).json({
      message: 'Success!'
  });});

app.listen(process.env.PORT || 5000, function() {
	console.log('listening on ' + this.address().port);
});

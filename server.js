const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())


app.get('/', function(request, response){
 response.send("Welcome to")})

app.get('/java', function(request, response){
  response.send("About to java...........")})

app.get('/python', function(request, response){
    response.status(200).json({"about": "python"})
})

app.post('/validate-user',function(request,response){
  response.status(200).json({"status": "req received"})
})

app.listen(2000,function() {
console.log('server listening on');
});
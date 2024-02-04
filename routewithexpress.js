const express =  require('express')
const app = express()

app.get('/', function(req,res){
	res.send('hellom');
});

app.listen(3000,()=>{
 console.log('server started');
});
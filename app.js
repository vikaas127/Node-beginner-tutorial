const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// app.use(bodyParser.json());

const conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'nodecrud',
})

conn.connect((err)	=>{
	if(err) throw err;
	console.log('Mysql connected with App');
})

let params = {
	name:'Todo 1',
	description:'Todo 1 Description'
}

// conn.query("SELECT * from todos",
// 	function(error, results, fields){
// 		if(error) throw error;
// 		//console.log('Record inserted');
// 		console.log(JSON.stringify(results))
// 	}
// );

// conn.query("UPDATE `todos` SET `name`=?,`description`=? where `id`=?",
// 	[params.name, params.description,2],
// 	function(error,results,fields){
// 		if(error) throw error;
// 		console.log("Record Updated");
// 	});
app.get('/api/items',(req,res)=>{
	let sqlQuery = "SELECT * FROM todos";


	let query = conn.query(sqlQuery,(err,results) => {
		if(err) throw err;
		res.send((results));
	})
});

app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});
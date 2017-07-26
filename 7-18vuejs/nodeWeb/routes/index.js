var express = require('express');
var router = express.Router();
var url = require('url')
var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	database :'test'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/selectAll', function(req, res, next) {
	res.charset = 'utf-8';
	var sql = 'select * from note';
	con.query(sql,function(err,results){
		if(!err){
			res.json(results);
		}
	});
});
router.post('/insertNote', function(req, res, next) {
	
	/*var obj = url.parse(req.url).query;
	var note = obj.split('&');
	var arr = [];
	var json = {}
	for(var i = 0;i<note.length;i++){
		arr=note[i].split('=');
		json[arr[0]] = arr[1];
	}*/
	var json = req.body;
	var title = json.title;
	var content = json.content;
	var time = json.time;
	var sql = `insert into note (title,content,time) values ('${title}','${content}','${time}')`;
	con.query(sql,function(err,results){
		if(!err){
			res.json({err:0,msg:'添加成功'});
		}
	});
});
router.get('/delNote', function(req, res, next) {
	var obj = url.parse(req.url).query;
	var note = obj.split('=');
	var json = {}
	for(var i = 0;i<note.length;i++){
		json[note[0]] = note[1];
	}
	var id = json.id;
	var sql = `delete from note where id = ${id}`;
	console.log(sql);
	con.query(sql,function(err,results){
		if(!err){
			res.json({err:0,msg:'删除成功'});
		}
	});
});
router.post('/updateNote', function(req, res, next) {
	/*var obj = url.parse(req.url).query;
	var note = obj.split('&');
	var arr = [];
	var json = {}
	for(var i = 0;i<note.length;i++){
		arr=note[i].split('=');
		json[arr[0]] = arr[1];
	}*/
	var json = req.body;
	var id = json.id;
	var title = json.title;
	var content = json.content;
	var updateTime = json.updateTime;
	//var sql = `insert into note (title,content,time) values ('${title}','${content}','${updateTime}')`;
	var sql = `update note set title='${title}',content = '${content}',updateTime ='${updateTime}' where id=${id}`
	console.log(sql);
	con.query(sql,function(err,results){
		if(!err){
			res.json({err:0,msg:'修改成功'});
		}
	});
});
module.exports = router;

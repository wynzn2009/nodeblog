var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
//module.exports = router;
module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index',{title:'home'});
	});
	app.get('/reg',function(req,res){
		res.render('reg',{title:'register'});
	});
	app.post('/reg',function(req,res){
	});
	app.get('/login',function(req,res){
		res.render('login',{title:'login'});
	});
	app.post('/login',function(req,res){
	});
	app.get('/post',function(req,res){
		res.render('post',{title:'post'});
	});
	app.post('/post',function(req,res){
	});
	app.get('/logout',function(req,res){
	});
};
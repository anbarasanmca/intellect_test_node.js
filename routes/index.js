var q = require('q');
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/servertime', function (req, res) {
	datenow = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
	res.send(datenow);
	res.end();
	return false;
});

// Create new user
router.post('/users', function(req, res){
	var users = require('../modules/users');
	q.all([users.users(config.mysql,req, res)]).then(function(results){
		res.json({"userStatus":req.body});
	});
});

// Update user Details
router.post('/users_Update', function(req, res){
	var users = require('../modules/users');
	q.all([users.users_update(config.mysql,req, res)]).then(function(results){
		res.json({"userStatus":req.body});
	});
});

// Select all user list
router.get('/usersList',function(req,res)
{
	var users = require('../modules/users');
	q.all([users.selectAllusers(req,config.mysql,q)]).then(function(results){
		//console.log(results[0][0][0].street)
		res.json(results[0][0]);
	});
});

// Select particular user
router.get('/users/:id/todos',function(req,res)
{
	console.log(req.params.id);
	var users = require('../modules/users');
	q.all([users.selectuserbyid(req,config.mysql,q)]).then(function(results){
		res.json(results[0][0]);
	});
});

// Delete user details
router.get('/users_delete/:id/todos',function(req,res)
{
	console.log(req.params.id);
	var users = require('../modules/users');
	q.all([users.users_delete(req,config.mysql,q)]).then(function(results){
		res.json({"Status":"Successfully Deleted"});
	});
});

module.exports = router;

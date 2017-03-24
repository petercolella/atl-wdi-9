//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');

//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.post('/', function(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      const newList = new {
        name: req.body.name,
        completed: req.body.completed
      }

      user.newList.push(newList)

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Bucket List item created')
      });

      res.redirect('/users')
    });
});

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const list = user.list.id(req.params.id);

      res.render('lists/edit', {
        list: list,
        user: user
      });
    });
});

//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.put('/:id', function(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const list = user.list.id(req.params.id);

      list.name = req.body.name
      list.completed = req.body.completed
      user.save();

      res.render('lists/show', {
        list: list,
        user: user
      });
    });
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item
router.delete('/:id', function(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      user.list.id(req.params.id).remove();

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Bucket List item was removed')
      });

      res.render('lists/index', {
        user: user
      });
    });
});

//======================
// EXPORTS
//======================
module.exports = router;

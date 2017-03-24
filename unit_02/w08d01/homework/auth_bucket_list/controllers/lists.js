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
  User.findById(req.params.id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      const newList = {
        name: req.body.name,
        completed: req.body.completed
      }

      user.list.push(newList)

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
  User.findById(req.params.id)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const newList = user.newList.id(req.params.id);

      res.render('lists/edit', {
        newList: newList,
        user: user
      });
    });
});

//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.put('/:id', function(req, res){
  User.findById(req.params.id)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const newList = user.newList.id(req.params.id);

      newList.name = req.body.name
      newList.completed = req.body.completed
      user.save();

      res.render('lists/show', {
        newList: newList,
        user: user
      });
    });
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item
router.delete('/:id', function(req, res) {
  User.findById(req.params.id)
    .exec(function (err, user){
      if (err) { console.log(err); }

      user.newList.id(req.params.id).remove();

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

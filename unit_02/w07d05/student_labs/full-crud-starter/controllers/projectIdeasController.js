var express = require('express');
var router = express.Router({mergeParams: true});

var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea = require("../models/project_idea");

// PROJECT IDEA INDEX ROUTE
router.get('/', function(req, res){
  User.findById(req.params.userId)
    .exec(function(err, user){
      if (err) { console.log(err); }
      res.render('project_ideas/index.hbs', {
        user: user
      });
    });
});

// PROJECT IDEA EDIT ROUTE
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const projectIdea = user.projectIdeas.id(req.params.id);

      res.render('project_ideas/edit', {
        projectIdea: projectIdea,
        user: user
      });
    });
});

// PROJECT IDEA UPDATE ROUTE
router.put('/:id', function(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const projectIdea = user.projectIdeas.id(req.params.id);

      projectIdea.description = req.body.description
      projectIdea.in_progress = req.body.in_progress
      user.save();

      res.render('project_ideas/show', {
        projectIdea: projectIdea,
        user: user
      });
    });
});


// PROJECT IDEA NEW ROUTE
router.get('/new', function(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err) }
      res.render('project_ideas/new', {
        user: user
      });
    });
});

// PROJECT IDEA CREATE ROUTE
router.post('/', function(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      const newProjectIdea = {
        description: req.body.description,
        in_progress: req.body.in_progress
      }

      user.project_ideas.push(newProjectIdea)

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Project Idea created')
      });

      res.redirect('/users')
    });
});

// PROJECT IDEA DELETE ROUTE
router.delete('/:id', function(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }

      user.projectIdeas.id(req.params.id).remove();

      user.save(function (err) {
        if (err) console.log(err);
        console.log('Project Idea was removed')
      });

      res.render('project_ideas/index', {
        user: user
      });
    });
});


// PROJECT IDEA SHOW ROUTE
router.get('/:id', function(req, res) {
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const projectIdea = user.projectIdeas.id(req.params.id);
      res.render('project_ideas/show', {
        projectIdea: projectIdea,
        user: user
      });
    });
});

module.exports = router;
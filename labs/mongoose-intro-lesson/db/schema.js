var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', function(err) {
	console.log(err);
});

db.once('open', function() {
	console.log("database has been connected!");
});

db.close();

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	title: String,
	unit: String
});

var StudentSchema = new Schema({
	name: String,
	age: Number,
	projects: [ProjectSchema]
});

var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

// var frankie = new StudentModel({name: 'Frankie P.', age: 30});

// frankie.save(function(err, student){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(student);
// 	}
// });

// StudentModel.create({ name: 'Frankie P.', age: 30 }, function (err, student) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student);
//   }
// });

// var frankie = new StudentModel({name: "Frankie", age: 30});
// var project1 = new ProjectModel({title: "connect four", unit: "JS"});

// // Now we add that project to a student's collection / array of projects.
// frankie.projects.push(project1);

// // In order to save that project to the student, we need to call `.save()` on the student -- not the project.
// frankie.save(function(err, student) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(student + " was saved to our db!");
//   }
// });

module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
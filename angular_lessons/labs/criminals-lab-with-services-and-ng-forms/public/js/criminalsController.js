angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;


  getCriminals();
  function getCriminals(){

  self.greetingFromService = CriminalsService.greeting;
  CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
    });


    // $http
    //   .get('/criminals')
    //   .then(function(response){
    //     self.all = response.data.criminals;
    // });
  }

  function addCriminal(){
    // $http
    //   .post('/criminals', self.newCriminal)
    //   .then(function(response){
    //     getCriminals();
    // });
    self.newCriminal = {};
  }

  function deleteCriminal(criminal){
    // $http
    //   .delete("/criminals/" + criminal._id)
    //   .then(function(response){
    //     var index = self.all.indexOf(criminal);
    //     self.all.splice(index, 1);
    //   });

    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
    });
  }

  function addCriminal(){
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
      .then(function(response){
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });

  }

}

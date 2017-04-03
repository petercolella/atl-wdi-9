angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;

  vm.addPresident = addPresident;
  vm.deletePresident = deletePresident;
  vm.all = [];
  vm.newPresident = {};

  // this.all = [
  //   {name: 'George Washington', start: 1789, end: 1797 },
  //   {name: 'John Adams', start: 1797, end: 1801 },
  //   {name: 'Thomas Jefferson', start: 1801, end: 1809 },
  //   {name: 'James Madison', start: 1809, end: 1817 },
  //   {name: 'Joshua Quincy Kushner', start: 2021, end: 2029 },
  // ];
  // this.addPresident = addPresident;
  // this.newPresident = {};

  activate();

  function activate() {
    loadAllPresidents();
  }

  function addPresident(){
    console.log('Adding...');
    console.log(vm.newPresident);
    
    $http
      .post('/presidents', vm.newPresident)
      .then(function someName(response) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
      // .catch(function catch(err) {
      //   console.log(err);
      // });
    // vm.all.push(this.newPresident);
    // vm.newPresident = {}
  }


  //This function is all wrong
  function deletePresident(){
    console.log('Deleting...');
    console.log(president);

    $http
      .delete('/presidents/:id')
      .then(function exPres(reponse) {
        vm.newPresident = {};
      });
  }

  

  function loadAllPresidents() {
    $http
      .get('/presidents')
      .then(function setAll(reponse) {
        console.log(reponse.data);
        vm.all = reponse.data.presidents;
        vm.loadAllPresidents = false;
      }, function reject(err) {
        vm.loadingAll = false;
      });
  }
}

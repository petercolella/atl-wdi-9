angular.module('InfamousCriminals')
    .service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {

    var vm = this;

    vm.getCriminals = function () {
        console.log('getCriminals is alive!');
    
        var self = this;
        self.greeting = 'getCriminals says Hi ';
        return $http
            .get('/criminals')
            .then(function(response){
                return response.data.criminals;
            });
    };

   vm.addCriminal = function (newCriminal) {
       return $http
           .post('/criminals', newCriminal);
   };

    vm.deleteCriminal = function (criminal) {
        return $http
                .delete("/criminals/" + criminal._id)
    };

}

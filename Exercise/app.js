(function(){
    var app = angular.module('store', ['angularUtils.directives.dirPagination']);
    app.controller('StoreController', function($scope, $http){
        $scope.apartments = [];
        $http.get("./apartment.json").success(function(response){ 
            $scope.apartments = response;
        });

        this.tab = '-popularity';
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

})();


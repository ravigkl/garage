angular.module('rsApp',[])
.controller('FirstController', function($scope){
	$scope.counter=0;
	$scope.add=function(amount){
		$scope.counter += amount;
	};
	$scope.substract=function(amount){
		$scope.counter -= amount;
	};

})
.controller('MyController', function($scope) { 
	 	$scope.person = {
	 		name: "Ravi Singh"
	 	};
})
.controller('ParseController', function($scope, $parse) {
		$scope.person = {
        name: "Ari Lerner"
      };

	 $scope.$watch('expr', function(newVal, oldVal, scope) {
  	if (newVal !== oldVal) { 
  // Let's set up our parseFun with the expression 
  	var parseFun = $parse(newVal); 
  // Get the value of the parsed expression 
  	$scope.parsedValue = parseFun(scope); 
	} 
	}); 
})
.directive('myDirective', function(){
	return{
		restrict:'EAC',
		replace:true,
		template:'<a href="http://google.com"> click me to go to google</a>'
	//	template: '<a href="{{myUrl}}">{{myLinkText}}</a>'

	}
})
.directive('dynamicDirective', function(){
	return {
        restrict: 'A',
        replace: true,
        scope: {
          myUrl: '=linkMe',
          myLinkText: '@'
        },
        template: '\
          <div>\
            <label>My Url Field:</label>\
            <input type="text" ng-model="myUrl" />\
            <a href="{{myUrl}}">{{myLinkText}}</a>\
          </div>\
        '
      }
});

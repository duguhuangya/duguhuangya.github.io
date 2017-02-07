app2.controller('vipController',['$scope','$http','$rootScope',
	function($scope,$http,$rootScope){
	$http({
		url:'/user/info',
		method:'post'
	}).then(function(res){
		$scope.userinfo = res.data.result;
		// console.log($scope.userinfo);

	});
	

}])
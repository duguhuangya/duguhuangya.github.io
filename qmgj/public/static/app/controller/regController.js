app.controller('regController',['$scope','$http','$state',function($scope,$http){
	$scope.regClick = function(){
		if($scope.myform.$valid && $scope.pwd == $scope.newPwd){
			$http({
				url:'/user/reg',
				method:'post',
				data:{
					name:$scope.username,
					phone:$scope.phone,
					password:$scope.pwd,
					passwordRepeat:$scope.newPwd,
				}
			}).then(function(res){
				// console.log(res);
				if(res.data.resultCode == '0000'){
					alert('注册成功');
					$state.go('login')
				}else{
					alert(res.data.resultMsg);
				}
			})
		}
	}
}])
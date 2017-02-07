app2.controller('vipInfoController',['$scope',function($scope){
	$scope.cipArr = ['微电影','电视剧','话剧','电影','戏曲','书画','相声','戏剧','音乐剧'];
	$scope.fileNameChanged = function(event){
		console.log(event);
	}
	$scope.checkbox = function(e){// e 事件
		// console.log(e.target);
		var ngDom = angular.element(e.target);
		ngDom.toggleClass('active');

	}
	$scope.radio = function(e){
		var ngDom = angular.element(e.target);
		ngDom.parent().children().removeClass('active');
		ngDom.addClass('active');
	}
	$scope.submit = function(){
		var ngDom1 = angular.element(document.querySelectorAll('.info-radio.active'));
		console.log('性别',ngDom1.attr('data-value'));
		var ngDom2 = angular.element(document.querySelectorAll('.info-checkbox.active'));
		var arr = [];
		for (var i = 0; i < ngDom2.length; i++) {
			arr.push(ngDom2.eq(i).attr('data-value'));
		}
		console.log('关注的圈子',arr.toString());
	}
}])
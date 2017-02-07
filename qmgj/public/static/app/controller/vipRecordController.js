app2.controller('vipRecordController',['$scope','$http',function($scope,$http){
	var Record = {
		init:function(){
			var that = this;			
			// 0 全部    1 第一页   5每页五条数据
			$scope.countAll = 0;
			$scope.type = 0;// 0全部	1未支付 	2已支付 
			$scope.page = 1;
			$scope.count = 6;
			$scope.maxSize = 5;//显示多少也签

			that.events();
			that.getRecordData();			
		},
		events:function(){
			var that = this;
			$scope.pageChanged = function(){
				// console.log($scope.pageChanged);
				that.getRecordData();
			};
			$scope.changeType = function(index){
				$scope.type = index;
				that.getRecordData();
			}

		},
		getRecordData:function(){
			$http({
				url:'/user/RecordList',
				method:'post',
				data:{
					type:$scope.type,
					page:$scope.page,
					count:$scope.count
				}
			}).then(function(res){
				if(res.data.resultCode == '0000'){
					// console.log(res);
					var result = res.data.result;
					$scope.countAll = result.count;
					$scope.recordData = result.list;					
				}else{
					alert(res.data.resultMsg);
				}
			})
		}
	};
	Record.init();
}])
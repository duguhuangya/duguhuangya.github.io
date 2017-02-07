app.controller('listController', ['$scope', '$http','$stateParams', myListController]);
app2.controller('listController', ['$scope', '$http','$stateParams', myListController]);

function myListController($scope, $http,$stateParams) {
    var arr = ['全部', '微电影', '电视剧', '话剧', '电影', '戏曲', '书画', '相声', '戏剧', '音乐剧', '其它'];
    $scope.arr = arr;
    var s = ['筹资中', '已结束', '成功'];
    $scope.s = s;
    var t = ['最新', '热门', '结束时间'];
    $scope.t = t;

    var List = {

        init: function() {
            var that = this;
            // 0 全部    1 第一页   5每页五条数据
            $scope.countAll = 0;
            $scope.type = 0; // 0全部	1未支付 	2已支付 
            $scope.page = 1;
            $scope.cid = 0;
            $scope.status = 0;
            $scope.timeStatus = 0;
            $scope.count = 9;
            $scope.maxSize = 5; //显示多少也签

            $scope.keyword = '';
            //
            if($stateParams.keyword != undefined ){
                $scope.keyword = $stateParams.keyword;
            }

            that.events();
            that.getListData();
        },
        events: function() {
            var that = this;
            $scope.pageChanged = function() {
                console.log($scope.page);
                that.getListData();
            };
            $scope.changeType = function(index) {
                $scope.cid = index;
                that.getListData();
            };
            $scope.changeStatus = function(index) {
                $scope.status = index;
                that.getListData();
            };
            $scope.changeTimeStatus = function(index) {
                $scope.timeStatus = index;
                that.getListData();
            };
        },
        getListData: function() {
            $http({
                url: '/prolist',
                method: 'get',
                params: {
                    keyword: $scope.keyword, // 关键字搜索， 选填
                    cid: $scope.cid, // 数组下标 ['全部','微电影','电视剧','话剧','电影','戏曲','书画','相声','戏剧','音乐剧','其它']
                    status: $scope.status, // 0 筹资中  1已结束  2成功
                    timeStatus: $scope.timeStatus, // 0最新  1热门  2结束时间
                    page: $scope.page, // 第1页数据  默认第1页
                    count: $scope.count // 一页9条数据
                }
            }).then(function(res) {
                if (res.data.resultCode == '0000') {
                    var result = res.data.result;
                    $scope.countAll = result.countAll;
                    $scope.lists = result.list;
                } else {
                    alert(res.data.resultMsg);
                }

            })
        }
    };
    List.init();
}

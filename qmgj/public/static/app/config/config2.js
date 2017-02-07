var app2 = angular.module('qmgj_login', ['ui.router', 'ui.bootstrap']);
app2.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/vip/main');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'static/app/view/homeView.html',
            controller: 'homeController'
        }).state('vip', {
            // 个人中心页
            url: '/vip',
            templateUrl: 'static/app/view/vipView.html',
            controller: 'vipController'
        }).state('vip.main', {
            // 个人主页
            url: '/main',
            templateUrl: 'static/app/view/vip.mainView.html',
            controller: 'vipMainController'
        }).state('vip.info', {
            // 个人信息页
            url: '/info',
            templateUrl: 'static/app/view/vip.infoView.html',
            controller: 'vipInfoController'
        }).state('vip.record', {
            //购买记录
            url: '/record',
            templateUrl: 'static/app/view/vip.recordView.html',
            controller: 'vipRecordController'
        }).state('list', {
            // 列表页
            url: '/list',
            templateUrl: 'static/app/view/listView.html',
            controller: 'listController'
        }).state('list2', {
            // 列表页 传递参数 搜索框进入列表
            url: '/list/:keyword',
            templateUrl: 'static/app/view/listView.html',
            controller: 'listController'
        })
    }
]);

app2.controller('logoutController', ['$scope', '$http', function($scope, $http) {
    $scope.userLogout = function() {
        $http({
            url: '/user/logout',
        }).then(function(res) {
            if (res.data.resultCode == '0000') {
                alert('退出成功');
                location.reload();
            }
        })
    }
}]);

// substr过滤
app2.filter('substr', function() {
    return function() {
        var val = arguments[0],
            start = arguments[1],
            count = arguments[2];
        if (start == undefined) {
            start = 0;
            count = val.length;
        }
        // substr:15
        if (count == undefined) {
            start = 0;
            count = arguments[1];
        }
        return val.substr(start, count);
    }
});

// 通过时间毫秒获取上下午
app2.filter('getMoon', function() {
    return function(input) {
        var curH = new Date(parseInt(input)).getHours();
        var moon = '';
        if (6 < curH && curH < 12) {
            moon = "上午";
        } else if (12 <= curH && curH < 14) {
            moon = "中午";
        } else if (curH >= 14 && curH < 18) {
            moon = "下午";
        } else if (curH >= 18 && curH < 24) {
            moon = "晚上";
        } else {
            moon = "凌晨";
        }
        return moon;
    }

});

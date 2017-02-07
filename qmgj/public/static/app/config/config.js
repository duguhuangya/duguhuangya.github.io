var app = angular.module('qmgj_unlogin', ['ui.router','ui.bootstrap']);
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'static/app/view/homeView.html',
            // 控制器的名字 不是js文件名
            controller: 'homeController'
        }).state('reg',{
        	// 注册
        	url:'/reg',
        	templateUrl:'static/app/view/regView.html',
        	controller:'regController'
        }).state('login',{
        	// 登录
        	url:'/login',
        	templateUrl:'static/app/view/loginView.html',
        	controller:'loginController'
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
app.filter('substr', function() {
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
})

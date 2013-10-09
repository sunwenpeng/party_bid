myModule.config(function($routeProvider) {
    $routeProvider.when("/",{
          templateUrl:"pages/activity_list.html",
          controller:ActivityListController
    }).when("/CreateActivityList",{
          templateUrl:"pages/create_activity_list.html",
          controller:CreateActivityListController
    }).when("/ActivityEnroll",{
          templateUrl:"pages/activity_enroll.html",
          controller:ActivityEnrollController
    }
        ).otherwise({
            redirectTo: "/"
        });

    //routing generate
    //routing generated over
});

/** Here is example
myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/activity_list_page.html",
        controller: ActivityListController
    }).when("/activity/create", {
            templateUrl: "pages/activity_create_page.html",
            controller: ActivityCreateController
        }).when("/sign_ups/list/:activity_name", {
            templateUrl: "pages/apply_page.html",
            controller: SignUpListController
        }).otherwise({
            redirectTo: "/"
        });
});
**/
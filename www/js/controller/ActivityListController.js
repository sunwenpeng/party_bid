function ActivityListController($scope,$navigate){
    $scope.go_to_create_activity_list=function(){
        $navigate.go('/CreateActivityList');
    }
};
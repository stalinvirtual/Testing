app.controller('firstpageController',function($scope){
    $scope.isVisible=true;
    $scope.notVisible = false;
    $scope.details=true;

    $scope.ShowHide = function(){
        $scope.isVisible=false;
         $scope.notVisible=true;
        
    }
    $scope.detailsLabel = function(){
        $scope.details= !$scope.details;
        $scope.payment=false;
    }
    $scope.paymentLabel = function(){
        $scope.details=false;
        $scope.payment= !$scope.payment;
        $scope.automation=false;
        $scope.discountform=true;
        $scope.discount=false;
    }
    $scope.automationLabel = function(){
        $scope.details=false;
        $scope.payment= false;
        $scope.automation= !$scope.automation;
        $scope.discountform=true;
        $scope.discount=false;
    }
    $scope.discountLabel = function(){
        $scope.details=false;
        $scope.payment= false;
        $scope.automation= false;
        $scope.discountform=true;
        $scope.discount=!$scope.discount;
        $scope.conditionform=true;
        $scope.condition=false;
    }
    $scope.conditionLabel = function(){
        $scope.details=false;
        $scope.payment= false;
        $scope.automation= false;
        $scope.discountform=true;
        $scope.discount=false;
        $scope.conditionform=true;
        $scope.condition=!$scope.condition;
    }




    });
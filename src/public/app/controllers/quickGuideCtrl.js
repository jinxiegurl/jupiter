angular.module('apolloApp').controller('quickGuideCtrl', function($scope){
    $scope.$parent.q = 'explore';
});

function goBack()
  {
  window.history.back();
  }

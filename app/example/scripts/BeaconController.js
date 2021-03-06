angular
  .module('example')
  .controller('BeaconController', function($scope, supersonic) {
    supersonic.logger.info('Creating BeaconController object');
    $scope.navbarTitle = "Beacon settings";

    $scope.configureButtonText = 'Configure!';

    $scope.configureIcon = 'super-gear-b';

    $scope.beacon_id = "";

    supersonic.ui.views.current.whenVisible( function(){
      $scope.beacon_id = steroids.view.params.id;
    });
  });

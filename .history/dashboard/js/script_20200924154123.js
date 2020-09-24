var app = angular.module("quiz", ['chart.js']);


app.controller("quizAdmin", function ($scope, $http) {

  
  
  $scope.getIndiviualUser = function () {
    console.log('hi');

    $scope.labels = ["Earth", "Air", "Water", "Fire"];
    $scope.series = ['Susan', 'Joroni', 'Jane'];
    $scope.data = [
      [65, 15, 5, 15],
      [10, 30, 41, 19],
      [25, 20, 20, 35]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{
      yAxisID: 'y-axis-1'
    }, {
      yAxisID: 'y-axis-2'
    }];
    $scope.options = {
      scales: {
        yAxes: [{
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
  }

  $scope.getUsers = function(){
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 6
      },
    }).then(function successCallback(response) {
     let usersData = response.data;
      console.log(usersData);
      return usersData;
     // $scope.data = questionData;
      //console.log($scope.data);
      //return questionData;
    });
   }





});

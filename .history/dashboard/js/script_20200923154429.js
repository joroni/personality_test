var app = angular.module("quiz", ['chart.js']);


app.controller("quizAdmin", function ($scope) {

  $scope.getIndiviualUser = function(){
  console.log('hi');
 
  $scope.labels = ["Earth", "Air", "Water", "Fire"];
  $scope.series = ['Series A', 'Series B', 'Series '];
  $scope.data = [
    [65, 15, 5, 15],
    [10, 30, 41, 19],
    [25, 20, 20, 35]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
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
});






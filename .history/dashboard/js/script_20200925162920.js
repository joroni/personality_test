var app = angular.module("quiz", ['chart.js', 'datatables','ui.bootstrap','ngAnimate', 'ngSanitize']);


app.controller("quizAdmin", function ($scope, $http) {

/* 
  var pc = this;
  pc.data = "Lorem Name Test"; 

  pc.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'quizAdmin',
      controllerAs: 'pc',
      size: size,
      resolve: {
        data: function () {
          return pc.data;
        }
      }
    });

    modalInstance.result.then(function () {
      $uibModal.open();
      alert("now I'll close the modal");
    });
  };
 */
  $scope.getIndividualUser = function () {
    //console.log('hi');

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

  

  $scope.getUserScores = function () {
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 2
      },
    }).then(function successCallback(response) {
      let usersData = response.data;
      console.log(usersData);
     // $scope.allUsers = usersData;
      $scope.userdata = usersData;
      
      $scope.labels = ["Earth", "Air", "Water", "Fire"];
      //$scope.series = ['Susan', 'Joroni', 'Jane'];
      $scope.series = [];
      for (var i = 0; i < $scope.userdata.length; i++) {
      
        $scope.series.push(
          $scope.userdata[i].first_name,
        );
      }
      console.log($scope.series );

      $scope.data = [];
      for (var i = 0; i < $scope.userdata.length; i++) {
      
        $scope.data.push([
          $scope.userdata[i].user_earth,
          $scope.userdata[i].user_air,
          $scope.userdata[i].user_water,
          $scope.userdata[i].user_fire
        ]);
      }
      console.log($scope.data );
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
    });
  }

  $scope.users=[];
$scope.addUserPop = false;
  /* $scope.userid = $scope.fetchGetVariables().user_id;
  $scope.groupid = $scope.fetchGetVariables().group_id; */
  $scope.addUser = function () {
   //let newuserdata = {};

    /* 
    console.log(angular.element('#MyAnswer')[0].value);
    $scope.isanswer = angular.element('#MyAnswer')[0].value; */
    /* len = $scope.answers.length; */
    $scope.user_name=$scope.user_name;
    $scope.email = $scope.email;
    $scope.group_id = $scope.group_id;
    /* for (let i = 0; i < userdata.length; i++) {
      newuserdata.push({
        'user_id': userdata[i].user_id,
        'question_id':userdata[i].question_id,
        'choice_id': $scope.isanswer,
        'request_type': 2,
        'len': len
      });
    } */
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      //data: newuserdata
      data: {
        'user_name':  $scope.user_name,
        'email':  $scope.email,
        'first_name': $scope.first_name,
        'last_name': $scope.last_name,
        'group_id':$scope.group_id,
        'acl':$scope.acl,
        'request_type': 3
      },
    }).then(function successCallback(response) {
      if (response.data.length > 0) {
        $scope.users.push(response.data[0]);
        alert('User added');
      } else {
        alert('User with this email already exist. ');
      }
    });
  }




  $scope.getUsers = function () {
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 4
      },
    }).then(function successCallback(response) {
      let usersData = response.data;
      console.log(usersData);
     // $scope.allUsers = usersData;
      $scope.customers = usersData;
      
    });
  }



 /*  $http.get('fetch.php').success(function(data, status, headers, config){
		$scope.customers = data;
	}); */
});



app.controller('ModalDemoCtrl', function ($uibModal, $log) {
  var pc = this;
  pc.data = "Lorem Name Test"; 

  pc.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'quizAdmin',
      controllerAs: 'pc',
      size: size,
      resolve: {
        data: function () {
          return pc.data;
        }
      }
    });

    modalInstance.result.then(function () {
      alert("now I'll close the modal");
    });
  };
});

app.controller('quizAdmin', function ($uibModalInstance, data) {
  var pc = this;
  pc.data = data;
  
  pc.ok = function () {
    //{...}
    alert("You clicked the ok button."); 
    $uibModalInstance.close();
  };

  pc.cancel = function () {
    //{...}
    alert("You clicked the cancel button."); 
    $uibModalInstance.dismiss('cancel');
  };
});
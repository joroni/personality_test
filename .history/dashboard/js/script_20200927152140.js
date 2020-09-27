var app = angular.module("quiz", ['chart.js', 'datatables']);


app.controller("quizAdmin", function ($scope, $http) {

  /* 
    $scope.groups =  [{
      group_id:1,
      group_name: 'Team A'
    },
    {
      group_id:2,
      group_name: 'Team B'
    }
  ]; */


  
  $scope.isChecked = false;

  $scope.getAllUserScores = function () {
    
    console.log('getUserScores');
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 1
      },
    }).then(function successCallback(response) {
      let usersData = response.data;
      console.log('usersData', usersData);
      // $scope.allUsers = usersData;
      $scope.userdata = usersData;

      $scope.labels = ["Earth", "Air", "Water", "Fire"];
      //$scope.series = ['Susan', 'Joroni', 'Jane'];
      $scope.series = [];
      for (var i = 0; i < $scope.userdata.length; i++) {
        $scope.series.push(
          $scope.userdata[i].first_name+' '+$scope.userdata[i].last_name,
        );
      }
      console.log('series: ', $scope.series);
      $scope.data = [];
      for (var i = 0; i < $scope.userdata.length; i++) {

        $scope.data.push([
          $scope.userdata[i].user_earth,
          $scope.userdata[i].user_air,
          $scope.userdata[i].user_water,
          $scope.userdata[i].user_fire
        ]);
      }
      console.log('data: ', $scope.data);

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


  $scope.indiuserdata = [];
  $scope.getIndividualUser = function (user_id) {
    console.log('user_id', user_id);
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        user_id: $scope.user_id,
        request_type: 2
      },
    }).then(function successCallback(response) {
      let usersData = response.data;
      console.log('$scope.indiuserdata', usersData);
      // $scope.allUsers = usersData;
      $scope.indiuserdata = usersData;
    })



    $scope.labels = ["Earth", "Air", "Water", "Fire"];
    /*  $scope.series = ['Susan', 'Joroni', 'Jane'];
     $scope.data = [
       [65, 15, 5, 15],
       [10, 30, 41, 19],
       [25, 20, 20, 35]
     ]; */

    $scope.series = [];
    for (var i = 0; i < $scope.indiuserdata.length; i++) {

      $scope.series.push(
        $scope.indiuserdata[i].first_name,
      );
    }
    console.log($scope.series);

    $scope.data = [];
    for (var i = 0; i < $scope.indiuserdata.length; i++) {

      $scope.data.push([
        $scope.indiuserdata[i].user_earth,
        $scope.indiuserdata[i].user_air,
        $scope.indiuserdata[i].user_water,
        $scope.indiuserdata[i].user_fire
      ]);
    }
    console.log($scope.data);

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




  $scope.users = [];
  $scope.addUserPop = false;
  /* $scope.userid = $scope.fetchGetVariables().user_id;
  $scope.groupid = $scope.fetchGetVariables().group_id; */
  $scope.addUser = function () {
    //let newuserdata = {};

    

    $scope.user_name = $scope.user_name;
    $scope.email = $scope.email;
    $scope.group_id = $scope.group_id;

    $http({
      method: 'post',
      url: 'processor/addremove.php',
      //data: newuserdata
      data: {
        'user_name': $scope.user_name,
        'email': $scope.email,
        'first_name': $scope.first_name,
        'last_name': $scope.last_name,
        'group_id': $scope.group_id,
        'acl': $scope.acl,
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
      $scope.allusers = usersData;


    });
  }


  $scope.getUser = function (id) {
    $scope.user_id = id;
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        id: id,
        request_type: 5
      },
    }).then(function successCallback(response) {
      let userData = response.data;
      console.log(userData);
      // $scope.allUsers = usersData;
      $scope.userowndata = userData;


    });
  }


  $scope.getGroups = function () {
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 7
      },
    }).then(function successCallback(response) {
      let groupsData = response.data;
      console.log('groupsData', groupsData);
      // $scope.allUsers = usersData;
      $scope.groups = groupsData;
    });
  }

  $scope.getAcl = function () {
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 8
      },
    }).then(function successCallback(response) {
      let aclData = response.data;
      console.log('aclData', aclData);
      // $scope.allUsers = usersData;
      $scope.acl = aclData;
    });
  }
  




 
  //let user = [];
  $scope.onCheckboxChange = function (team, key) {
    $scope.series = [];
    console.log("Selected "+ team.user_id);

    for (var i = 0; i < team.user_id.length; i++) {
      console.log("Selected ", team);
      $scope.series.push([team.user_id]
      );
    }
    console.log('series', $scope.series );

    /* console.log(key +" changed to "+ team.key); */
    // $scope.getSingleUserScore(user_id);
  };






  /*  $http.get('fetch.php').success(function(data, status, headers, config){
		$scope.customers = data;
	}); */
});

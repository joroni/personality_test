var app = angular.module("quiz", [])

app.controller("quizCtrl", function($scope, $http) {
    var themeFolder = 'http://localhost/quizsample';

    $http.get(themeFolder + '/data.json' )
        // $http.get(themeFolder+'/'+theEndPoint)
        .then(function (response) {
          var thePost = response.data;
          // $("#PostLoader").show();    var thePost = response.data;
          if (JSON.stringify(thePost) != '') {
            $scope.responseStatus = response.status;
            console.log('Status ', $scope.responseStatus);
            var postStringed = JSON.stringify(thePost);
            var postStringedR1 = postStringed.replace(/<[^>]*>/g, '');
            var postStringedR2 = postStringedR1.replace(/\&#8217;/g, "\'").replace(/\&hellip;/g, "\...");
            $scope.postParsed = JSON.parse(postStringedR2);
            // console.log('Posts', $scope.postParsed);
            $scope.items = $scope.postParsed;
            $scope.data =$scope.items;
            console.log('Posts', $scope.data);
            $scope.overAllPosts = $scope.items.length;
            console.log('Over All Total Posts ', $scope.overAllPosts);

           // $scope.formatDate($scope.items.date);

           // refineItems();
          }
        })


   
  /*$scope.data = [{
      question: "1)Which of the following selector matches a element based on its id?",
      type: "single",
      options: [{
          text: "The Id Selector"
        },
        {
          text: "The Universal Selector"
        },
        {
          text: "The Descendant Selector"
        },
        {
          text: "The Class Selector"
        }
      ]
    },
    {
      question: "2)Which of the following defines a measurement as a percentage relative to another value, typically an enclosing element?",
      type: "multiple",
      options: [{
          text: "%"
        },
        {
          text: "cm"
        },
        {
          text: "percentage"
        },
        {
          text: "ex"
        }
      ]
    },
    {
      question: "3)Which of the following property is used to set the background color of an element?",
      type: "single",
      options: [{
          text: "background-color"
        },
        {
          text: "background-image"
        },
        {
          text: "background-repeat"
        },
        {
          text: "background-position"
        }
      ]
    },
    {
      question: "4)Which of the following is a true about CSS style overriding?",
      type: "multiple",
      options: [{
          text: "Any inline style sheet takes highest priority. So, it will override any rule defined in tags or rules defined in any external style sheet file."
        },
        {
          text: "Any rule defined in tags will override rules defined in any external style sheet file."
        },
        {
          text: "Any rule defined in external style sheet file takes lowest priority, and rules defined in this file will be applied only when above two rules are not applicable."
        }
      ]
    }
  ];*/
  $scope.index = 0;
  $scope.questions = $scope.data[$scope.index];
  $scope.buttonType = $scope.questions.type == 'single' ? 'radio' : 'checkbox';
  $scope.isPrevious = false;
  $scope.isNext = true;
  $scope.nextQuestion = function() {
    if ($scope.index < 3) {
      $scope.index = $scope.index + 1;
      $scope.questions = $scope.data[$scope.index];
      $scope.buttonType = $scope.questions.type == 'single' ? 'radio' : 'checkbox';
      $scope.isPrevious = true;
      if ($scope.index == 3) {
        $scope.isNext = false;
      }
    } else {
      // disble next botton logic
      $scope.isNext = false;
    }
  }

  $scope.previousQuestion = function() {
    if ($scope.index > 0) {
      $scope.index = $scope.index - 1;
      $scope.questions = $scope.data[$scope.index];
      $scope.buttonType = $scope.questions.type == 'single' ? 'radio' : 'checkbox';
      $scope.isNext = true;
      if ($scope.index == 0) {
        $scope.isPrevious = false;
      }
    } else {
      // disble next botton logic
      $scope.isPrevious = false;
    }
  }

});
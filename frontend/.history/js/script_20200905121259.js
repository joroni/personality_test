var app = angular.module("quiz", [])
app.controller("quizCtrl", function($scope) {
  $scope.numprio = 0;
  $scope.data = [{
      question: "1)Which of the following selector matches a element based on its id?",
      type: "multiple",
      options: [{
          text: "Decisive"
        },
        {
          text: "Orderly"
        },
        {
          text: "Considerate"
        },
        {
          text: "Spontaneous"
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
      type: "multiple",
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
  ];
  
  $scope.index = 0;
  $scope.qid = 1;
  $scope.numprio = 2;
  $scope.questions = $scope.data[$scope.index];
  $scope.buttonType = $scope.questions.type == 'multiple' ? 'text' : 'radio';
  $scope.isPrevious = false;
  $scope.isNext = true;
  console.log($scope.questions.length);
  $scope.nextQuestion = function() {
    if ($scope.index < 3) {
      $scope.index = $scope.index + 1;
      $scope.questions = $scope.data[$scope.index];
      $scope.qid = $scope.index + 1;
      $scope.buttonType = $scope.questions.type == 'multiple' ? 'text' : 'radio';
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
      $scope.buttonType = $scope.questions.type == 'multiple' ? 'text' : 'radio';
      $scope.isNext = true;
      if ($scope.index == 0) {
        $scope.isPrevious = false;
      }
    } else {
      // disble next botton logic
      $scope.isPrevious = false;
    }
  }

  $scope.choiceSequence = function(){
    if ($scope.numprio >= 0) {
          $scope.numprio++;
      }
    }

    $scope.choiceUnique = function(){
     
      if ($scope.numprio >= 0) {
            $scope.numprio++;
        }
      }
      console.log($scope.numprio);
});
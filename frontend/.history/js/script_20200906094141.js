var app = angular.module("quiz", [])
app.controller("quizCtrl", function($scope) {
  $scope.numprio = 5;
  $scope.data = [{
      question: "1)Choose according to your strength? First selected to be your strongest.",
      type: "multiple",
      options: [{
          text: "Decisive",
          priorities: 0,
        },
        {
          text: "Orderly",
          priorities: 0,
        },
        {
          text: "Considerate",
          priorities: 0,
        },
        {
          text: "Spontaneous",
          priorities: 0,
        }
      ]
    },
    {
      question: "2)Which of the following defines a measurement as a percentage relative to another value, typically an enclosing element?",
      type: "multiple",
      options: [{
        text: "Decisive",
        priorities: 0,
      },
      {
        text: "Orderly",
        priorities: 0,
      },
      {
        text: "Considerate",
        priorities: 0,
      },
      {
        text: "Spontaneous",
        priorities: 0,
      }
    ]
    },
    {
      question: "3)Which of the following property is used to set the background color of an element?",
      type: "multiple",
      options: [{
        text: "Decisive",
        priorities: 0,
      },
      {
        text: "Orderly",
        priorities: 0,
      },
      {
        text: "Considerate",
        priorities: 0,
      },
      {
        text: "Spontaneous",
        priorities: 0,
      }
    ]
    },
    {
      question: "4)Which of the following is a true about CSS style overriding?",
      type: "multiple",
      options: [{
        text: "Decisive",
        priorities: 0,
      },
      {
        text: "Orderly",
        priorities: 0,
      },
      {
        text: "Considerate",
        priorities: 0,
      },
      {
        text: "Spontaneous",
        priorities: 0,
      }
    ]
    }
  ];
  $scope.priorities = [{ "value": 1, "text": "4" }, { "value": 2, "text": "3" }, { "value": 3, "text": "2" }, { "value": 4, "text": "1" }];
  $scope.prioritiess = [
                      {
                        label: '4',
                        value: 1
                      },
                      {
                        label: '3',
                        value: 2
                      },
                      {
                        label: '2',
                        value:  3
                      }, 
                      {
                        label: '1',
                        value: 4
                      }
                    ];
  $scope.index = 0;
  $scope.qid = 1;
  $scope.questions = $scope.data[$scope.index];
  $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
  $scope.isPrevious = false;
  $scope.isNext = true;
  console.log('questions ',$scope.questions.length);
  $scope.nextQuestion = function() {
    if ($scope.index < 3) {
      $scope.index = $scope.index + 1;
      $scope.questions = $scope.data[$scope.index];
      $scope.qid = $scope.index + 1;
      $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
      $scope.isPrevious = true;
      console.log($scope.data[$scope.index]);
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
      $scope.qid  =  $scope.qid  - 1;
      $scope.questions = $scope.data[$scope.index];
      $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
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
    console.log($scope.numprio);
    if ($scope.numprio >= $scope.numprio) {
          this.numprio--;
      }
    }

    
    
  $scope.choiceUnique = function(val){
   // myValue = $scope.ratingVal;
    $scope.ratingVal = val;
    //$scope.numprio++;
   /* if ($scope.numprio == 0) {
          $scope.numprio++;
      }*/

      console.log( $scope.ratingVal);
    }
  

    $scope.max = 4;
    $scope.ratingVal = 0;
    $scope.readonly = false;
    $scope.onHover = function(val){
      $scope.hoverVal = val;
    };
    $scope.onLeave = function(){
      $scope.hoverVal = null;
    }
    $scope.onChange = function(val){
      $scope.ratingVal = val;
      console.log($scope.ratingVal);
    }


      
});
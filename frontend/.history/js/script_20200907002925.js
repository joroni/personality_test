var app = angular.module("quiz", [])
app.controller("quizCtrl", function ($scope) {
  $scope.numprio = 5;
  $scope.datavalue = [];
  $scope.qid = 1;
  $scope.QuestId = 'Q-' + $scope.qid;
  $scope.data = [{

      question: "1. Choose according to your strength, as 4 is the highest and 1 is the lowest.",
      type: "multiple",
      priorities: [4, 3, 2, 1],
      options: [{
          text: "Decisive",
          priority: 1,
        },
        {
          text: "Orderly",
          priority: 2,
        },
        {
          text: "Considerate",
          priority: 3,
        },
        {
          text: "Spontaneous",
          priority: 4,
        }
      ]
    },
    {

      question: "2.  Choose according to your strength, as 4 is the highest and 1 is the lowest.",
      type: "multiple",
      priorities: [4, 3, 2, 1],
      options: [{
          text: "Results",
          priority: 0,
        },
        {
          text: "Systems",
          priority: 0,
        },
        {
          text: "Support",
          priority: 0,
        },
        {
          text: "Inspiration",
          priority: 0,
        }
      ]
    },
    {
      question: "3.  Choose according to your strength, as 4 is the highest and 1 is the lowest.",
      type: "multiple",
      priorities: [4, 3, 2, 1],
      options: [{
          text: "Destination",
          priority: 1,
        },
        {
          text: "Schedule",
          priority: 2,
        },
        {
          text: "Journey",
          priority: 3,
        },
        {
          text: "Dream",
          priority: 4,
        }
      ]
    },
    {
      question: "4.  Choose according to your strength, as 4 is the highest and 1 is the lowest.",
      type: "multiple",
      priorities: [4, 3, 2, 1],
      options: [{
          text: "Blunt	",
          priority: 0,
        },
        {
          text: "Critical",
          priority: 0,
        },
        {
          text: "Hesitant",
          priority: 0,
        },
        {
          text: "Easily Distracted",
          priority: 0,
        }
      ]
    }
  ];
  // $scope.headers = ["foo", "bar", "baz"]; 
  //let  priItems= [{ "value": 4, "text": "4" }, { "value": 3, "text": "3" }, { "value": 2, "text": "2" }, { "value": 4, "text": "1" }];
  //$scope.priorities = JSON.parse(JSON.stringify(priItems));
  $scope.initData = function () {
    $scope.source = JSON.parse(JSON.stringify($scope.data));
    let srcData = $scope.source;
    for (let i = 0; i < srcData.length; i++) {
      console.log('srcData', srcData[i]);
      $scope.datavalue.push(srcData[i]);
      $scope.priorities = $scope.datavalue[i].priorities;
     // console.log('data', $scope.datavalue[i]);
      console.log('priorities', $scope.priorities);
    }
   
  }

  //$scope.priorities = [4,3,2,1];
  /* $scope.priorities = $scope.datavalue.priorities;*/
  $scope.selectedColumn = {};
  $scope.selValue = $scope.selValue;
  //selectedhead =  $index;
  $scope.emptyArr = false;
  $scope.selectColumn = function (selectedhead) {

    console.log('selected head', selectedhead);
    //let shead = questionId+selectedhead;
    // $scope.fileData.headers.splice(selectedhead); 
    $scope.priorities = $scope.priorities.filter(function (item) {
      console.log('item', item);
      return !selectedhead || !angular.equals(item, selectedhead);
      // return !shead || !angular.equals(item, shead); 

    });
    console.log('priority', $scope.priorities);
    if ($scope.priorities == "") { // this disables the <select> tag
      $scope.emptyArr = true;
    }
   
  }


  $scope.index = 0;
  $scope.questions = $scope.data[$scope.index];
  $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
  $scope.isPrevious = false;
  $scope.isNext = true;
  console.log('questions ', $scope.data);

  $scope.nextQuestion = function () {
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
    $scope.emptyArr = false;
    //$scope.initData();
  }


  $scope.possibleChoices = ["", 1, 2, 3, 4];

  $scope.data = [];

  for (var i = 0; i < 5; i++) {
    $scope.data[i] = {};
    $scope.data[i].value = "";
   // $scope.data[i].name = "Item " + (i + 1);
  }
/*
  $scope.onChanged = function () {
    var currentItem = this.item2;
    angular.forEach($scope.data2, function (listItem) {
      if (listItem !== currentItem && listItem.value === currentItem.value) {
        listItem.value = $scope.possibleChoices[0];
      }
    });
  }*/


  $scope.onChanged2 = function () {
    var currentItem = this.option;
    angular.forEach($scope.datavalue.priorities, function (listItem) {
      if (listItem !== currentItem && listItem.value === currentItem.value) {
        listItem.value = $scope.possibleChoices[0];
      }
    });
  }

  $scope.previousQuestion = function () {
    if ($scope.index > 0) {
      $scope.index = $scope.index - 1;
      $scope.qid = $scope.qid - 1;
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

  $scope.choiceSequence = function (selectedColumn) {
    $scope.selValue = selectedColumn;
    questionId = $scope.QuestId;
    $scope.datavalue = $scope.data;
    /*  if($scope.selValue == null){
        $scope.selValue = selectedColumn;
      }*/
    /* console.log('selected',$scope.selValue);

     var obj = {
       'priority': selectedColumn,
       'questionid':questionId
       
     };*/

    //  $scope.datavalue.push(obj);
    console.log('datavalue', $scope.datavalue);

  }



  $scope.choiceUnique = function (val) {
    // myValue = $scope.ratingVal;
    $scope.ratingVal = val;
    //$scope.numprio++;
    /* if ($scope.numprio == 0) {
           $scope.numprio++;
       }*/

    console.log($scope.ratingVal);
  }


  $scope.max = 4;
  $scope.ratingVal = 0;
  $scope.readonly = false;
  $scope.onHover = function (val) {
    $scope.hoverVal = val;
  };
  $scope.onLeave = function () {
    $scope.hoverVal = null;
  }
  $scope.onChange = function (val) {
    $scope.ratingVal = val;
    console.log($scope.ratingVal);
  }



});

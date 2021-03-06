var app = angular.module("quiz", [])
app.controller("quizCtrl", function ($scope) {
 // $scope.optionss=['1','2','3','4'];
  $scope.disabled={};
  
  $scope.numprio = 5;
  $scope.datavalue = [];
  $scope.runningData = [];
  $scope.runningQuestionData = [];
  $scope.question = [];
  $scope.qid = 0;
  $scope.QuestId = 'Q-' + $scope.qid;
  $scope.data = [{
      question: "1. Choose according to your strength, as 4 is the highest and 1 is the lowest.",
      type: "multiple",
      priorities: [{
        label: "4",
        value: 4
      }, {
        label: "3",
        value: 3
      }, {
        label: "2",
        value: 2
      }, {
        label: "1",
        value: 1
      }],
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
      priorities: [{
        label: "4",
        value: 4
      }, {
        label: "3",
        value: 3
      }, {
        label: "2",
        value: 2
      }, {
        label: "1",
        value: 1
      }],
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
      priorities: [{
        label: "4",
        value: 4
      }, {
        label: "3",
        value: 3
      }, {
        label: "2",
        value: 2
      }, {
        label: "1",
        value: 1
      }],
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
      priorities: [{
        label: "4",
        value: 4
      }, {
        label: "3",
        value: 3
      }, {
        label: "2",
        value: 2
      }, {
        label: "1",
        value: 1
      }],
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
 

  //$scope.priorities = [4,3,2,1];
  /* $scope.priorities = $scope.datavalue.priorities;*/
  $scope.source = JSON.parse(JSON.stringify($scope.data));
  $scope.selectedColumn = {};
  $scope.selectedQuestion = [];
  $scope.selValue = $scope.selValue;
  $scope.selectedhead = this.$index;
  $scope.emptyArr = false;


  $scope.initData = function () {
  
   $scope.questionData = $scope.source;
   //console.log('questionData', $scope.questionData[i]);
  $scope.questions = $scope.source[$scope.index];
  //$scope.priorities = $scope.questions.priorities;
                                    
  //$scope.questionData = $scope.questions;
    for (let i = 0; i < $scope.questions.length; i++) {
      console.log('questionData', $scope.questions[i]);
      $scope.datavalue.push($scope.questionData[i]);
      $scope.questions = $scope.datavalue.question;
      // console.log('data', $scope.datavalue[i]);
      
      console.log('question', $scope.questions);
    }


    $scope.priorities = [ {
      label: "4",
      value: 4
    }, {
      label: "3",
      value: 3
    }, {
      label: "2",
      value: 2
    }, {
      label: "1",
      value: 1
    }];
   

  }

  //$scope.disabled={};


  //$scope.selectedColumn = {};
  //$scope.selValue = $scope.selValue;
  $scope.emptyArr = false;
  /*$scope.selectColumn = function (selectedhead) {
    $scope.selectedOption = selectedhead;
    //let shead = questionId+selectedhead;
    // $scope.fileData.headers.splice(selectedhead); 
    $scope.priorities = $scope.priorities.filter(function (item) {
      console.log('item', item);
      console.log('selected head', selectedhead);
      $scope.runningData.push(selectedhead);
      sessionStorage.setItem('quizItem', JSON.stringify($scope.runningData));
      return !selectedhead || !angular.equals(item, selectedhead);
      // return !shead || !angular.equals(item, shead); 

    });

  
    console.log('available priority', $scope.priorities);
    if ($scope.priorities == "") { // this disables the <select> tag
      $scope.emptyArr = true;
    }

  }
*/




 


  $scope.selectColumn = function (selectedhead) {
    //let srcData = $scope.source;
    console.log('selected source',  $scope.source);
    console.log('selected index', this.$index);
    console.log('selected head', selectedhead);
    /*  var data = [{
        BuildingID: "56",
        FloorId: "65",
        volume: [{

          one: 12,
          two: 15,
          three: 12
        }]
      }];

      var MainInfo = [];
      for (var i = 0; i < data.length; i++) {

        var obj = {};
        obj.BuildingID = data[i].BuildingID;
        obj.FloorId = data[i].FloorId;

        for (var j in data[i].volume[0]) {

          obj[j] = data[i].volume[0][j];
        }
        MainInfo.push(obj);

      }

      console.log(MainInfo);

*/


    $scope.runningData.push(selectedhead);
  //  sessionStorage.setItem('quizItem', JSON.stringify($scope.runningData));
   
  $scope.priorities = $scope.priorities.filter(function (item) {
      console.log('item', item);
      sessionStorage.setItem('quizItem', JSON.stringify($scope.runningData));
      return !selectedhead || !angular.equals(item, selectedhead);
      // return !shead || !angular.equals(item, shead); 
    });
    console.log('priority', $scope.priorities);
    if ($scope.priorities == "") { // this disables the <select> tag
      $scope.emptyArr = true;
    }





    /*
	Output: Duplicate elements found.
*/

  }

/*
  var data = [{ depth: 0, id: "f35vz2f" }, { depth: 0, id: "f359354" }, { depth: 1, id: "f35e0b0", parent_id: "f359354" }, { depth: 2, id: "f35ji24", parent_id: "f35e0b0" }, { depth: 2, id: "f35rnwb", parent_id: "" }, { depth: 2, id: "f35ojh4", parent_id: "f35e0b0" }, { depth: 3, id: "f35lmch", parent_id: "f35ji24" }, { depth: 3, id: "f35kl96", parent_id: "f35ji24" }],
    tree = function (data, root) {
        var t = {};
        data.forEach(o => {
            Object.assign(t[o.id] = t[o.id] || {}, o);
            t[o.parent_id] = t[o.parent_id] || {};
            t[o.parent_id].children = t[o.parent_id].children || [];
            t[o.parent_id].children.push(t[o.id]);
        });
        return t[root].children;
    }(data, undefined);

console.log(tree);


*/

  $scope.turninAnswer = function (questionhead) {

    var text = questionhead;
    var integer = parseInt(text, 10);
    // returns 42
    //$scope.data = $scope.data.filter(function (ans) {
    console.log('answer', integer);
    //return selectedhead || angular.equals(ans, selectedhead);
    // return !shead || !angular.equals(item, shead); 
    //  });


  }

  $scope.index = 0;
  $scope.questions = $scope.data[$scope.index];
  $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
  $scope.isPrevious = false;
  $scope.isNext = true;
  $scope.indexPoint = $scope.index;
  console.log('questions ', $scope.data);


  $scope.initQuestion = function(){
    $scope.runningQuestionData.push( $scope.qid );
    sessionStorage.setItem('quizItem', JSON.stringify($scope.runningQuestionData));
   
   
  }
  $scope.nodeQuestion = function(questionhead) {
    var text = questionhead;
    console.log('question index', this.$index);
    console.log('questionhead', questionhead);
   // var integer = parseInt(text, 10);
    
    let parentNode = $scope.questions;
    for (var i = 0; i < parentNode.length; i ++) {
      let split = parentNode[i].split(" ");
      parentNode.push({
        marker: split[0],
        value: split.slice(1, -1).join(" ")
      });

      $scope.runningQuestionData.push(questionhead);
    sessionStorage.setItem('quizItem', JSON.stringify($scope.runningQuestionData));
   
      $scope.qParent = parentNode;
      console.log('parent', $scope.qParent);
    }

/*

let data
    var childArr = ['ft Some older versions read, ',
    'fqa And we are writing these things to you so that your joy will be complete. ',
    'fqb  ',
    'f*'
  ],
  data = {
    children: []
  };
for (var j = 0; j < childArr.length; j++) {
  let split = childArr[j].split(" ");
  data.children.push({
    marker: split[0],
    value: split.slice(1, -1).join(" ")
  });
}

console.log(data.children);*/
  //  var data = [{ BuildingID: "56", FloorId: "65", volume: [{ one: 12, two: 15,   three: 12}] }]
/*var data =   $scope.runningQuestionData.push(questionhead);

var MainInfo=[];
            for (i = 0; i < data.length; i++) {
                var obj = {}
                obj.qID = data[i].index;
                obj.opID = data[i].index;
                data[i].priority.forEach(function(a,c){
                Object.keys(data[i].volume[c]).forEach(function(a,b){
                  obj[a] = Object.values(data[i].volume[c])[b]
                })
                })
                MainInfo.push(obj);
            }
            console.log(MainInfo)*/
  }

  $scope.nextQuestion = function (selectedhead) {
    if ($scope.index < 3) {
      $scope.index = $scope.index + 1;
      $scope.questions = $scope.data[$scope.index];
    //  $scope.qid = $scope.index + 1;
      $scope.qid = $scope.qid + 1;
      $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
      $scope.isPrevious = true;
      console.log('index', $scope.data[$scope.index]);
      if ($scope.index == 3) {
        $scope.isNext = false;
      }
    } else {
      // disble next botton logic
      $scope.isNext = false;
    }
    selectedhead = $scope.qid;
    let thisQ = JSON.parse(sessionStorage.getItem('quizItem'));
    for (var i = 0; i < thisQ.length; j++) {
    }
    if (selectedhead !== $scope.$index){
    $scope.runningQuestionData.push(selectedhead);
    sessionStorage.setItem('quizItem', JSON.stringify($scope.runningQuestionData));
    }
    $scope.emptyArr = false;
    //$scope.initData();
  }

  
/*
  $scope.possibleChoices = ["", 1, 2, 3, 4];

  $scope.data2 = [];

  for (var i = 0; i < 5; i++) {
    $scope.data2[i] = {};
    $scope.data2[i].value = "";
    $scope.data2[i].name = "Item " + (i + 1);
  }

  $scope.onChanged = function () {
    var currentItem = this.item2;
    angular.forEach($scope.data2, function (listItem) {
      if (listItem !== currentItem && listItem.value === currentItem.value) {
        listItem.value = $scope.possibleChoices[0];
      }
    });
  }


  $scope.onChanged2 = function () {
    var currentItem = this.item;
    angular.forEach($scope.data, function (listItem) {
      if (listItem !== currentItem && listItem.value === currentItem.value) {
        listItem.value = $scope.possibleChoices[0];
      }
    });
  }
*/
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

/*

  $scope.choiceUnique = function (val) {
    // myValue = $scope.ratingVal;
    $scope.ratingVal = val;
    //$scope.numprio++;
    /* if ($scope.numprio == 0) {
           $scope.numprio++;
       }*\/

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

*/

});

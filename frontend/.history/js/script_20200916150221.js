var app = angular.module("quiz", ['psi.sortable'])


app.controller("quizCtrl", function ($scope, $http) {
  

  $scope.list = [];
  $scope.IsVisible = null;
  $scope.ShowHide = function () {
    //If DIV is visible it will be hidden and vice versa.
    $scope.IsVisible = $scope.ShowPassport ? true : null;
  }

  $scope.IsVisible = false;
  $scope.showUp = function () {
    $scope.IsVisible = true;
  }
  
  $scope.disabled = {};

  $scope.numprio = 5;
  $scope.datavalue = [];
  $scope.runningData = [];
  $scope.runningQuestionData = [];
  $scope.question = [];

  $scope.qid = 1;
  $scope.item = [];
  $scope.index = this.$index;
  $scope.QuestId = 'Q-' + $scope.qid;
  $scope.data = [{
      question_id: 1,
      question: "Decisive,Orderly,Considerate,Spontaneous",
      type: "multiple",
    },
    {
      question_id: 2,
      question: "Results,Systems,Support,Inspiration",
      type: "multiple",
    },
    {
      question_id: 3,
      question: "Destination,Schedule,Journey,Dream",
      type: "multiple",

    },
    {
      question_id: 4,
      question: "Blunt,Critical,Hesitant,Easily Distracted",
      type: "multiple",
    },
    {
      question_id: 5,
      question: "Bold,Accurate,Patient,Enthusiastic",
      type: "multiple",
    },
    {
      question_id: 6,
      question: "Facts,Logic,Feelings,Possibilities",
      type: "multiple",
    },
    {
      question_id: 7,
      question: "Aggressive,Thorough,Caring,Sociable",
      type: "multiple",
    },
    {
      question_id: 8,
      question: "Goals,Quality,Agreement,Ideas",
      type: "multiple",
    },
    {
      question_id: 9,
      question: "Competitive,Analytical,Local,Optimistic",
      type: "multiple",
    },
    {
      question_id: 10,
      question: "Use it,Check it,Share it,Possibilities",
      type: "multiple",
    }
  ];



  // Get all records
  /*$http({
    method: 'post',
    url: 'processor/addremove.php',
    data: {
      request_type: 1
    },

  }).then(function successCallback(response) {
    $scope.answers = response.data;
  });

*/

  // $scope.answers = [];
  // Add new record
  $scope.add = function (answers) {
    var len = $scope.answers.length;
   console.log(answers)
    $http({
    method: 'post',
    url: 'processor/addremove.php',
    data: {
        user_id: $scope.user_id[answers],
        question_id: $scope.question_id[answers],
        choice_id: $scope.choice_id[answers],
        request_type: 2,
        len: len
    },
    }).then(function successCallback(response) {
        if(response.data.length > 0)
            $scope.answers.push(response.data[0]);
            
        else
            alert('Record not inserted.');
    });

   /* $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        'user_id': $scope.user_id,
        'question_id': $scope.question_id,
        'choice_id': $scope.choice_id,
        'request_type': 2,
        'len': len
      },
    }).then(function successCallback(response) {
      if (response.data.length > 0) {
        $scope.answers.push(response.data[0]);
        console.log('$scope.answers my', $scope.answers);
      } else {
        alert('Record not inserted.');
      }
    });*/
  }


  // Delete record
  $scope.remove = function (index, id) {

    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        id: id,
        request_type: 3
      },
    }).then(function successCallback(response) {
      if (response.data == 1)
        $scope.answers.splice(index, 1);
      else
        alert('Record not deleted.');
    });
  }



  $scope.data = $scope.answers;

    $scope.insert = function() {
         $http.post(
             "processor/insert_data.php", {
                 'name': $scope.user_id,
                 'email': $scope.question_id,
                 'age': $scope.choice_id
             }
         ).success(function(data) {
             alert(data);
             $scope.user_id = null;
             $scope.question_id = null;
             $scope.choice_id = null;
         });
     }
     



  $scope.collectData = function () {
    $scope.len = $scope.answers;
    let len = $scope.len;
    for (let i = 0; i < len.length; i++) {
      $scope.answers.push({
        'user_id': len[i].user_id,
        'question_id': len[i].question_id,
        'choice_id': len[i].choice_id,
        'request_type': 2,
        'len': len
      });
    }
    console.log('Hi', $scope.answers);
  }


  $scope.answers = [];

  $scope.source = JSON.parse(JSON.stringify($scope.data));
  $scope.selectedColumn = {};
  $scope.selectedQuestion = {};
  $scope.myAnswer = [];
  $scope.selValue = $scope.selValue;
  $scope.selectedhead = this.$index;
  $scope.emptyArr = false;
  $scope.choices = [$scope.list];



  $scope.arrayQuestion = function (names) {
    //var names = 'Harry,John,Clark,Peter,Rohn,Alice';
    $scope.nameArr = names.split(',');
    console.log($scope.nameArr);
  }

  $scope.submitAnswer = function (myAnswer) {
    alert(myAnswer);
  }

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


    $scope.priorities = [{
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


  $scope.getSelected = function () {
    console.log($scope.choices);

  };





  $scope.selectColumn = function (questionhead, selectedhead) {
    //let srcData = $scope.source;
    console.log('selected source', $scope.source);
    console.log('selected index', this.$index);
    console.log('selected head', selectedhead);


    $scope.runningData.push({
      'question_id': questionhead,
      'choice_id': selectedhead,
    })
    console.log($scope.runningData);
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



    //  sessionStorage.setItem('quizItem', JSON.stringify($scope.runningData));

    $scope.priorities = $scope.priorities.filter(function (item) {
      $scope.item = item;
      // console.log('item', JSON.parse(JSON.stringify($scope.item)));


      /*  let options = this.jsonDef.propSetMap.options;
      for (let i = 0; i < options.length; i++) { // Add options dynamically from OS Element
        this.options.push({
          label: options[i].value,
          value: options[i].name
        });
      }
*/

      /* for (let i = 0; i < $scope.questions.length; i++) {
         
         console.log('question', $scope.questions[selectedhead]);
         let qh = $scope.questions[selectedhead];
      
         for (let j = 0; j < $scope.questions[i].options.length; j++) {
         
           let ans = qh.$scope.runningData.push(selectedhead);
           sessionStorage.setItem('quizItem2', JSON.stringify(ans));
           return !selectedhead || !angular.equals(item, selectedhead);
         //  console.log('option', $scope.questions);
         }
       }*/
      //$scope.runningData.push(selectedhead);
      sessionStorage.setItem('quizItem', JSON.stringify($scope.runningData));
      return !selectedhead || !angular.equals(item, selectedhead);

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
  $scope.isOk = true;
  $scope.isNext = false;
  $scope.indexPoint = $scope.index;
  console.log('questions ', $scope.data);
  console.log($scope.isNext);

  $scope.initQuestion = function () {
    // $scope.list = ['4', '3', '2', '1']; 
    $scope.list = [{
      label: "1st",
      image: "face-a.png",
      value: 4
    }, {
      label: "2nd",
      image: "face-b.png",
      value: 3
    }, {
      label: "3rd",
      image: "face-c.png",
      value: 2
    }, {
      label: "4th",
      image: "face-d.png",
      value: 1
    }];

    $scope.arrayQuestion($scope.questions.question);
    $scope.runningQuestionData.push($scope.qid);
    console.log('question index', $scope.runningQuestionData);
    sessionStorage.setItem('quizItem', JSON.stringify($scope.runningQuestionData));
  }
  $scope.nodeQuestion = function (questionhead) {
    var text = questionhead;
    console.log('question index', this.$index);
    console.log('questionhead', questionhead);
    // var integer = parseInt(text, 10);

    let parentNode = $scope.questions;
    for (var i = 0; i < parentNode.length; i++) {
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
    $scope.arrayQuestion($scope.questions.question);
    $scope.list = [{
      label: "1st",
      image: "face-a.png",
      value: 4
    }, {
      label: "2nd",
      image: "face-b.png",
      value: 3
    }, {
      label: "3rd",
      image: "face-c.png",
      value: 2
    }, {
      label: "4th",
      image: "face-d.png",
      value: 1
    }];
    selectedhead = $scope.qid;
    $scope.thisQ = JSON.parse(sessionStorage.getItem('quizItem'));
    console.log($scope.thisQ);
    $scope.runningQuestionData.push(selectedhead);
    sessionStorage.setItem('quizItem', JSON.stringify($scope.runningQuestionData));
    console.log($scope.thisQ + '-' + $scope.index);
    /*for (var i = 0; i < thisQ.length; i++) {
      console.log(thisQ.$index+'-'+$scope.$index);
     // if (thisQ.$index !== $scope.$index){
        $scope.runningQuestionData.push(selectedhead);
        sessionStorage.setItem('quizItem', JSON.stringify($scope.runningQuestionData));
       // }
    }*/

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
    $scope.arrayQuestion($scope.questions.question);
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

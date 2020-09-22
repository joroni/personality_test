var app = angular.module("quiz", ['psi.sortable','chart.js'])


app.controller("quizCtrl", function ($scope, $http) {
  
  $scope.showUserResult = function(){
    $scope.labels = ['E', 'A', 'W', 'F'];
    $scope.series = ['Series A', 'Series B'];
    $scope.dataresult = [
      [31, 34, 16, 19]
    ];
  }
       
 function lol(){
   
 }
  $scope.getQuestions = function(){
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 1
      },
    }).then(function successCallback(response) {
     let questionData = response.data;
      console.log(questionData);
      return questionData;
     // $scope.data = questionData;
      //console.log($scope.data);
      //return questionData;
    });
   }
   
  $scope.list = [];
  /* $scope.IsVisible = null;
    $scope.ShowHide = function () {
     //If DIV is visible it will be hidden and vice versa.
     $scope.IsVisible = $scope.ShowPassport ? true : null;
   }
  */
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



  $scope.selectedQuestion = [];
  $scope.index = 0;
  $scope.ans = {};
  $scope.qparenanswers = [$scope.ans];
  $scope.answers = [];
  $scope.questionItem = [];
  $scope.correctCount = 0;
  $scope.user_id = '23';
  //$scope.choice_id = ;
  $scope.totalquestions = {};


  


  $scope.userdata = {};
  // Get user
  $scope.getUser = function (userdata) {
    // Get all records
    //console.log('ans', ans);
    for (let i = 0; i <= userdata.length; i++) {
      $scope.userdata.push({
        'email': userdata[i].email,
      });
      // }
      //$scope.email = $scope.userdata.email;
      console.log($scope.userdata);
    }
    $http({
      method: 'post',
      email: $scope.userdata.email,
      url: 'processor/addremove.php',
      data: {
        request_type: 4
      },
    }).then(function successCallback(response) {
      $scope.userdata = response.data;
      console.log($scope.userdata)
    });
  }

  $scope.getSelected = function (choice_id) {
    console.log('choice_id',choice_id);

  };


  $scope.insertData = function (ans) {

    //console.log('ans', ans);
    for (let i = 0; i <= ans.length; i++) {

      $scope.qparenanswers.push({
        'user_id': ans[i].user_id,
        'question_id': ans[i].question_id,
        'choice_id': ans[i].choice_id,
      });

    }
    console.log($scope.qparenanswers);
  }






  /* var value = { "aaa": "111", "bbb": "222", "ccc": "333" };
  var blkstr = [];
  $.each(value, function(idx2,val2) {                    
    var str = idx2 + ":" + val2;
    blkstr.push(str);
  });
  console.log(blkstr.join("")); */



/* 
  $scope.copyToPostalAddr = function () {
    $scope.postalAddress1 = $scope.address1;
  }
  $scope.copyToAddr = function () {
    $scope.address1 = $scope.postalAddress1;
  }
 */


  $scope.getCoeff = function (e) {
    // Get the input element on a jQlite context
    //var $input = angular.element(document).find('#MyAnswer');
    //var $input = document.getElementById("MyAnswer");
    var $input = angular.element(e.target);
    //var $input = $input.hasClass('list-group');
    // Loop through '.fake-label' children
    angular.forEach($input.next().children(), function (child, index) {
      var $child = angular.element(child);

      if ($child.hasClass('coefficient')) {
        // Do whatever you want with the value
        console.log(parseFloat($child.text()));
        $scope.txt = parseFloat($child.text());
      }
    });
  }



  // $scope.answers = [];
  // Add new record
$scope.isLast= function() {
  if (($scope.index + 1) === $scope.totalquestions ) {
    $scope.isDone = true;
    $scope.isNext = false;
    $scope.isOk = false;
  } else if(($scope.index + 1) !== $scope.totalquestions && $scope.isOk === true){
    $scope.isDone = false;
    $scope.isNext = true;
  }
  console.log(($scope.index + 1) + '-' + $scope.totalquestions);

}
  $scope.add = function (selectedhead) {
    $scope.isDrag = true;
    console.log(angular.element('#MyAnswer')[0].value);
    $scope.isanswer = angular.element('#MyAnswer')[0].value;
    len = $scope.answers.length;
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        'user_id': $scope.user_id,
        'question_id': $scope.questions.question_id,
        'choice_id': $scope.isanswer,
        'request_type': 2,
        'len': len
      },
    }).then(function successCallback(response) {
      if (response.data.length > 0) {
        $scope.answers.push(response.data[0]);
        console.log('$scope.answers', $scope.answers);
      } else {
        alert('You already answered this. Please proceed to the next.');
      }
    });
  }

  //$scope.myanswer = document.getElementById("MyAnswer").value;


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



  
  $scope.getUserResult = function(){
    
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        user_id:$scope.user_id,
        request_type: 4
      },
     

    }).then(function successCallback(response) {
     let answerData = response.data;
      console.log(answerData);
      
      
      
      let lol =[];
      for (let i = 0; i < answerData.length; i++) {
        lol.push({
        'choice_id': answerData[i].choice_id.split("").map((i) => Number(i)),
      });
      //console.log(lol.choice_id); 
      /* const arrStr = lol.choice_id;
      const nuevo = arrStr.map((i) => Number(i));
      console.log(nuevo);
       */
    }
    console.log('Hi', lol);
    let lol2 =[];
    for (let i = 0; i < lol.length; i++) {
      lol2.push({
      'choice_id': lol[i].choice_id,
    });
  }
    /*  const arrStr = lol.choice_id;
      const nuevo = arrStr.map((i) => Number(i));
      console.log(nuevo); */
    //  let array = [lol2.choice_id];
    /*   console.log(lol2);
      let array = [];
      for (let i = 0; i < lol2.length; i++) {
         array.push(lol2[i].choice_id);
      }
      console.log(array);

     let a = [array];
  
 let b = []
         
  for(i = 0; i < a[0].length; i++){						
    count = 0
    for(j = 0; j < a.length; j++){				
       count += a[j][i]			
     }
     b.push(count)
  }		
  console.log(b) */
      /* for (let i = 0; i < lol2.length; i++) {
        var array = [lol2[i].choice_id],
        result = array.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
        
        console.log([result]);
    
      } */


     
      //var array = [[0, 1, 3], [2, 4, 6], [5, 5, 7], [10, 0, 3]],
     
     /*  var array = [lol2.choice_id],
    result = array.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
    
console.log(result); */
//fruits.forEach(myFunction);
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
  $scope.myAnswer = {};
  $scope.selValue = $scope.selValue;
  $scope.selectedhead = this.$index;
  $scope.emptyArr = false;
  $scope.choices = [$scope.list];



  $scope.arrayQuestion = function (names) {
    //var names = 'Harry,John,Clark,Peter,Rohn,Alice';
    $scope.isOk=false;
    $scope.nameArr = names.split(',');
    console.log($scope.nameArr);
    return $scope.nameArr;
  }

  $scope.submitAnswer = function (myAnswer) {
    alert(myAnswer);
  }

  $scope.initData = function () {

    $scope.isWelcome = true;
    $scope.isQuiz = false;
    $scope.isThanks = false;
    $scope.questionData = $scope.source;
    //console.log('questionData', $scope.questionData[i]);
    $scope.questions = $scope.source[$scope.index];
    //$scope.priorities = $scope.questions.priorities;
    console.log('choice_id', $scope.choice_id);
    //$scope.questionData = $scope.questions;
    for (let i = 0; i < $scope.questions.length; i++) {
      console.log('questionData', $scope.questions[i]);
      $scope.datavalue.push($scope.questionData[i]);
      $scope.questions = $scope.datavalue.question;
      // console.log('data', $scope.datavalue[i]);
     
      console.log('question', $scope.questions);
     
    }
  }



$scope.thenDone = function(){
  $scope.isDrag = false;
  alert('done');
}

  $scope.selectColumn = function (selectedhead) {
    //let srcData = $scope.source;
    console.log('selected source', $scope.source);
    console.log('selected index', this.$index);
    console.log('selected head', selectedhead);
    console.log(angular.element('#MyAnswer')[0].value);
    $scope.isanswer = angular.element('#MyAnswer')[0].value;
    $scope.runningData.push({
      'user_id': $scope.user_id,
      'question_id': $scope.questions.question_id,
      'choice_id': $scope.isanswer,
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
    /* 
        $scope.priorities = $scope.priorities.filter(function (item) {
          $scope.item = item; */
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
    /*  sessionStorage.setItem('quizItem', JSON.stringify($scope.runningData));
      return !selectedhead || !angular.equals(item, selectedhead);

    });
    console.log('priority', $scope.priorities);
    if ($scope.priorities == "") { // this disables the <select> tag
      $scope.emptyArr = true;
    } */





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
/* 
  $scope.turninAnswer = function (questionhead) {

    var text = questionhead;
    var integer = parseInt(text, 10);
    // returns 42
    //$scope.data = $scope.data.filter(function (ans) {
    console.log('answer', integer);
    //return selectedhead || angular.equals(ans, selectedhead);
    // return !shead || !angular.equals(item, shead); 
    //  });


  } */

  $scope.index = 0;
  $scope.questions = $scope.data[$scope.index];
  $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
  $scope.isPrevious = false;
  $scope.isOk = false;
  $scope.isDrag = false;
  $scope.isNext = false;
  $scope.isDone = false;
  $scope.isResult = true;
  $scope.indexPoint = $scope.index;
  console.log('questions ', $scope.data);
  console.log('isNext',$scope.isNext);


/* 
  $scope.callChild = function($event) {
    // do something else
    $event.stopPropagation();
    $event.preventDefault();
}; */

  $scope.totalquestions = $scope.data.length;
  $scope.currentquestion = $scope.data[$scope.index];
  console.log('total question', $scope.totalquestions);
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

  /* 
    var value = $scope.choices;
    var blkstr = [];
    $.each(value, function(idx2,val2) {                    
      var str = idx2 + ":" + val2;
      blkstr.push(str);
    });
    console.log(blkstr.join("")); */



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
    $scope.isDrag = false;
    if ($scope.index < $scope.data.length) {
      $scope.index = $scope.index + 1;
      $scope.questions = $scope.data[$scope.index];
      //  $scope.qid = $scope.index + 1;
      //$scope.qid = $scope.qid + 1;
      $scope.buttonType = $scope.questions.type == 'multiple' ? 'checkbox' : 'radio';
      $scope.isPrevious = false;
      console.log('index', $scope.data[$scope.index]);
      if ($scope.index == $scope.data.length) {
        $scope.isNext = false;
      }
    } else {
      // disble next botton logic
      $scope.isNext = false;
    }

    $scope.arrayQuestion($scope.questions.question);
    $scope.initQuestion();
    /* $scope.list = [{
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
    }]; */
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


 

  $scope.previousQuestion = function () {
    $scope.isDrag = true;
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
  //$scope.choiceid = angular.element(document).find('#MyAnswer'); 
  //$scope.isanswer =0;

});

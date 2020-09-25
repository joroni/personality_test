var app = angular.module("quiz", ['psi.sortable','chart.js'])


app.controller("quizCtrl", function ($scope, $http) {
  
 

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
  $scope.user_id = {};
  $scope.group_id ={};
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
  //$scope.user_id = {};
  //$scope.user_id = '23';
  //$scope.choice_id = ;
  $scope.totalquestions = {};


  
  $scope.fetchGetVariables = function () {
    //var loc = "http://localhost/quizsample7b/page.html?location=asokoro&day=today&time=1100";
    //var loc = "http://localhost/quizsample7b/page.html?user_id=jraymund.niconi@gmail.com&day=today&time=1100";
    var loc = window.location.href; // Use this in actual use
    //var result = {};
    $scope.userdata = {};
    
    var parts = loc.split("?");
    if (parts.length > 0) {
      var params = parts[1].split("&");
      for (var i = 0; i < params.length; i++) {
        var keyValuePair = params[i].split("=");
        var key = keyValuePair[0];
        var value = "";
        if (keyValuePair.length > 0) {
          value = keyValuePair[1];
        }
        $scope.userdata[key] = value;
        
        
      }
    }
    return $scope.userdata;
  }
  console.log('fetchGetVariables', $scope.fetchGetVariables());





  $scope.userdata = $scope.fetchGetVariables()
   $scope.getUserInfo = function(){
    console.log('userdata',$scope.userdata);
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        'user_id':$scope.userdata.user_id,
        'email':$scope.userdata.email,
        'group_id':$scope.userdata.group_id,
        'request_type': 5
      },
    }).then(function successCallback(response) {
     let userInfo = response.data;
      console.log('userInfo', userInfo);
      $scope.userInfo = userInfo;
      /* $scope.user_id = userInfo.user_id;
      $scope.group_id = userInfo.group_id;
      sessionStorage.setItem('userinfo', JSON.stringify($scope.userInfo)); */
      return $scope.userInfo;
     // $scope.data = questionData;
      //console.log($scope.data);
      //return questionData;
    });
   }
   
 
  $scope.getUsers = function(){
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        request_type: 6
      },
    }).then(function successCallback(response) {
     let usersData = response.data;
      console.log(usersData);
      return usersData;
     // $scope.data = questionData;
      //console.log($scope.data);
      //return questionData;
    });
   }




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

  $scope.userid = $scope.fetchGetVariables().user_id;
  $scope.groupid = $scope.fetchGetVariables().group_id;
  $scope.add = function () {
   //let newuserdata = {};

    $scope.isDrag = true;
    console.log(angular.element('#MyAnswer')[0].value);
    $scope.isanswer = angular.element('#MyAnswer')[0].value;
    len = $scope.answers.length;
    $scope.user_id = $scope.userid;
    $scope.group_id = $scope.groupid;
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
        'user_id':  $scope.user_id,
        'question_id': $scope.questions.question_id,
        'choice_id': $scope.isanswer,
        'group_id':$scope.group_id,
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


 
  $scope.removemytest = function (index) {

    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        user_id: $scope.userid,
        request_type: 7
      },
    }).then(function successCallback(response) {
      if (response.data == 1){
      alert('Record is now resetted.');
        $scope.answers.splice(index, 1);
      }else{
        alert('Record not deleted.');
      }
    });
  }



  
  $scope.getUserResult = function(){
    
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      data: {
        'user_id':$scope.user_id,
        'request_type': 4
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
    console.log('Hi', JSON.stringify(lol));
    var myStr = JSON.stringify(lol);
    var newStr = myStr.replace(/{"choice_id":/g, "").replace(/}/g, "");
    let newlol = JSON.parse(newStr);

    var array = newlol,
    result = array.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);
  
    $scope.userResult = result;
    console.log($scope.userResult);
  
    $scope.labels = ['E', 'A', 'W', 'F'];
    $scope.series = ['Series A', 'Series B'];
    $scope.dataresult = [$scope.userResult];
    sessionStorage.setItem('myresult', JSON.stringify($scope.userResult));
  /*   } */
  $scope.addScore($scope.userResult);
    });
   }
   
  




  $scope.userid = $scope.fetchGetVariables().user_id;
  $scope.groupid = $scope.fetchGetVariables().group_id;
  //$scope.myrunningscore = JSON.parse(sessionStorage.getItem('myresult'));
  $scope.addScore = function (dataresult) {
   //let newuserdata = {};

   // let myscoring = $scope.myrunningscore;
    $scope.user_id = $scope.userid;
    $scope.group_id = $scope.groupid;
    $scope.myscores = [];

    for (let i = 0; i < dataresult.length; i++) {
      console.log(dataresult.length);
      $scope.myscores.push(
        dataresult[i]
      );
    } 
    console.log($scope.myscores);
    $http({
      method: 'post',
      url: 'processor/addremove.php',
      //data: newuserdata
      data: {
        'user_id':  $scope.user_id,
        'group_id': $scope.group_id,
        'user_earth': $scope.myscores[0],
        'user_air': $scope.myscores[1],
        'user_water': $scope.myscores[2],
        'user_fire': $scope.myscores[3],
        'request_type': 8
      },
    }).then(function successCallback(response) {
      if (response.data.length > 0) {
       // $scope.answers.push(response.data[0]);
       console.log('Scores submitted');
      } else {
        alert('Seems you already have taken the test. Sorry, This test will not be recorded.');
      }
    });
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
   

  }

  

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
      image: "ribbon-a.png",
      value: 4
    }, {
      label: "2nd",
      image: "ribbon-b.png",
      value: 3
    }, {
      label: "3rd",
      image: "ribbon-c.png",
      value: 2
    }, {
      label: "4th",
      image: "ribbon-d.png",
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
    
    selectedhead = $scope.qid;
    $scope.thisQ = JSON.parse(sessionStorage.getItem('quizItem'));
    console.log($scope.thisQ);
    $scope.runningQuestionData.push(selectedhead);
    sessionStorage.setItem('quizItem', JSON.stringify($scope.runningQuestionData));
    console.log($scope.thisQ + '-' + $scope.index);
   

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
  
    console.log('datavalue', $scope.datavalue);

  }

  
});

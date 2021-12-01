// <!--<!DOCTYPE html>-->
// <!--<html lang="en">-->
// <!--<head>-->
// <!--    <meta charset="UTF-8">-->
// <!--    <title>Title</title>-->
// <!--    <script src="./app.component.js"></script>-->
// <!--    <script src="./index.js"></script>-->
//
// <!--</head>-->
// <!--<body>-->
// <!--<div ng-app="calc"-->
// <!--     ng-controller="calculator">-->
// <!-- -->
// <!--    <div ng-controller="fetchController">-->
// <!--    <p ng-repeat="question in questions">-->
// <!--        {{question.equation}}-->
// <!--    </p>-->
// <!--        <label for="answer">Answer</label>-->
// <!--        <input id="answer" type="text" />-->
// <!--    </div>-->
// <!--</div>-->
// <!--</body>-->
// <!--</html>-->


'use strict';


angular.module('question').
component('question', {
    // template:"<div>{{title}}</div>",
    templateUrl: "/question.html",
    controller: function ($scope, $http) {
        $http.get("/questionsList.json").then(success, error);

        function success(response) {
            console.log(response.data);
            $scope.questionsList = response.data;
            $scope.equation = response.data.equation
            console.log(response.data.equation)
        }

        function error(response) {
            console.log(response)
        }

        $scope.calculate = function () {
          return $scope.equation;
        };

        $scope.checkAnswer = function ($index) {
            if ($scope.questionsList === undefined && $scope.answer === undefined) {
                return;
            }
            let result = $scope.calculate();
            console.log($scope.calculate())
            var answer = $scope.answer;
            if (result === answer) {
                $scope.isCorrect(true);
                return;
            }
            $scope.isCorrect(false);
        };


        $scope.isCorrect = function (trueOrFalse) {
            if (trueOrFalse) {
                console.log(trueOrFalse);
                $scope.result = "You Got It";
                return;
            }
            $scope.result = "Wrong Answer";
        };
    }
    // $scope.fetchQuestions = function ($scope, $http) {
    // var request = {
    //     method: 'get',
    //     url: './questionsList.json',
    //     dataType: 'json',
    //     contentType: "application/json",
    // };
    //     $scope.arrQuestions = [];
    //     console.log($scope.arrQuestions)
    //
    //     $http(request)
    //         .success(function (jsonData) {
    //             $scope.arrQuestions = jsonData;
    //             $scope.list = $scope.arrQuestions;
    //             console.log(jsonData);
    //             console.log($scope.arrQuestions)
    //             console.log($scope.list)
    //         })
    //         .error(function () {
    //             console.log($scope.error)
    //         });
    //     console.log(jsonData);
    //     console.log($scope.arrQuestions)
    //     console.log($scope.list)
    //      return $scope.list;
    // }

})
// }).controller('Question',function ($scope) {
//     console.log("hello");
//     $scope.title = 'Hi there'
// });

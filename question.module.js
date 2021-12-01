// 'use strict';

// const fetchQuestions = async ($http) => {
//     console.log($http)
//     try {
//         const jsonData = await $http({
//             method: 'get',
//             url: './questionsList.json',
//             dataType: 'json',
//             contentType: "application/json",
//         })
//         console.log(jsonData);
//         return jsonData.data;
//     } catch (error) {
//         console.error(error)
//     }
// }
//
//
//
//
// angular.module('question').component('question', {
//     template: '<div ng-init="init()">\n' +
//         '        <div ng-if="!loading" ng-repeat="question in list">\n' +
//         '           <span>{{question.equation}}</span>\n' +
//         '            <label for="answer">Answer</label>\n' +
//         '            <input id="answer" type="text" />\n' +
//         '        </div>',
//     controller: function ($scope, $http) {
//         $scope.init = async function() {
//             $scope.list = [];
//             $scope.loading = true
//             console.log("loading...", $scope.loading);
//             $scope.list = await fetchQuestions($http);
//             console.log("loaded", $scope.list)
//             $scope.loading = false
//             console.log("loading", $scope.loading)
//         }
//         $scope.calculate = function () {
//             return eval($scope.equation);
//         };
//
//         $scope.checkAnswer = function () {
//             if ($scope.equation === undefined && $scope.answer === undefined) {
//                 return;
//             }
//             var result = $scope.calculate();
//             var answer = eval($scope.answer);
//             if (result === answer) {
//                 $scope.isCorrect(true);
//                 return;
//             }
//             $scope.isCorrect(false);
//         };
//
//         $scope.isCorrect = function (trueOrFalse) {
//             if (trueOrFalse) {
//                 console.log(trueOrFalse);
//                 $scope.result = "You Got It";
//                 return;
//             }
//             $scope.result = "Wrong Answer";
//         };
// }})

'use strict';

var question = angular.module('question', []);
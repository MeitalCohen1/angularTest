// const fetchQuestions = async ($http) => {
//   console.log($http)
//   try {
//     const jsonData = await $http({
//       method: 'get',
//       url: './questionsList.json',
//       dataType: 'json',
//       contentType: "application/json",
//     })
//     console.log(jsonData);
//     return jsonData.data;
//   } catch (error) {
//     console.error(error)
//   }
// }
//
// angular.module("calc", []).controller("calculator", [
//   "$scope", "$http",
//   function ($scope, $http) {
//     $scope.init = async function() {
//       $scope.list = [];
//       $scope.loading = true
//       console.log("loading...", $scope.loading);
//       $scope.list = await fetchQuestions($http);
//       console.log("loaded", $scope.list)
//       $scope.loading = false
//       console.log("loading", $scope.loading)
//     }
//     $scope.calculate = function () {
//       return eval($scope.equation);
//     };
//
//     $scope.checkAnswer = function () {
//       if ($scope.equation === undefined && $scope.answer === undefined) {
//         return;
//       }
//       var result = $scope.calculate();
//       var answer = eval($scope.answer);
//       if (result === answer) {
//         $scope.isCorrect(true);
//         return;
//       }
//       $scope.isCorrect(false);
//     };
//
//     $scope.isCorrect = function (trueOrFalse) {
//       if (trueOrFalse) {
//         console.log(trueOrFalse);
//         $scope.result = "You Got It";
//         return;
//       }
//       $scope.result = "Wrong Answer";
//     };
//   }
// ]);
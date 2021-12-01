"use strict";

angular.module("question").component("question", {
  // template:"<div>{{title}}</div>",
  templateUrl: "/question.html",
  controller: function ($scope) {
    $scope.checkAnswer = function (answer, key) {
      console.log(key);
      if (
        ($scope.questionsList === undefined && answer === undefined) ||
        answer === ""
      ) {
        $scope.result = "";
        return;
      }
      const result = $scope.questionsList[key].answer;

      if (result === answer) {
        $scope.isCorrect(true, key);
        return;
      }
      $scope.isCorrect(false, key);
    };

    $scope.isCorrect = function (trueOrFalse, key) {
      if (trueOrFalse) {
        console.log(trueOrFalse);
        $scope.result = "You Got It";
        return;
      }
      console.log(trueOrFalse);
      $scope.result = "Wrong Answer";
    };
  },
});

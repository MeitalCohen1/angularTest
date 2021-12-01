"use strict";

angular.module("test").component("test", {
  templateUrl: "app/test/test.html",
  controller: function ($scope, $http) {
    $http.get("../../questions.json").then(success, error);

    function success(response) {
      $scope.questionsList = response.data;
    }
    function error(response) {
      console.log(response);
    }
  },
});

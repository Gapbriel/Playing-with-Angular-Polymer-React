'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:comment
 * @description
 * # comment
 */
angular.module('comment', [])
  .directive('commentModel', function () {
    return {
      template: '<div class="comment">' +
                  '<h2 class="commentAuthor">' +
                      '{{author}}' +
                  '</h2>' +
                  '<p class="commentTimeAgo">'+
                   '-commented '+
                   '<time-ago from-time="{{time}}">'+
                   '</time-ago>' + 
                   '</p></br>' +
                  '<ng-transclude></ng-transclude>' +
                '</div>',
      restrict: 'E',
      transclude: true,
      scope: {
        author: '@',
        time:'@' 
      },
      link: function postLink(scope, element, attrs) {}
    };
  });

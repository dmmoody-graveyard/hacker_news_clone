hackNewsClone.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, ArticleFactory, CommentFactory) {
  $scope.article = CommentFactory.findById(ArticleFactory.articles, $stateParams.articleId);

});

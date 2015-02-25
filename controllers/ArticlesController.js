hackNewsClone.controller('ArticlesCtrl', function ArticlesCtrl($scope, ArticleFactory){
  $scope.article = ArticleFactory.articles;
  $scope.ArticleFactory = ArticleFactory;
});

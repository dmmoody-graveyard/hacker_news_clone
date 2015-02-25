hackNewsClone.factory('ArticleFactory', function ArticleFactory(){
  var factory = {};
  factory.articles = [];
  factory.addArticle = function() {
    factory.articles.push({ name: factory.articleName, id: factory.articles.length + 1, comments: [] });
    factory.articleName = null;
  };
  
  return factory;
});

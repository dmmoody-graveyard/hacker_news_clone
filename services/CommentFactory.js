hackNewsClone.factory('CommentFactory', function(){
  return {
    findById: function(collection, id) {
      for(var i = 0; i < collection.length; i++) {
        debugger;
        if (collection[i].id == id) {
          return collection[i];
        }
      };
      return null;
    }
  }
});

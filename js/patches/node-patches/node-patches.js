YUI.add('node-patches', function(Y) {
   Y.Node.prototype.setHTML = function(content) {
      this.set('innerHTML', content);
   }
});
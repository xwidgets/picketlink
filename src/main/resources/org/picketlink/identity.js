package("org.picketlink");

org.picketlink.Identity = xw.NonVisual.extend({
  _constructor: function() {
    this._super(false);
    this.registerProperty("binding", {default: "identity"});
    this.registerProperty("url");
  },
  open: function() {
  
  },
  canResolve: function(expr) {
    return expr == this.binding.value;
  },
  resolve: function(expr) {
    if (expr == this.binding.value) {

    }  
  },
  toString: function() {
    return "org.picketlink.Identity";
  }
});

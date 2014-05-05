package("org.picketlink");

org.picketlink.Identity = xw.NonVisual.extend({
  _constructor: function() {
    this._super(false);
    this.registerProperty("binding", {default: "identity"});
    this.registerProperty("url");
    this.loggedIn = false;
    this.account = null;
  },
  open: function() {
    xw.EL.registerResolver(this);  
  },
  loginCallback: function() {
    this.loggedIn = pl.loggedIn;
    this.account = pl.account;
    xw.EL.notify(this.binding.value);
    xw.Event.fire("org.picketlink.identity.loggedIn");
  },
  login: function(user, pass) {
    var that = this;
    var cb = function() {
      that.loginCallback();
    }
    pl.login(user, pass, cb);
  },
  canResolve: function(expr) {    
    return expr == this.binding.value;
  },
  resolve: function(expr) {
    if (this.canResolve(expr)) {
      return this;
    } 
  },
  toString: function() {
    return "org.picketlink.Identity";
  }
});

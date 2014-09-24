package("org.picketlink");

org.picketlink.Identity = xw.NonVisual.extend({
  _constructor: function() {
    this._super(false);
    this.registerProperty("binding", {default: "identity"});
    this.registerProperty("basePath", {default: "", listener: this.setBasePath});
  },
  open: function() {
    xw.EL.registerResolver(this);
    if (xw.Sys.isUndefined(pl.loggedIn)) {
      var that = this;
      var cb = function() {
        that.loginCallback();
      };
      pl.status(cb);
    }
  },
  isLoggedIn: function() {
    return pl.loggedIn;
  },
  setBasePath: function(basePath) {
    pl.basePath = basePath;
  },
  loginCallback: function() {
    xw.EL.notify(this.binding.value);
    if (this.isLoggedIn()) {
      xw.Event.fire("org.picketlink.identity.loggedIn");
    }
  },
  logoutCallback: function() {
    xw.EL.notify(this.binding.value);
    if (!this.isLoggedIn()) {
      xw.Event.fire("org.picketlink.identity.loggedOut");
    }
  },
  login: function(user, pass) {
    var that = this;
    var cb = function() {
      that.loginCallback();
    }
    pl.login(user, pass, cb);
  },
  logout: function() {
    var that = this;
    var cb = function() {
      that.logoutCallback();
    }
    pl.logout(cb);
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

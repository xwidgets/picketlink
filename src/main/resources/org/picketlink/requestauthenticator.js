package("org.picketlink");

org.picketlink.RequestAuthenticator = xw.NonVisual.extend({
  _constructor: function() {
    this._super(false);
  },
  decorate: function(request) {
    if (pl.token != null) {
      request.setRequestHeader("Authorization", "Token " + pl.token);
    }
  },
  toString: function() {
    return "org.picketlink.RequestAuthenticator";
  }
});

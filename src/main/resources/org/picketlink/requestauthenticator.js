package("org.picketlink");

org.picketlink.RequestAuthenticator = xw.NonVisual.extend({
  _constructor: function() {
    this._super(false);
  },
  decorate: function(request) {
    if (pl.getToken() != null) {
      request.setRequestHeader("Authorization", "Token " + pl.getToken());
    }
  },
  toString: function() {
    return "org.picketlink.RequestAuthenticator";
  }
});

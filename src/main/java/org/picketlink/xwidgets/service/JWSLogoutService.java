package org.picketlink.xwidgets.service;

import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import org.picketlink.Identity;
import org.picketlink.idm.credential.Token;
import org.picketlink.idm.model.Account;
import org.picketlink.xwidgets.jws.JWSToken;

import org.picketlink.authorization.annotations.LoggedIn;

/**
 * De-authenticates the current user
 *
 * @author Shane Bryzak
 *
 */
@Path("/picketlink/logout")
public class JWSLogoutService {
    @Inject Token.Provider<JWSToken> provider;

    @Inject
    private Identity identity;

    @POST
    @LoggedIn
    public void logout() {
        Account account = this.identity.getAccount();
        provider.invalidate(account);
        identity.logout();
    }
}

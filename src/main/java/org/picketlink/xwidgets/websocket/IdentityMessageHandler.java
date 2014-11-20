package org.picketlink.xwidgets.websocket;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.websocket.Session;

import org.xwidgets.websocket.Message;
import org.xwidgets.websocket.MessageHandler;
import org.picketlink.idm.IdentityManager;
import org.picketlink.idm.credential.Credentials;
import org.picketlink.idm.credential.TokenCredential;
import org.picketlink.xwidgets.jws.JWSToken;

/**
 * 
 * @author Shane Bryzak
 */
@Stateless
public class IdentityMessageHandler {

    @Inject IdentityManager identityManager;

    @MessageHandler("identity.login")
    public void login(Message message, Session session)
    {
        String encodedToken = message.getPayload().get("jwtToken").toString();
        JWSToken token = new JWSToken(encodedToken);
        TokenCredential credential = new TokenCredential(token);

        identityManager.validateCredentials(credential);

        if (credential.getStatus().equals(Credentials.Status.VALID))
        {
           session.getUserProperties().put("identity.userId", 
                   credential.getValidatedAccount().getId());
        }
    }
}

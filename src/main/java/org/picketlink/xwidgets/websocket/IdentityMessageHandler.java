package org.picketlink.xwidgets.websocket;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.websocket.Session;

import org.xwidgets.websocket.Message;
import org.xwidgets.websocket.MessageHandler;
import org.picketlink.idm.IdentityManager;
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
        TokenCredential jwtToken = new TokenCredential(new JWSToken(
                message.getPayload().get("jwtToken").toString()));

        identityManager.validateCredentials(jwtToken);

        session.getUserProperties();
    }
}

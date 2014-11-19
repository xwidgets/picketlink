package org.picketlink.xwidgets.jws;

import org.picketlink.idm.credential.AbstractToken;
import org.picketlink.json.jose.JWS;
import org.picketlink.json.jose.JWSBuilder;

/**
 * Basic JWS token implementation
 *
 * @author Shane Bryzak
 *
 */
public class JWSToken extends AbstractToken 
{
   private final JWS jws;

   public JWSToken(String encodedToken) {
       super(encodedToken);
       this.jws = new JWSBuilder().build(encodedToken);
   }

   @Override
   public String getSubject() {
       return this.jws.getSubject();
   }
}
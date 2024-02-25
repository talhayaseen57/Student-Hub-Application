package com.sherenterprise.studenthubapplication.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

import static com.sherenterprise.studenthubapplication.security.SecurityConstants.JWT_EXPIRY_PERIOD;
import static com.sherenterprise.studenthubapplication.security.SecurityConstants.JWT_SECRET_KEY;

@Component
public class JWTGenerator {

    public String generateToken (Authentication authentication) {
        String username = authentication.getName();
        Date creationDate = new Date();
        Date expiryDate = new Date(creationDate.getTime() + JWT_EXPIRY_PERIOD);

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(creationDate)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET_KEY)
                .compact();

        return token;
    }

    public String getUsernameJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(JWT_SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (Exception ex) {
            throw new AuthenticationCredentialsNotFoundException("The given token is either incorrect or expired.", ex.fillInStackTrace());
        }
    }

}

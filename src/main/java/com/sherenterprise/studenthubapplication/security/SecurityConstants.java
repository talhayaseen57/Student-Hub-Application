package com.sherenterprise.studenthubapplication.security;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;

public class SecurityConstants {

    public static final long JWT_EXPIRY_PERIOD = 60000;     // 60000 == 1 hour
    //    public static final String JWT_SECRET_KEY = "bebba";
    public static final Key JWT_SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS512);

}
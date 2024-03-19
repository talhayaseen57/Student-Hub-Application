package com.sherenterprise.studenthubapplication.web;

import com.sherenterprise.studenthubapplication.Dto.AuthResponseDTO;
import com.sherenterprise.studenthubapplication.Dto.LoginDTO;
import com.sherenterprise.studenthubapplication.Dto.RegisterDTO;
import com.sherenterprise.studenthubapplication.domain.Authority;
import com.sherenterprise.studenthubapplication.domain.UserEntity;
import com.sherenterprise.studenthubapplication.repository.AuthorityRepository;
import com.sherenterprise.studenthubapplication.repository.UserRepository;
import com.sherenterprise.studenthubapplication.security.JWTGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Collections;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private AuthorityRepository authorityRepository;
    private PasswordEncoder passwordEncoder;
    private JWTGenerator jwtGenerator;

    @Autowired
    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository,
                          AuthorityRepository authorityRepository, PasswordEncoder passwordEncoder,
                          JWTGenerator jwtGenerator) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }

    @PostMapping("/login")
//    public ResponseEntity<?> login (@RequestBody LoginDTO loginDTO) {
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            loginDTO.getUsername(), loginDTO.getPassword()
//                    ));
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        } catch (Exception e) {
//
//        }
//        return new ResponseEntity<>("Login Successful", HttpStatus.OK);
//    }
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDTO loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(), loginDto.getPassword()
                ));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);

        return new ResponseEntity<>(new AuthResponseDTO(token), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO registerDto) {
        if(userRepository.existsByUsername(registerDto.getUsername())) {
            return new ResponseEntity<>("This username already exists!", HttpStatus.BAD_REQUEST);
        }

        UserEntity new_user = new UserEntity();
        new_user.setUsername(registerDto.getUsername());
        new_user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        new_user.setCohortStartData(LocalDate.now());

        Authority authorities = authorityRepository.findByName("STUDENT").get();
        new_user.setAuthorities(Collections.singletonList(authorities));

        userRepository.save(new_user);

        return new ResponseEntity<>("Username is successfully registered!", HttpStatus.OK);
    }

}

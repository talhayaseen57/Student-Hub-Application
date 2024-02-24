package com.sherenterprise.studenthubapplication.service;

import com.sherenterprise.studenthubapplication.domain.Authority;
import com.sherenterprise.studenthubapplication.domain.UserEntity;
import com.sherenterprise.studenthubapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity loadedUser = userRepository.findByUsername(username).orElseThrow(
                () -> new UsernameNotFoundException("The given username is incorrect."));

        return new User(loadedUser.getUsername(), loadedUser.getPassword(), mapAuthorities(loadedUser.getAuthorities()));
    }

    private Collection<GrantedAuthority> mapAuthorities(List<Authority> authorities) {
        return authorities.stream().map(authority -> new SimpleGrantedAuthority(authority.getName())).collect(Collectors.toList());
    }

}

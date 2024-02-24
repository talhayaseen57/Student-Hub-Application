package com.sherenterprise.studenthubapplication.Dto;

import java.time.LocalDate;

public class RegisterDTO {

    private String username;
    private String password;
    private LocalDate cohortStartData;

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public LocalDate getCohortStartData() {
        return cohortStartData;
    }
    public void setCohortStartData(LocalDate cohortStartData) {
        this.cohortStartData = cohortStartData;
    }

}

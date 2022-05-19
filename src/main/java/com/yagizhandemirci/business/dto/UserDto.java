package com.yagizhandemirci.business.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// LOMBOK
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder


public class UserDto {

    private Long userId;
    private String userFirstName;
    private String userLastName;
    private String userEmail;
    private String userPhoto;
}